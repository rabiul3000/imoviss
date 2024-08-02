import React from 'react';
import { useAuthContext } from '../../context/AuthContext';
import useConversation from '../../zustand/useConversation';
import { format } from 'timeago.js';

const Message = ({ message }) => {
	//createdAt, message, receiverId, senderId, updatedAt

	const { authUser } = useAuthContext();
	const { selectedConversation } = useConversation();

	const myMessage = message.senderId === authUser?.user._id;

	const modifiedClassName = myMessage ? 'chat-end' : 'chat-start';
	const profilePicSrc = myMessage
		? authUser?.user.avatar
		: selectedConversation?.avatar;
	const bgColorOfBubble = myMessage && 'bg-blue-500';
	const shake = message.shake && 'shake';

	return (
		<div
			className={`chat ${modifiedClassName} py-4 cursor-pointer hover:opacity-90 `}
		>
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
					<img alt='user' src={profilePicSrc} />
				</div>
			</div>
			<div className={`${shake} chat-bubble text-white ${bgColorOfBubble}`}>
				{message.message}
			</div>
			<div className='chat-footer opacity-50 text-xs text-white flex gap-1 items-center'>
				{format(message.createdAt)}
			</div>
		</div>
	);
};

export default Message;
