import { Router } from "express";
import { UsersControllers } from "../controllers/UserControllers";

const userRoutes = Router();
const userController = new UsersControllers();

userRoutes.post("/users", userController.createUser);
userRoutes.get("/users", userController.getAllUsers);
userRoutes.get("/users/:userName", userController.getUserByUserName);
userRoutes.patch("/users/:id", userController.updateUser);
userRoutes.delete("/users/:id", userController.deleteUser);

export default userRoutes;
