import { Router } from "express";
import { RolUserRepository } from "../../domain/repositories/RoluserRepository";
import { RolUserServices } from "../../domain/services/RolUserServices";
import { RolUserControllers } from "../controllers/RolUserControllers";

const rolUserRoutes = Router();
const rolUserRepository = new RolUserRepository();
const rolUserService = new RolUserServices(rolUserRepository);
const rolUserControlUserler = new RolUserControllers(rolUserService);

rolUserRoutes.post("/rolUser", (req, res) =>
  rolUserControlUserler.createRolUser(req, res)
);
rolUserRoutes.post("/manyrolUser", (req, res) =>
  rolUserControlUserler.createManyRolUser(req, res)
);
rolUserRoutes.get("/rolUser", (req, res) =>
  rolUserControlUserler.getAllRolUser(req, res)
);
rolUserRoutes.get("/rolUser/:names", (req, res) =>
  rolUserControlUserler.getRolUserByIdRol(req, res)
);
rolUserRoutes.patch("/rolUser/:id", (req, res) =>
  rolUserControlUserler.updateRolUser(req, res)
);
rolUserRoutes.delete("/rolUser/:id", (req, res) =>
  rolUserControlUserler.deleteRolUser(req, res)
);

export default rolUserRoutes;