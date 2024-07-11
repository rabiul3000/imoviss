const setUpCookie = (token, res) => {
	res.cookie('token', token, {
		maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in milliseconds
		httpOnly: true,
		sameSite: 'strict', // Helps prevent CSRF attacks
		secure: process.env.NODE_ENV === 'production',
		path: '/',
	});
};

export default setUpCookie;
