import { Request, Response } from "express";
import { UserService } from "../../domain/services/user.service";
import { AppError } from "../../utils/errors/AppErrors.utils";

export class UsersControllers {
  private userServices: UserService;
  constructor() {
    this.userServices = new UserService();
  }
  async createUser(req: Request, res: Response) {
    try {
      const user = await this.userServices.createUser(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: "Error creando al usuario" });
    }
  }
  async getAllUsers(req: Request, res: Response) {
    try {
      const user = await this.userServices.getAllUsers();
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({
        error:
          "Error en la obtencion de usuario, es probable que no tengas usuarios..",
      });
    }
  }
  async generateUser(req: Request, res: Response) {
    try {
      const newUser = await this.userServices.generateUser(req.body);
      res.status(200).json({
        username: newUser.username,
        password: newUser.password,
        mail: newUser.mail,
        sessionActive: newUser.sessionActive,
        idPerson2: newUser.idPerson2,
        status: newUser.status,
      });
    } catch (error) {
      if (error instanceof AppError) {
        res.status(error.statusCode).json({ message: error.message });
      } else {
        console.error('Unexpected error:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
      }
    }
  }
  async getUserById(req: Request, res: Response) {
    try {
      const user = await this.userServices.getUser(
        parseInt(req.params.id)
      );
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({
        error:
          "Error al obtener el usuario, no se encuentra en la base de datos o no existe..",
      });
    }
  }
  async getUsername(req: Request, res: Response) {
    try {
      const user = await this.userServices.getUserByName(
        req.params.username
      );
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({
        error:
          "Error al obtener el usuario, no se encuentra en la base de datos o no existe..",
      });
    }
  }
  async unLockedUser (req: Request, res: Response){
    try{
      await this.userServices.unlockedUser(parseInt(req.params.id))
      res.status(200).json({ message: 'Usuario desbloqueado con éxito.' });
    } catch (error){
      if (error instanceof AppError) {
        res.status(error.statusCode).json({ message: error.message });
      } else {
        console.error('Unexpected error:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
      }
    }
  }
  async updateUser(req: Request, res: Response) {
    try {
      const user = await this.userServices.updateUser(
        parseInt(req.params.id),
        req.body
      );
      res.status(200).json(user);
    } catch (error) {
      if (error instanceof AppError) {
        res.status(error.statusCode).json({ message: error.message });
      } else {
        console.error('Unexpected error:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
      }
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      await this.userServices.deleteUser(parseInt(req.params.id));
      res
        .status(201)
        .json({ message: "El usuario fue eliminado satisfactoriamente" });
    } catch (error) {
      res.status(500).json({ error: "Error eliminando el usuario" });
    }
  }
}
