import { Router } from "express";
import { RolRolOptionRepository } from "../../domain/repositories/RolRolOption";
import { RolRolOptionServices } from "../../domain/services/RolRolOptionServices";
import { RolRolOptionControllers } from "../controllers/RolRolOption";


const rolrolOptionRoutes = Router();
const rolrolOptionRepository = new RolRolOptionRepository();
const rolrolOptionService = new RolRolOptionServices(rolrolOptionRepository);
const rolrolOptionControlrolOptionler = new RolRolOptionControllers(rolrolOptionService);

rolrolOptionRoutes.post("/rolrolOption", (req, res) =>
  rolrolOptionControlrolOptionler.createRolRolOption(req, res)
);
rolrolOptionRoutes.post("/manyrolrolOption", (req, res) =>
  rolrolOptionControlrolOptionler.createManyRolRolOption(req, res)
);
rolrolOptionRoutes.get("/rolrolOption", (req, res) =>
  rolrolOptionControlrolOptionler.getAllRolRolOption(req, res)
);
rolrolOptionRoutes.get("/rolrolOption/:names", (req, res) =>
  rolrolOptionControlrolOptionler.getRolRolOptionByRolRolOptionName(req, res)
);
rolrolOptionRoutes.patch("/rolrolOption/:id", (req, res) =>
  rolrolOptionControlrolOptionler.updateRolRolOption(req, res)
);
rolrolOptionRoutes.delete("/rolrolOption/:id", (req, res) =>
  rolrolOptionControlrolOptionler.deleteRolRolOption(req, res)
);

export default rolrolOptionRoutes;