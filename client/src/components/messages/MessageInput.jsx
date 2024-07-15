import React from 'react';

const MessageInput = () => {
	return (
		<form className='px-4 my-3'>
			<div className='w-full flex items-center'>
				<input
					className='border text-sm rounded-lg block w-full p-2.5 bg-gray-600 text-white '
					type='text'
					placeholder='type a message'
				/>
				<button className='btn btn-sm ml-1 bg-transparent'>send</button>
			</div>
		</form>
	);
};

export default MessageInput;
