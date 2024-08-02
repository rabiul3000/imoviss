import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useSocketContext } from '../context/SocketContext';
import useConversation from '../zustand/useConversation';
import inComingSound from '../assets/audio/chime.mp3'


const useListenMessages = () => {
	const { socket } = useSocketContext();
	const { messages, setMessages } = useConversation();

	useEffect(() => {
		socket?.on('newMessage', (newMessage) => {
            newMessage.shake = true;
            const sound = new Audio(inComingSound);
            sound.volume = 0.5;
            sound.play();     
			setMessages([...messages, newMessage]);
		}); 

		return () => socket?.off('newMessage');
	}, [socket, messages, setMessages]);
};

export default useListenMessages;
