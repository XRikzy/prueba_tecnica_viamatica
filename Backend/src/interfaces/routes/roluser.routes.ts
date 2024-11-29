import { Router } from "express";
import { RolUserServices } from "../../domain/services/roluser.service";
import { RolUserControllers } from "../controllers/roluser.controller";

const rolUserRoutes = Router();
const rolUserService = new RolUserServices();
const rolUserControlUserler = new RolUserControllers(rolUserService);

rolUserRoutes.post("/roluser", (req, res) =>
  rolUserControlUserler.createRolUser(req, res)
);
rolUserRoutes.get("/roluser", (req, res) =>
  rolUserControlUserler.getAllRolUser(req, res)
);
rolUserRoutes.get("/roluser/:idUser", (req, res) =>
  rolUserControlUserler.getRolUserByIdUser(req, res)
);
rolUserRoutes.patch("/roluser/:id", (req, res) =>
  rolUserControlUserler.updateRolUser(req, res)
);
rolUserRoutes.delete("/roluser/:id", (req, res) =>
  rolUserControlUserler.deleteRolUser(req, res)
);

export default rolUserRoutes;