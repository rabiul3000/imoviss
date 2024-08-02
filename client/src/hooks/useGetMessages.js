import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import useConversation from '../zustand/useConversation';
import axios from 'axios';

const useGetMessages = () => {
	const [loading, setLoading] = useState(false);
	const { selectedConversation, messages, setMessages } = useConversation();

	useEffect(() => {
		const getMessages = async () => {
			setLoading(true);
			try {
				const res = await fetch(`/api/messages/${selectedConversation._id}`);
				const data = await res.json();
				if (data.error) throw new Error(error.message);
				setMessages(data);

			} catch (error) {
				toast.error(error.message);
			} finally {
				setLoading(false);
			}
		};

		if (selectedConversation?._id) {
			getMessages();
		}
	}, [selectedConversation._id]);

	return { messages, loading };
};

export default useGetMessages;
