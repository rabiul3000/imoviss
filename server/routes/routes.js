import { Router } from 'express';
import {
	allUsers,
	deleteAllUsers,
	logOut,
	login,
	signUp,
} from '../controllers/auth.controller.js';
import { getMessages, sendMessage } from '../controllers/message.controller.js';
import { isAuthorized } from '../middlewares/auth.middleware.js';
import { getUsersForSidebar } from '../controllers/user.controller.js';

const routes = Router();

routes.get('/', (req, res) => res.status(200).json('server is running'));

routes.post('/register', signUp);
routes.post('/login', login);
routes.get('/logout', logOut);

routes.get('/users',isAuthorized, getUsersForSidebar)


routes.get('/allusers', allUsers);
routes.delete('/allusers', deleteAllUsers);

// message routes
routes.post('/messages/send/:id', isAuthorized, sendMessage);
routes.get('/messages/:id', isAuthorized, getMessages);






export default routes;
