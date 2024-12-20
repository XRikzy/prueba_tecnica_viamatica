import { Router } from "express";
import { UsersControllers } from "../controllers/user.controller";

const userRoutes = Router();
const userController = new UsersControllers();

userRoutes.post("/users", (req, res) => userController.createUser(req, res));
userRoutes.get("/users", (req, res) => userController.getAllUsers(req, res));
userRoutes.get("/users/:id", (req, res) =>
  userController.getUserById(req, res)
);
userRoutes.put("/users/:id", (req, res) =>
  userController.updateUser(req, res)
);
userRoutes.delete("/users/:id", (req, res) =>
  userController.deleteUser(req, res)
);
userRoutes.post("/users/create", (req, res) =>
  userController.generateUser(req, res)
);
userRoutes.post("/unlock/:id", (req, res) =>
  userController.unLockedUser(req, res)
);
userRoutes.get("/users/search/:username", (req, res) =>
  userController.getUsername(req, res)
);

export default userRoutes;
