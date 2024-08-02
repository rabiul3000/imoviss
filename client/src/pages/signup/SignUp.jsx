import React from 'react';
import { Link } from 'react-router-dom';
import useSignup from '../../hooks/useSignup';

const SignUp = () => {
	const { loading, signup } = useSignup();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const user = {
			fullName: e.target.elements.fullName.value,
			username: e.target.elements.username.value,
			email: e.target.elements.email.value,
			password: e.target.password.value,
			confirmPassword: e.target.confirmPassword.value,
			gender: e.target.gender.value,
		};

		await signup(user);
	};

	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='h-full w-full bg-pink-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-20 border border-gray-100'>
				<h1 className='pt-2 text-3xl font-semibold text-center text-gray-950'>
					SignUp Page
				</h1>

				<form className='p-3' onSubmit={handleSubmit}>
					<label className='m-4 input input-bordered text-gray-800 bg-white flex items-center gap-2'>
						Full Name
						<input
							name='fullName'
							type='text'
							className='grow font-semibold'
							placeholder='john doh'
						/>
					</label>
					<label className='m-4 input input-bordered text-gray-800 bg-white flex items-center gap-2'>
						Username
						<input
							name='username'
							type='text'
							className='grow font-semibold'
							placeholder='john142'
						/>
					</label>
					<label className='m-4 input input-bordered text-gray-800 bg-white flex items-center gap-2'>
						Email
						<input
							name='email'
							type='text'
							className='grow font-semibold'
							placeholder='john@site.com'
						/>
					</label>

					<label className='m-4 input input-bordered text-gray-800 bg-white flex items-center gap-2'>
						Password
						<input
							name='password'
							type='text'
							className='grow font-semibold'
							placeholder='****'
						/>
					</label>
					<label className='m-4 input input-bordered text-gray-800 bg-white flex items-center gap-2'>
						Confirm Password
						<input
							name='confirmPassword'
							type='text'
							className='grow font-semibold'
							placeholder='****'
						/>
					</label>
					<div className='flex gap-2'>
						<input
							type='radio'
							name='gender'
							value='male'
							pattern='male'
							readOnly
						/>
						<label htmlFor='male'>Male</label>
						<input
							type='radio'
							name='gender'
							value='female'
							pattern='female'
							readOnly
						/>
						<label htmlFor='female'>Female</label>
					</div>

					<div>
						<button
							disabled={loading}
							className='bg-white border-none text-green-500 btn btn-block btn-sm mt-2 '
						>
							{loading ? <span className='loading loading-spinner'> </span> : 'SignUp'}
						</button>
					</div>

					<div className='mt-2'>
						<p className='text-white text-sm text-center'>
							Already Member?{' '}
							<Link
								to='/login'
								className='link link-hover underline hover:text-green-500'
							>
								Login here
							</Link>
						</p>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SignUp;
