import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useLogin = () => {
	const [loading, setLoading] = useState(false);
	const { setAuthUser } = useAuthContext();

	const login = async (email, password) => {
		const verified = handleLoginInputErrors(email, password);
		if (!verified) return;

		setLoading(true);

		try {
			const res = await fetch('/api/login', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email, password }),
			});

			const data = await res.json();

			if (data.error) {
				throw new Error(data.error);
			}

			// set the  data to the localstorage as user
			localStorage.setItem('imoviss', JSON.stringify(data));
			// update auth user context
			setAuthUser(data);
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { login, loading };
};

export default useLogin;

const handleLoginInputErrors = (email, password) => {
	if (!email || !password) {
		toast.error('please fill all the fields');
		return false;
	}
	return true;
};
