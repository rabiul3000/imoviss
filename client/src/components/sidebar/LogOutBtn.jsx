import React from 'react';
import useLogout from '../../hooks/useLogout';

const LogOutBtn = () => {
	const { loading, logout } = useLogout();

	return (
		<div className='mt-auto text-sm pt-1 '>
			<button
				className='btn btn-xs btn-primary'			
				onClick={logout}
			>
				{
					loading ? <span className='loading loading-spinner'></span> :	'Log out'
				}
			
			</button>
		</div>
	);
};

export default LogOutBtn;
