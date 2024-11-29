import { Router } from "express";
import { RolRolOptionServices } from "../../domain/services/rolroloption.service";
import { RolRolOptionControllers } from "../controllers/rolroloption.controller";

const rolrolOptionRoutes = Router();
const rolrolOptionService = new RolRolOptionServices();
const rolrolOptionControlrolOptionler = new RolRolOptionControllers(
  rolrolOptionService
);

rolrolOptionRoutes.post("/rolroloption", (req, res) =>
  rolrolOptionControlrolOptionler.createRolRolOption(req, res)
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
