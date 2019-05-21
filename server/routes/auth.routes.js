import express from 'express';
import authController from '../Controllers/AuthController';

const router = express.Router();

router.post('/signup', authController.register);
router.post('/signin', authController.login);

export default router;
