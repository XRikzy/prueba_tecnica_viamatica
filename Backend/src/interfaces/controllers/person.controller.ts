import { Request, Response } from "express";
import { PersonService } from "../../domain/services/person.service";

export class PersonControllers {
  private personService: PersonService;
  constructor(personService: PersonService) {
    this.personService = personService;
  }
  async createPerson(req: Request, res: Response) {
    try {
      const person = await this.personService.createPerson(req.body);
      res.status(201).json(person);
    } catch (error) {
      res.status(500).json({ error: "Error creando a la persona" });
      console.log(error);
    }
  }
  async getAllPerson(req: Request, res: Response) {
    try {
      const person = await this.personService.getAllPersons();
      res.status(200).json(person);
    } catch (error) {
      res.status(500).json({
        error:
          "Error en la obtencion de la persona, es probable que no tengas personas registradas aun..",
      });
    }
  }
  async getPersonById(req: Request, res: Response) {
    try {
      const user = await this.personService.getPerson(parseInt(req.params.id));
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
      await this.personService.deletePerson(parseInt(req.params.id));
      res
        .status(201)
        .json({ message: "Persona Eliminada" });
    } catch (error) {
      res.status(500).json({ error: "Error eliminando a la persona" });
    }
  }
}
