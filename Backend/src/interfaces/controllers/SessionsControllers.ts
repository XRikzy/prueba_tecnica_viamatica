import { Request, Response } from "express";
import { SessionsServices } from "../../domain/services/SessionsServices";

export class SessionsControllers {
  private SessionsService: SessionsServices;
  constructor(SessionsService: SessionsServices) {
    this.SessionsService = SessionsService;
  }
  async createSessions(req: Request, res: Response) {
    try {
      const user = await this.SessionsService.createSessions(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: "Error creando a la Sessionsa" });
      console.log(error);
    }
  }
  async createManySessions(req: Request, res: Response) {
    try {
      const user = await this.SessionsService.createManySessions(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: "Error creando a la Sessionsa" });
      console.log(error);
    }
  }
  async getAllSessions(req: Request, res: Response) {
    try {
      const user = await this.SessionsService.getAllSessions();
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({
        error:
          "Error en la obtencion de la Sessionsa, es probable que no tengas Sessionsas registradas aun..",
      });
    }
  }
  async getSessionsBySessionsName(req: Request, res: Response) {
    try {
      const user = await this.SessionsService.getSessionsBySessionsName(
        parseInt(req.params.idUser)
      );
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({
        error:
          "Error al obtener a la Sessionsa, no se encuentra en la base de datos o no existe..",
      });
    }
  }
  async updateSessions(req: Request, res: Response) {
    try {
      const user = await this.SessionsService.updateSessions(
        parseInt(req.params.id),
        req.body
      );
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: "Error actualizando el Sessions" });
    }
  }

  async deleteSessions(req: Request, res: Response) {
    try {
      const result = await this.SessionsService.deleteSessions(
        parseInt(req.params.id)
      );
      if (result) {
        res.status(200).json({ message: "Sessionsa eliminada" });
      } else {
        res.status(404).json({ message: "Sessionsa no encontrado" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error eliminando a la Sessionsa" });
    }
  }
}
