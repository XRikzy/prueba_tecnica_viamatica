import { Router } from 'express';
import { adminMiddleware } from '../middlewares/admin.middleware';
import { authMiddleware } from '../middlewares/auth/auth.middleware';

const adminRouter = Router();

adminRouter.get('/admin-data', authMiddleware, adminMiddleware, (req, res) => {
  res.json({ message: 'Welcome Admin!' });
});

export default adminRouter;
