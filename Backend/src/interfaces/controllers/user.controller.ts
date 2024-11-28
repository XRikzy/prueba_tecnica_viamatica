import { Request, Response } from "express";
import { UserService } from "../../domain/services/user.service";

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
      res
        .status(500)
        .json({
          error:
            "Error en la obtencion de usuario, es probable que no tengas usuarios..",
        });
    }
  }
  async getUserById(req: Request, res: Response) {
    try {
      const user = await this.userServices.getUser(
        parseInt(req.params.userName)
      );
      res.status(200).json(user);
    } catch (error) {
      res
        .status(500)
        .json({
          error:
            "Error al obtener el usuario, no se encuentra en la base de datos o no existe..",
        });
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
      res.status(500).json({ error: "Error actualizando el usuario" });
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
       await this.userServices.deleteUser(
        parseInt(req.params.id)
      );
    } catch (error) {
      res.status(500).json({ error: "Error eliminando el usuario" });
    }
  }
}
