import { Request, Response } from "express";
import { RolRolOptionServices } from "../../domain/services/rolroloption.service";

export class RolRolOptionControllers {
    private RolRolOptionService: RolRolOptionServices;
    constructor(RolRolOptionService: RolRolOptionServices) {
        this.RolRolOptionService = RolRolOptionService;
      }
  async createRolRolOption(req: Request, res: Response) {
    try {
      const RolRolOption = await this.RolRolOptionService.createRolRolOption(req.body);
      res.status(201).json(RolRolOption);
    } catch (error) {
      res.status(500).json({ error: "Error creando a la opction de rol" });
      console.log(error)
    }
  }
  async getAllRolRolOption(req: Request, res: Response) {
    try {
      const RolRolOption = await this.RolRolOptionService.getAllRolRolOption();
      res.status(200).json(RolRolOption);
    } catch (error) {
      res
        .status(500)
        .json({
          error:
            "Error en la obtencion del rol, es probable que no tengas opciones de rol registradas aun..",
        });
    }
  }
  async getRolRolOptionByRolRolOptionName(req: Request, res: Response) {
    try {
      const RolRolOption = await this.RolRolOptionService.getRolRolOptionById(
        parseInt(req.params.idroloption)
      );
      res.status(200).json(RolRolOption);
    } catch (error) {
      res
        .status(500)
        .json({
          error:
            "Error al obtener a la RolRolOptiona, no se encuentra en la base de datos o no existe..",
        });
    }
  }
  async updateRolRolOption(req: Request, res: Response) {
    try {
      const RolRolOption = await this.RolRolOptionService.updateRolRolOption(
        parseInt(req.params.id),
        req.body
      );
      res.status(200).json(RolRolOption);
    } catch (error) {
      res.status(500).json({ error: "Error actualizando el RolRolOption" });
    }
  }

  async deleteRolRolOption(req: Request, res: Response) {
    try {
       await this.RolRolOptionService.deleteRolRolOption(
        parseInt(req.params.id)
      );
    } catch (error) {
      res.status(500).json({ error: "Error eliminando a la RolRolOptiona" });
    }
  }
}