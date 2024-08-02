import React from 'react';
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';

const Login = () => {
	const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const email = e.target.elements.email.value;
		const password = e.target.elements.password.value;		 		
		await login(email, password); // 3.09.45
	};

	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='h-full w-full bg-pink-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-20 border border-gray-100'>
				<h1 className='text-3xl font-semibold text-center text-gray-950'>
					Login Page
				</h1>
				<form className='p-4' onSubmit={handleSubmit}>
					<label className='m-4 input input-bordered text-gray-800 bg-white flex items-center gap-2'>
						Email
						<input
							type='text'
							name='email'
							className='grow font-semibold'
							placeholder='john@site.com'
						/>
					</label>

					<label className='m-4 input input-bordered text-gray-800 bg-white flex items-center gap-2'>
						Password
						<input
							type='text'
							name='password'
							className='grow font-semibold'
							placeholder='****'
						/>
					</label>

					<div>
						<button disabled={loading} className='bg-white border-none text-green-500 btn btn-block btn-sm mt-2 '>
							{loading  ? <span className='loading loading-spinner'></span> :'Login'}
						</button>
					</div>
					<div className='mt-2'>
						<p className='text-white text-sm text-center'>
							Dont have an account?{' '}
							<Link
								to='/signup'
								className='link link-hover underline hover:text-green-500'
							>
								Register here
							</Link>
						</p>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
