import { Router } from 'express';
import { AuthController } from '../controllers/auth.controllers';
import { authMiddleware } from '../middlewares/auth/auth.middleware';


const authRouter = Router();
const authController = new AuthController();

authRouter.post('/login', (req, res) => authController.login(req, res));
authRouter.post('/logout', authMiddleware, (req, res) => authController.logout(req, res));
authRouter.get('/data/metrics', authController.getUserMetrics.bind(authController));

export default authRouter;
