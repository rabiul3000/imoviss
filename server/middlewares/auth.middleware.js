import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

export const isAuthorized = async (req, res, next) => {
	try {
		const { token } = await req.cookies;
		if (!token) throw new Error('unauthorized- no token found');

		const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
		if (!decodedToken) throw new Error('token is invalid');

		const user = await User.findById(decodedToken.data).select('-password');
		if (!user) throw new Error('no user detected');
		
		req.user = user;

		next();


	} catch (error) {
		return res.status(403).json({ error: error.message });
	}
};
