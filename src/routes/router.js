import express from 'express';
const router = express.Router();

import homeRoute from './home.router';
import chatBotRoute from './chatBot.router';

router.use('/', homeRoute);
router.use('/chatbot', chatBotRoute);

export default router;