import express from 'express';
import ChatBotService from '../services/chatBot.service';
const router = express.Router();
const chatBotService = new ChatBotService();

router.get('/', (req, res) => chatBotService.getData(req, res));

export default router;