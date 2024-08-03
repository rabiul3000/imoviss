const cspConfig = {
	directives: {
		defaultSrc: ["'self'"],
		imgSrc: [
			"'self'",
			'data:',
			'https://avatar.iran.liara.run',
			'https://another-source.com',
		],
		connectSrc: ["'self'"],
		scriptSrc: ["'self'"],
		styleSrc: ["'self'"],
		styleSrc: ["'self'", "'unsafe-inline'"], // Allow inline styles
		
	},
};

export default cspConfig;
