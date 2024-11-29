import { Request, Response, NextFunction } from 'express';

export const roleMiddleware = (requiredRole: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const userRoles = req.user.roles; 
    if (!userRoles.includes(requiredRole)) {
      return res.status(403).json({ message: `Forbidden: Requires role ${requiredRole}` });
    }
    next();
  };
};
