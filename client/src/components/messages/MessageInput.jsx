import React, { useState } from 'react';
import useSendMessage from '../../hooks/useSendMessage';

const MessageInput = () => {
	const [message, setMessage] = useState('');
	const { loading, sendMessage } = useSendMessage();

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!message) return;

		await sendMessage(message);
		setMessage('');
	};

	return (
		<form className='px-4 my-3' onSubmit={handleSubmit}>
			<div className='w-full flex items-center'>
				<input
					className='border text-sm rounded-lg block w-full p-2.5 bg-gray-600 text-white '
					name='message'
					type='text'
					placeholder='type a message'
					onChange={(e) => setMessage(e.target.value)}
					value={message}
				/>
				<button disabled={loading} className='btn btn-sm ml-1 bg-transparent'>
					{loading ? <span className='loading loading-spinner'></span> : 'send'}
				</button>
			</div>
		</form>
	);
};

export default MessageInput;
