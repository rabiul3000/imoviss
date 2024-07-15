import React from 'react';
import Messages from './Messages';
import MessageInput from './MessageInput';

const MessageContainer = () => {
	const noChatSelected = false;
	return (
		<div className='flex flex-col h-full w-full overflow-hidden'>
			{noChatSelected ? (
				<NoChatSelected />
			) : (
				<>
					<div className='bg-slate-500 px-4 py-2'>
						<span className='label-text'>To: </span>{' '}
						<span className='text-grey-900 font-bold'>Rakib hasan</span>
					</div>
					<Messages />
					<MessageInput />
				</>
			)}
		</div>
	);
};

export default MessageContainer;

const NoChatSelected = () => (
	<div className='flex items-center justify-center w-full h-full'>
		<div className='px-4 text-center text-gray-200 font-semibold flex flex-col items-center gap-2'>
			<p className='text-lg'>Welcome, john </p>
			<p>Select a Conversation to start Messaging</p>
		</div>
	</div>
);
