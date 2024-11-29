import { Request, Response } from "express";
import { UserService } from "../../domain/services/user.service";
import { GenerateUserUseCase } from "../../application/use-cases/User/generateuser.usecase";
import {
  EmailAlreadyExistsError,
  InvalidPasswordError,
  InvalidUsernameCharactersError,
  UsernameAlreadyExistsError,
} from "../../utils/validationerros.utils";

export class UsersControllers {
  private userServices: UserService;
  private generateUserUseCase = new GenerateUserUseCase();
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
      if (
        error instanceof UsernameAlreadyExistsError ||
        error instanceof InvalidUsernameCharactersError ||
        error instanceof InvalidPasswordError ||
        error instanceof EmailAlreadyExistsError
      ) {
        res.status(400).json({ error: error.message });
      }
      if (error === "La persona asociada no existe.") {
        res.status(404).json({ error: error });
      }
      res.status(500).json({ error: "Error interno del servidor." });
    }
  }
  async getUserById(req: Request, res: Response) {
    try {
      const user = await this.userServices.getUser(
        parseInt(req.params.userName)
      );
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({
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
      await this.userServices.deleteUser(parseInt(req.params.id));
      res
        .status(201)
        .json({ message: "El usuario fue eliminado satisfactoriamente" });
    } catch (error) {
      res.status(500).json({ error: "Error eliminando el usuario" });
    }
  }
}
