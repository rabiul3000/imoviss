import { Server } from 'socket.io';
import http from 'http';
import express from 'express';

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
	cors: {
		origin: ['http://localhost:3000'],
		methods: ['GET', 'POST'],
	},
});

const usersMap = {}; //{ userid : socketid }

export const getReceiverId = (receiverId) => {
	return usersMap[receiverId];
};

io.on('connection', (socket) => {
	const userId = socket.handshake.query.userId;
	if (userId != 'undefined') {
		usersMap[userId] = socket.id;
	}

	io.emit('getOnlineUsers', Object.keys(usersMap));

	socket.on('disconnect', () => {
		delete usersMap[userId];
		io.emit('getOnlineUsers', Object.keys(usersMap));
	});
});

export { app, server, io };
