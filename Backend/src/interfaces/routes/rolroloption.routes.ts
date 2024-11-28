import { Router } from "express";
import { RolRolOptionRepository } from "../../domain/repositories/rolroloption.respository";
import { RolRolOptionServices } from "../../domain/services/rolroloption.service";
import { RolRolOptionControllers } from "../controllers/rolroloption.controller";


const rolrolOptionRoutes = Router();
const rolrolOptionRepository = new RolRolOptionRepository();
const rolrolOptionService = new RolRolOptionServices(rolrolOptionRepository);
const rolrolOptionControlrolOptionler = new RolRolOptionControllers(rolrolOptionService);

rolrolOptionRoutes.post("/rolroloption", (req, res) =>
  rolrolOptionControlrolOptionler.createRolRolOption(req, res)
);
rolrolOptionRoutes.post("/manyrolroloption", (req, res) =>
  rolrolOptionControlrolOptionler.createManyRolRolOption(req, res)
);
rolrolOptionRoutes.get("/rolroloption", (req, res) =>
  rolrolOptionControlrolOptionler.getAllRolRolOption(req, res)
);
rolrolOptionRoutes.get("/rolroloption/:names", (req, res) =>
  rolrolOptionControlrolOptionler.getRolRolOptionByRolRolOptionName(req, res)
);
rolrolOptionRoutes.patch("/rolroloption/:id", (req, res) =>
  rolrolOptionControlrolOptionler.updateRolRolOption(req, res)
);
rolrolOptionRoutes.delete("/rolroloption/:id", (req, res) =>
  rolrolOptionControlrolOptionler.deleteRolRolOption(req, res)
);

export default rolrolOptionRoutes;