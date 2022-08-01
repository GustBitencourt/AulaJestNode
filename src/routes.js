import { Router } from "express";
import { userController } from "./controllers/userController.js";

export const routes = Router();

routes.get('/users', userController.getUsers);

routes.post('/users', userController.criarUsuario);


