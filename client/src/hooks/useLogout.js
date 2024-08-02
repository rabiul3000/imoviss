import { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';
// 3.02.42
const useLogout = () => {
	const [loading, setLoading] = useState(false);
	const { setAuthUser } = useAuthContext();

	const logout = async () => {
		setLoading(true);
		try {
			const res = fetch('/api/logout', {
				method: 'GET',
				headers: { 'Content-Type': 'application.json' },
			});

			const data = (await res).json();

			if (data.error) {
				throw new Error(data.error);
			}

			localStorage.removeItem('imoviss');
			setAuthUser(null);
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { loading, logout };
};

export default useLogout;
