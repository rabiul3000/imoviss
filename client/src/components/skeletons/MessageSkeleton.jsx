import React from 'react';

const MessageSkeleton = () => {
	return (
		<div className='flex w-52 flex-col gap-4 px-3 py-8'>
			<div className='flex items-center gap-4'>
				<div className='skeleton h-12 w-12 shrink-0 rounded-full'></div>
				<div className='flex flex-col gap-4'>
					<div className='skeleton h-12 w-28'></div>
				</div>

				<div className='flex flex-col gap-4 ml-32 '>
					<div className='skeleton h-12 w-52'></div>
				</div>
				<div className='skeleton h-12 w-12 shrink-0 rounded-full'></div>
			</div>
		</div>
	);
};

export default MessageSkeleton;
