const removeCookie = (res) => {
	res.cookie('token', '', {
		maxAge: 0, // Immediately expire the cookie
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production',
		sameSite: 'strict',
        path : '/'
	});
};

export default removeCookie;
