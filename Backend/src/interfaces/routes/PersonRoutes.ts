import { Router } from "express";
import { PersonControllers } from "../controllers/PersonControllers";
import { PersonServices } from "../../domain/services/PersonServices";
import { PersonRepository } from "../../domain/repositories/PersonRepository";
const personRoutes = Router();
const personRepository = new PersonRepository();
const personService = new PersonServices(personRepository);
const personController = new PersonControllers(personService);

personRoutes.post("/person", (req, res) =>
  personController.createPerson(req, res)
);
personRoutes.post("/manyperson", (req, res) =>
  personController.createManyPerson(req, res)
);
personRoutes.get("/person", (req, res) =>
  personController.getAllPerson(req, res)
);
personRoutes.get("/person/:names", (req, res) =>
  personController.getPersonByPersonName(req, res)
);
personRoutes.patch("/person/:id", (req, res) =>
  personController.updatePerson(req, res)
);
personRoutes.delete("/person/:id", (req, res) =>
  personController.deletePerson(req, res)
);

export default personRoutes;
