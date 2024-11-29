import { Router } from "express";
import { RolOptionServices } from "../../domain/services/roloption.service";
import { RolOptionControllers } from "../controllers/roloption.controller";


const rolOptionRoutes = Router();
const rolOptionService = new RolOptionServices();
const rolOptionControlOptionler = new RolOptionControllers(rolOptionService);

rolOptionRoutes.post("/roloption", (req, res) =>
  rolOptionControlOptionler.createRolOption(req, res)
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