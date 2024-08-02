import mongoose from 'mongoose';

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.dburi);
		console.log('Connected to MongoDB');
	} catch (error) {
		console.error('DB error:', error.message);
		process.exit(1)
	}
};

const disconnectDB = async () => {
	try {
		await mongoose.disconnect();
		console.log('Disconnected from MongoDB');
	} catch (error) {
		console.error('Could not disconnect from MongoDB', error);
		throw error;
	}
};

export { connectDB, disconnectDB };
