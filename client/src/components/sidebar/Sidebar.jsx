import React from 'react';
import SearchBar from './SearchBar';
import Conversations from './Conversations';
import LogOutBtn from './LogOutBtn';

const Sidebar = () => {
	return (
		<div className='border-r border-slate-500 p-4 flex flex-col'>
			<SearchBar />
			<hr className='my-1' />
			<Conversations />
			<LogOutBtn />
		</div>
	);
};

export default Sidebar;
