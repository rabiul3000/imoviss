import React from 'react';

const Conversation = () => {
	return (
		<>
			<div className='flex gap-2 items-center hover-bg-sky-500 rounded p-2 py-1 cursor-pointer my-1 hover:bg-sky-400'>
				<div className='avatar online'>
					<div className='w-12 rounded-full'>
						<img
							src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
							alt='avatar'
						/>
					</div>
				</div>

				<div className='flex flex-col flex-1'>
					<div className='flex gap-3 justify-between'>
						<p className='font-bold text-gray-200'>abed ali</p>
						<span className='text-xl'>😎</span>
					</div>
				</div>
			</div>
			<div className='devider my-0 py-0 h-1' />
		</>
	);
};

export default Conversation;
