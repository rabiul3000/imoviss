import React, { useEffect } from 'react';
import Messages from './Messages';
import MessageInput from './MessageInput';
import useConversation from '../../zustand/useConversation';
import { useAuthContext } from '../../context/AuthContext';

const MessageContainer = () => {
	const { selectedConversation, setSelectedConversation } = useConversation();

	useEffect(() => {
		return () => {
			setSelectedConversation(null);
		};
	}, [setSelectedConversation]);

	return (
		<div className='flex flex-col h-full w-full overflow-hidden'>
			{!selectedConversation ? (
				<NoChatSelected />
			) : (
				<>
					<div className='bg-slate-500 px-4 py-2'>
						<span className='label-text'>To: </span>
						<span className='text-grey-900 font-bold text-yellow-400'>
							{selectedConversation.username}
						</span>
					</div>
					<Messages />
					<MessageInput />
				</>
			)}
		</div>
	);
};

export default MessageContainer;

const NoChatSelected = () => {
	const { authUser } = useAuthContext();
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p className='text-lg'>Welcome, {authUser.user.username} </p>
				<p>Select a Conversation to start Messaging</p>
			</div>
		</div>
	);
};
