import { Request, Response } from "express";
import { PersonServices } from "../../domain/services/PersonServices";

export class PersonControllers {
  private personService: PersonServices;
  constructor(personService: PersonServices) {
    this.personService = personService;
  }
  async createPerson(req: Request, res: Response) {
    try {
      const user = await this.personService.createPerson(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: "Error creando a la persona" });
      console.log(error);
    }
  }
  async createManyPerson(req: Request, res: Response) {
    try {
      const user = await this.personService.createManyPerson(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: "Error creando a la persona" });
      console.log(error);
    }
  }
  async getAllPerson(req: Request, res: Response) {
    try {
      const user = await this.personService.getAllPerson();
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({
        error:
          "Error en la obtencion de la persona, es probable que no tengas personas registradas aun..",
      });
    }
  }
  async getPersonByPersonName(req: Request, res: Response) {
    try {
      const user = await this.personService.getPersonByPersonName(
        req.params.names
      );
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({
        error:
          "Error al obtener a la persona, no se encuentra en la base de datos o no existe..",
      });
    }
  }
  async updatePerson(req: Request, res: Response) {
    try {
      const user = await this.personService.updatePerson(
        parseInt(req.params.id),
        req.body
      );
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: "Error actualizando el Person" });
    }
  }

  async deletePerson(req: Request, res: Response) {
    try {
      const result = await this.personService.deletePerson(
        parseInt(req.params.id)
      );
      if (result) {
        res.status(200).json({ message: "Persona eliminada" });
      } else {
        res.status(404).json({ message: "Persona no encontrado" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error eliminando a la persona" });
    }
  }
}
