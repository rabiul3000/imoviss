import avatar from '../helper/avatar.js';
import comparePassword from '../helper/comparePassword.js';
import createToken from '../helper/createToken.js';
import hashPassword from '../helper/hashPassword.js';
import removeCookie from '../helper/removeCookie.js';
import setUpCookie from '../helper/setUpCookie.js';
import User from '../models/user.model.js';

export const signUp = async (req, res) => {
	const { username, email, password, confirmPassword, gender } = req.body;

	try {
		if (password !== confirmPassword) {
			return res.status(404).json({ error: 'password is wrong' });
		}

		const user = await User.findOne({ email });
		if (user) return res.status(400).json({ error: 'user already exist' });

		const newUser = new User({
			username,
			email,
			password: await hashPassword(password),
			gender,
			avatar: avatar(gender, username),
		});

		if (newUser) {
			await newUser.save();
			const token = createToken(newUser._id);
			setUpCookie(token, res);
			return res.status(201).json({ newUser });
		} else {
			return res.status(400).json({ error: 'no user data to save' });
		}
	} catch (error) {
		return res.status(404).json({ error: error.message });
	}
};

export const login = async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = await User.findOne({ email });
		if (!user) return res.status(400).json({ error: 'wrong email' });

		const passwordCorrect = await comparePassword(password, user.password);
		if (!passwordCorrect)
			return res.status(400).json({ error: 'wrong password' });

		setUpCookie(createToken(user._id), res);
		const { password: _, ...userData } = user.toObject();

		return res.status(200).json({ user: userData });
	} catch (error) {
		return res.status(404).json({ error: error.message });
	}
};

export const logOut = (req, res) => {
	try {
		removeCookie(res);
		return res.status(200).json({ message: 'user has been logged out' });
	} catch (error) {
		return res.status(404).json({ error: error.message });
	}
};

export const allUsers = async (req, res) => {
	try {
		const users = await User.find();

		return res.status(200).json(users);
	} catch (error) {
		return res.status(400).json(error);
	}
};

export const deleteAllUsers = async (req, res) => {
	try {
		const users = await User.deleteMany({});
		if (users.deletedCount > 0)
			return res.status(200).json('all users deleted');
		else return res.status(400).json(users);
	} catch (error) {
		return res.status(403).json(error.message);
	}
};
