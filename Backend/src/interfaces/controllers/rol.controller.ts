import { Request, Response } from "express";
import { RolService } from "../../domain/services/rol.service";

export class RolControllers {
    private RolService: RolService;
    constructor(RolService: RolService) {
        this.RolService = RolService;
      }
  async createRol(req: Request, res: Response) {
    try {
      const user = await this.RolService.createRol(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: "Error creando a la Rola" });
      console.log(error)
    }
  }
  async getAllRol(req: Request, res: Response) {
    try {
      const user = await this.RolService.getAllRols();
      res.status(200).json(user);
    } catch (error) {
      res
        .status(500)
        .json({
          error:
            "Error en la obtencion de la Rola, es probable que no tengas Rolas registradas aun..",
        });
    }
  }
  async getRolByRolName(req: Request, res: Response) {
    try {
      const user = await this.RolService.getRol(
        parseInt(req.params.rolname)
      );
      res.status(200).json(user);
    } catch (error) {
      res
        .status(500)
        .json({
          error:
            "Error al obtener a la Rola, no se encuentra en la base de datos o no existe..",
        });
    }
  }
  async updateRol(req: Request, res: Response) {
    try {
      const user = await this.RolService.updateRol(
        parseInt(req.params.id),
        req.body
      );
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: "Error actualizando el Rol" });
    }
  }

  async deleteRol(req: Request, res: Response) {
    try {
       await this.RolService.deleteRol(
        parseInt(req.params.id)
      );
    } catch (error) {
      res.status(500).json({ error: "Error eliminando a la Rola" });
    }
  }
}