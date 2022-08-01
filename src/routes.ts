import { Router } from "express";
import { UserController } from "./controllers/userController";

export const routes = Router();
const userController = new UserController();

routes.get('/users', userController.getUsers);

routes.post('/users', userController.criarUsuario);


