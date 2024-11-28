import { Router } from "express";
import { PersonControllers } from "../controllers/person.controller";
import { PersonService } from "../../domain/services/person.service";
const personRoutes = Router();
const personService = new PersonService;
const personController = new PersonControllers(personService);

personRoutes.post("/person", (req, res) =>
  personController.createPerson(req, res)
);
personRoutes.get("/person", (req, res) =>
  personController.getAllPerson(req, res)
);
personRoutes.get("/person/:id", (req, res) =>
  personController.getPersonById(req, res)
);
personRoutes.patch("/person/:id", (req, res) =>
  personController.updatePerson(req, res)
);
personRoutes.delete("/person/:id", (req, res) =>
  personController.deletePerson(req, res)
);
export default personRoutes;
