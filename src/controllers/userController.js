import { database } from "../database/database.js";

export const userController = {
    criarUsuario(request, response) {
        const { name } = request.body;
    
        if(!name || name.length < 3) {
            return response.status(403).json({mensagem: 'O nome precisa ter mais de 3 caracteres'});
    
        }
    
        database.push(name);
        return response.status(200).json({'mensagem': `Usuário ${name} cadastrado com sucesso`});
    },
    getUsers(request, response)  {
        return response.status(200).json(database);
    }
}

