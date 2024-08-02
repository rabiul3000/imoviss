import React, { useState } from 'react';
import toast from 'react-hot-toast';
import useGetConversations from '../../hooks/useGetConversations';
import useConversation from '../../zustand/useConversation';

const SearchBar = () => {
	//  3.55.36
	const [search, setSearch] = useState('');
	const { conversations } = useGetConversations();
	const { setSelectedConversation } = useConversation();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!search) return;
		if (search.length <= 3) return toast.errpsoor('name must 3 character long');

		const conversation = conversations.find((c) =>
			c.username.toLowerCase().includes(search.toLowerCase())
		);

		if (conversation) {
			setSelectedConversation(conversation);
			setSearch('');
		} else {
			toast.error('no such user');
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<label className='input input-bordered flex items-center gap-2 bg-yellow-400 '>
				<input
					type='text'
					className='grow bg-white rounded text-black'
					placeholder='Search'
					onChange={(e) => setSearch(e.target.value)}
					value={search}
				/>

				<button className='btn btn-sm btn-circle'>
					<SearchIcon />
				</button>
			</label>
		</form>
	);
};

const SearchIcon = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 16 16'
		fill='white'
		className='h-4 w-4 opacity-70'
	>
		<path
			fillRule='evenodd'
			d='M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z'
			clipRule='evenodd'
		/>
	</svg>
);

export default SearchBar;
