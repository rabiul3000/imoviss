import React from 'react';

const GenderInput = () => {
	return (
		<div className='items-center space-x-4 text-white bg-none text-center '>
			<label className='inline-flex items-center'>
				<input
					type='radio'
					className='form-radio h-5 w-5 text-green-600'
					name='gender'
					value='male'
				/>
				<span className='ml-2 text-white'>Male</span>
			</label>

			<label className='inline-flex items-center'>
				<input
					type='radio'
					className='form-radio h-5 w-5 text-pink-600'
					name='gender'
					value='female'
				/>
				<span className='ml-2 text-white'>Female</span>
			</label>
		</div>
	);
};

export default GenderInput;
