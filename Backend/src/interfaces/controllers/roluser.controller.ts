import { Request, Response } from "express";
import { RolUserServices } from "../../domain/services/roluser.service";

export class RolUserControllers {
    private RolUserService: RolUserServices;
    constructor(RolUserService: RolUserServices) {
        this.RolUserService = RolUserService;
      }
  async createRolUser(req: Request, res: Response) {
    try {
      const user = await this.RolUserService.createRolUser(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: "Error creando a la RolUsera" });
      console.log(error)
    }
  }
  async getAllRolUser(req: Request, res: Response) {
    try {
      const user = await this.RolUserService.getAllRolUser();
      res.status(200).json(user);
    } catch (error) {
      res
        .status(500)
        .json({
          error:
            "Error en la obtencion de la RolUsera, es probable que no tengas RolUseras registradas aun..",
        });
    }
  }
  async getRolUserByIdUser(req: Request, res: Response) {
    try {
      const user = await this.RolUserService.getByUserId(
        parseInt(req.params.idUser)
      );
      res.status(200).json(user);
    } catch (error) {
      res
        .status(500)
        .json({
          error:
            "Error al obtener a la RolUsera, no se encuentra en la base de datos o no existe..",
        });
    }
  }
  async updateRolUser(req: Request, res: Response) {
    try {
      const user = await this.RolUserService.updateRolUser(
        parseInt(req.params.id),
        req.body
      );
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: "Error actualizando el RolUser" });
    }
  }

  async deleteRolUser(req: Request, res: Response) {
    try {
       await this.RolUserService.deleteRolUser(
        parseInt(req.params.id)
      );
    } catch (error) {
      res.status(500).json({ error: "Error eliminando a la RolUsera" });
    }
  }
}