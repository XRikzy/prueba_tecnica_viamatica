import { Router } from "express";
import { RolOptionRepository } from "../../domain/repositories/roloption.repository";
import { RolOptionServices } from "../../domain/services/roloption.service";
import { RolOptionControllers } from "../controllers/roloption.controller";


const rolOptionRoutes = Router();
const rolOptionRepository = new RolOptionRepository();
const rolOptionService = new RolOptionServices(rolOptionRepository);
const rolOptionControlOptionler = new RolOptionControllers(rolOptionService);

rolOptionRoutes.post("/roloption", (req, res) =>
  rolOptionControlOptionler.createRolOption(req, res)
);
rolOptionRoutes.post("/manyroloption", (req, res) =>
  rolOptionControlOptionler.createManyRolOption(req, res)
);
rolOptionRoutes.get("/roloption", (req, res) =>
  rolOptionControlOptionler.getAllRolOption(req, res)
);
rolOptionRoutes.get("/roloption/:names", (req, res) =>
  rolOptionControlOptionler.getRolOptionByRolOptionName(req, res)
);
rolOptionRoutes.patch("/roloption/:id", (req, res) =>
  rolOptionControlOptionler.updateRolOption(req, res)
);
rolOptionRoutes.delete("/roloption/:id", (req, res) =>
  rolOptionControlOptionler.deleteRolOption(req, res)
);

export default rolOptionRoutes;