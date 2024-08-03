import path from 'path';
import express from 'express';
import helmet from 'helmet';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import routes from './routes/routes.js';
import { connectDB } from './config/database.js';
import { app, server } from './socket/socket.js';
import cspConfig from './utils/cspConfig.js';

// const __dirname = path.resolve();

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet({ contentSecurityPolicy: cspConfig }));
app.use(cookieParser());
app.use(morgan('dev'));

app.get('/', (req,res) => res.status(200).json('server is running'))
app.use('/api', routes);

// app.use(express.static(path.join(__dirname, '/client/dist')));

// app.get('*', (req, res) => {
// 	res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
// });

const port = process.env.PORT;

server.listen(port || 9000, () => {
	connectDB();
	console.log(`server: http://localhost:${port}`);
});
