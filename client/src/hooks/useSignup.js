import { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useSignup = () => {
	const [loading, setLoading] = useState(false);
	const { setAuthUser } = useAuthContext();

	const signup = async (user) => {
		const success = handleInputErrors(user);
		if (!success) return;

		setLoading(true);
		try {
			const res = await fetch('/api/register', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(user),
			});
			const data = await res.json();
			console.log(data)
			if (data.error) {
				throw new Error(data.error);
			}
			// save the user in localstorage
			localStorage.setItem('imoviss', JSON.stringify(data));
			
			// set the user to the user context to use every componants
			setAuthUser(data);

		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { loading, signup };
};

export default useSignup;

const handleInputErrors = ({
	fullName,
	username,
	email,
	password,
	confirmPassword,
	gender,
}) => {
	if (
		!fullName ||
		!username ||
		!email ||
		!password ||
		!confirmPassword ||
		!gender
	) {
		toast.error('field is empty');
		return false;
	}

	if (confirmPassword !== password) {
		toast.error('password do not matched');
		return false;
	}
	if (password.length < 6) {
		toast.error('password is less then 6 character');
		return false;
	}
	return true;
};
