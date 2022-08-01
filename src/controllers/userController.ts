import { Request, Response } from "express";

import { database } from "../database/database";

export class UserController {
    criarUsuario(request: Request, response: Response): Response {
        const { name } = request.body;
    
        if(name.length < 3) {
            return response.status(403).json({mensagem: 'O nome precisa ter mais de 3 caracteres'});
    
        }
    
        database.push(name);
        return response.status(200).json({'mensagem': `Usuário ${name} cadastrado com sucesso`});
    }

    getUsers(request: Request, response: Response): Response  {
        return response.status(200).json(database);
    }
}

