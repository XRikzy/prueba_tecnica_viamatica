import { Request, Response } from "express";
import { RolServices } from "../../domain/services/rol.service";

export class RolControllers {
    private RolService: RolServices;
    constructor(RolService: RolServices) {
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
  async createManyRol(req: Request, res: Response) {
    try {
      const user = await this.RolService.createManyRol(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: "Error creando a la Rola" });
      console.log(error)
    }
  }
  async getAllRol(req: Request, res: Response) {
    try {
      const user = await this.RolService.getAllRol();
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
      const user = await this.RolService.getRolByRolName(
        req.params.rolname
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
      const result = await this.RolService.deleteRol(
        parseInt(req.params.id)
      );
      if (result) {
        res.status(200).json({ message: "Rola eliminada" });
      } else {
        res.status(404).json({ message: "Rola no encontrado" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error eliminando a la Rola" });
    }
  }
}