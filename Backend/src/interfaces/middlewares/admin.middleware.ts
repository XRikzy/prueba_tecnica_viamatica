import { Request, Response, NextFunction } from 'express';

export const adminMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  if (req.res?.roleId !== 3) {
    res.status(403).json({ message: 'Forbidden: Admins only' });
  }
  next();
};
