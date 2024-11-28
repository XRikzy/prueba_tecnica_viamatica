import { Router } from "express";
import { RolUserRepository } from "../../domain/repositories/roluser.repository";
import { RolUserServices } from "../../domain/services/roluser.service";
import { RolUserControllers } from "../controllers/roluser.controller";

const rolUserRoutes = Router();
const rolUserRepository = new RolUserRepository();
const rolUserService = new RolUserServices(rolUserRepository);
const rolUserControlUserler = new RolUserControllers(rolUserService);

rolUserRoutes.post("/roluser", (req, res) =>
  rolUserControlUserler.createRolUser(req, res)
);
rolUserRoutes.post("/manyroluser", (req, res) =>
  rolUserControlUserler.createManyRolUser(req, res)
);
rolUserRoutes.get("/roluser", (req, res) =>
  rolUserControlUserler.getAllRolUser(req, res)
);
rolUserRoutes.get("/roluser/:names", (req, res) =>
  rolUserControlUserler.getRolUserByIdRol(req, res)
);
rolUserRoutes.patch("/roluser/:id", (req, res) =>
  rolUserControlUserler.updateRolUser(req, res)
);
rolUserRoutes.delete("/roluser/:id", (req, res) =>
  rolUserControlUserler.deleteRolUser(req, res)
);

export default rolUserRoutes;