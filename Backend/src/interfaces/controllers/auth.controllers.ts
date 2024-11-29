import { Request, Response } from 'express';
import { AuthService } from '../../domain/services/auth.service';
import { UserAlreadySession, UserBlocked, UserNotFound, UserWithOutRols } from '../../utils/validationerros.utils';
import sequelize from 'sequelize';

export class AuthController {
  private authService = new AuthService();

  async login(req: Request, res: Response): Promise<void> {
    try {
      const { identifier, password } = req.body;
      const { token, sessionId } = await this.authService.login(identifier, password);
      res.json({ token, sessionId });
    } catch (error) {
      if (
        error instanceof UserNotFound ||
        error instanceof UserBlocked ||
        error instanceof UserAlreadySession ||
        error instanceof UserWithOutRols
      ) {
        res.status(400).json({ error: error.message });
      }
      res.status(500).json({ error: "Error interno del servidor." });
    }
    }
  }


