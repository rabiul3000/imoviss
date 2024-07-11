import Conversation from '../models/conversation.model.js';
import Message from '../models/message.model.js';

export const sendMessage = async (req, res) => {
	const receiverId = await req.params.id; // the reciever id
	const message = await req.body.message;
	const senderId = await req.user._id; // current user id means me

	try {
		let conversation = await Conversation.findOne({
			participants: { $all: [senderId, receiverId] },
		});

		if (!conversation) {
			conversation = await Conversation.create({
				participants: [senderId, receiverId],
			});
		}

		const newMessage = new Message({ senderId, receiverId, message });
		if (!newMessage) throw new Error('message sent failed');

		if (newMessage) {
			conversation.messages.push(newMessage._id);
		}
		await Promise.all([conversation.save(), newMessage.save()]);
		return res.status(201).json(newMessage);
	} catch (error) {
		return res.status(403).json(error.message);
	}
};

export const getMessages = async (req, res) => {
	try {
		const { id: receiverId } = req.params; //id of other user
		const senderId = req.user._id; //id of the current logged in user or me;

		const conversation = await Conversation.findOne({
			participants: { $all: [senderId, receiverId] },
		}).populate('messages');

		if (!conversation) return res.status(400).json([]);
		const { messages } = conversation;

		return res.status(200).json(messages);
	} catch (error) {
		return res
			.status(403)
			.json('from getMessage.controller => ', error.message);
	}
};
