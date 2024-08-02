import React from 'react';
import useConversation from '../../zustand/useConversation';
import { useSocketContext } from '../../context/SocketContext';

const Conversation = ({ conversation }) => {
	const { selectedConversation, setSelectedConversation } = useConversation();
	const selected = selectedConversation?._id === conversation._id;

	const { onLineUsers } = useSocketContext();

	const isOnline = onLineUsers.includes(conversation._id);

	return (
		<>
			<div
				onClick={() => setSelectedConversation(conversation)}
				className={`flex gap-2 items-center rounded p-2 py-1 cursor-pointer my-1 border border-gray-400 hover:bg-sky-400 ${
					selected ? 'bg-sky-400' : ''
				}`}
			>
				<div className={`avatar ${isOnline ? 'online' : ''}`}>
					<div className='w-12 rounded-full'>
						<img src={conversation.avatar} loading='lazy' alt='avatar' />
					</div>
				</div>

				<div className='flex flex-col flex-1'>
					<div className='flex gap-3 justify-between'>
						<p className='font-bold text-gray-200'>{conversation.username}</p>
					</div>
				</div>
			</div>
			<div className='devider my-0 py-0 h-1' />
		</>
	);
};

export default Conversation;
