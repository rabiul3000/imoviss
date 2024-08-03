import React from 'react';
import Conversation from './Conversation';
import useGetConversations from '../../hooks/useGetConversations';

const Conversations = () => {
	const { loading, conversations } = useGetConversations();
	return (
		<div className='overflow-y-auto'>
			{conversations?.map((conversation) => (
				<Conversation 
					key={conversation._id} 
					conversation={conversation}
				 />
			))}

			{loading ? <span className='loading loading-spinner'></span> : null}
		</div>
	);
};

export default Conversations;
