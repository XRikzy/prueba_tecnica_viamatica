import { Request, Response } from 'express';
import { AuthService } from '../../domain/services/auth.service';

export class AuthController {
  private authService = new AuthService();

  async login(req: Request, res: Response): Promise<void> {
    try {
      const { identifier, password } = req.body;
      const { token, sessionId } = await this.authService.login(identifier, password);
      res.json({ token, sessionId });
    } catch (error) {
      
      res.status(401).json({ message: "El usuario o la contraseña es incorrecta" });
    }
  }

  
}

