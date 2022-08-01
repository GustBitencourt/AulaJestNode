import { Router } from "express";

export const routes = Router();

// simula o banco de dados
const database = ['Certezas'];

routes.get('/users', (request, response) => {
    return response.status(200).json(database);
});

routes.post('/users', (request, response) => {
    const { name } = request.body;
    database.push(name);

    return response.status(200).json({'mensagem': `Usuário ${name} cadastrado com sucesso`});
})


