import { Request, Response } from 'express';
import { AuthService } from '../../domain/services/auth.service';
import { AppError } from '../../utils/errors/AppErrors.utils';
declare global {
  namespace Express {
    interface Request {
      user : {
        id : number;
      };
    }
  }
}

export class AuthController {
  private authService = new AuthService();

  async login(req: Request, res: Response): Promise<void> {
    try {
      const { identifier, password } = req.body;
      const { token, sessionId, rol } = await this.authService.login(identifier, password);
      res.json({ token, sessionId, rol });
    } catch (error) {
      if (error instanceof AppError) {
        res.status(error.statusCode).json({ message: error.message });
      } else {
        console.error('Unexpected error:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
      }
    }
    }
    async logout(req: Request, res: Response): Promise<void> {
      try {
        const userId = req.user?.id;
        await this.authService.logout(userId);
        res.status(200).json({ message: 'Session closed successfully' });
      } catch (error) {
        if (error instanceof AppError) {
          res.status(error.statusCode).json({ message: error.message });
        } else {
          console.error('Unexpected error:', error);
          res.status(500).json({ message: 'Error interno del servidor' });
        }
      }
    }
  }


