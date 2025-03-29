import { Router } from "express"
import verifyToken from '../middleware/auth.middleware.js';
import { signup, login, getUser } from "../controllers/auth.controller.js";
const router = Router();

router.post('/signup', signup);

router.post('/login', login);

router.get('/me', verifyToken, getUser);

export default router;