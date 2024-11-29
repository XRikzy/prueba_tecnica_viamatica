import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../../../utils/jwt';


export const authMiddleware = (req: Request, res: Response, next: NextFunction): any => {
  const authHeader = req.headers['authorization'];

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  const token = authHeader.split(' ')[1];
  try {
    const payload = verifyToken(token);
    req.body = { ...req.body, user: payload };
    next();
  } catch {
    res.status(401).json({ message: 'Invalid token' });
  }
};
