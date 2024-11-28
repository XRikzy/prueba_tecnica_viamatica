import { Router } from "express";
import { RolRepository } from "../../domain/repositories/RolRepository";
import { RolServices } from "../../domain/services/RolServices";
import { RolControllers } from "../controllers/RolControllers";

const rolRoutes = Router();
const rolRepository = new RolRepository();
const rolService = new RolServices(rolRepository);
const rolController = new RolControllers(rolService);

rolRoutes.post("/rol", (req, res) =>
  rolController.createRol(req, res)
);
rolRoutes.post("/manyrol", (req, res) =>
  rolController.createManyRol(req, res)
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