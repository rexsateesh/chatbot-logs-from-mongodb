import express from 'express';
import HomeService from '../services/home.service';
const router = express.Router();
const homeService = new HomeService();

router.get('/', (req, res) => homeService.sayHello(req, res));

export default router;