import { Router } from "express";
import { RolControllers } from "../controllers/rol.controller";
import { RolService } from "../../domain/services/rol.service";

const rolRoutes = Router();
const rolService = new RolService;
const rolController = new RolControllers(rolService);

rolRoutes.post("/rol", (req, res) =>
  rolController.createRol(req, res)
);
rolRoutes.get("/rol", (req, res) =>
  rolController.getAllRol(req, res)
);
rolRoutes.get("/rol/:names", (req, res) =>
  rolController.getRolByRolName(req, res)
);
rolRoutes.patch("/rol/:id", (req, res) =>
  rolController.updateRol(req, res)
);
rolRoutes.delete("/rol/:id", (req, res) =>
  rolController.deleteRol(req, res)
);

export default rolRoutes;