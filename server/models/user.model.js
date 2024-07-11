import { Schema, model } from 'mongoose';

const userSchema = new Schema(
	{
		username: { type: String, unique: true, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true, unique: true },
		gender: { type: String, required: true, enum: ['male', 'female'] },
		avatar: { type: String, default: '' },
	},
	{ timestamps: true }
);

const User = model('User', userSchema);

export default User;
