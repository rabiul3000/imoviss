import React, { useEffect, useRef } from 'react';
import Message from './Message';
import useGetMessages from '../../hooks/useGetMessages';
import MessageSkeleton from '../skeletons/MessageSkeleton';
import useListenMessages from '../../hooks/useListenMessages';

const Messages = () => {
	const { loading, messages } = useGetMessages();
	useListenMessages();
	const lastMessageRef = useRef();

	useEffect(() => {
		lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
	}, [messages]);

	return (
		<div className='flex-1 overflow-y-auto'>
			{loading && (
				<>
					<MessageSkeleton />
					<MessageSkeleton />
					<MessageSkeleton />
				</>
			)}
			{!loading && messages.length === 0 ? (
				<p className='text-center text-3xl text-gray-300 font-semibold'>
					No Message yet
				</p>
			) : (
				messages.map((message) => (
					<div key={message._id} ref={lastMessageRef}>
						<Message message={message} />
					</div>
				))
			)}
		</div>
	);
};

export default Messages;
