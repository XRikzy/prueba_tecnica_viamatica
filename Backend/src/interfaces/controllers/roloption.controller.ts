import { Request, Response } from "express";
import { RolOptionServices } from "../../domain/services/roloption.service";

export class RolOptionControllers {
    private RolOptionService: RolOptionServices;
    constructor(RolOptionService: RolOptionServices) {
        this.RolOptionService = RolOptionService;
      }
  async createRolOption(req: Request, res: Response) {
    try {
      const roloption = await this.RolOptionService.createRolOption(req.body);
      res.status(201).json(roloption);
    } catch (error) {
      res.status(500).json({ error: "Error creando a la opction de rol" });
      console.log(error)
    }
  }
  async createManyRolOption(req: Request, res: Response) {
    try {
      const roloption = await this.RolOptionService.createManyRolOption(req.body);
      res.status(201).json(roloption);
    } catch (error) {
      res.status(500).json({ error: "Error creando las opciones de rol" });
      console.log(error)
    }
  }
  async getAllRolOption(req: Request, res: Response) {
    try {
      const roloption = await this.RolOptionService.getAllRolOption();
      res.status(200).json(roloption);
    } catch (error) {
      res
        .status(500)
        .json({
          error:
            "Error en la obtencion del rol, es probable que no tengas opciones de rol registradas aun..",
        });
    }
  }
  async getRolOptionByRolOptionName(req: Request, res: Response) {
    try {
      const roloption = await this.RolOptionService.getRolOptionByRolOptionName(
        req.params.nameOption
      );
      res.status(200).json(roloption);
    } catch (error) {
      res
        .status(500)
        .json({
          error:
            "Error al obtener a la RolOptiona, no se encuentra en la base de datos o no existe..",
        });
    }
  }
  async updateRolOption(req: Request, res: Response) {
    try {
      const roloption = await this.RolOptionService.updateRolOption(
        parseInt(req.params.id),
        req.body
      );
      res.status(200).json(roloption);
    } catch (error) {
      res.status(500).json({ error: "Error actualizando el RolOption" });
    }
  }

  async deleteRolOption(req: Request, res: Response) {
    try {
      const result = await this.RolOptionService.deleteRolOption(
        parseInt(req.params.id)
      );
      if (result) {
        res.status(200).json({ message: "RolOptiona eliminada" });
      } else {
        res.status(404).json({ message: "RolOptiona no encontrado" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error eliminando a la RolOptiona" });
    }
  }
}