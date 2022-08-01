import { Request } from 'express';
import { makeMockResponse } from '../mocks/mocksResponse';
import { UserController } from './userController';
describe('Users Controller:', () => {
    const userController = new UserController();

    const mockRequest = {} as Request;
    const mockResponse = makeMockResponse();
    it('Deve listar os usuários', () => {
        userController.getUsers(mockRequest, mockResponse);

        expect(mockResponse.state.status).toBe(200);
        expect(mockResponse.state.json).toHaveLength(5);
    })

    it('Deve criar um usuário', () => {
        mockRequest.body = { name: 'New User' };
        userController.criarUsuario(mockRequest, mockResponse);

        expect(mockResponse.state.status).toBe(200);
        expect(mockResponse.state.json).toMatchObject({'mensagem': `Usuário New User cadastrado com sucesso`});
    })

    it('Não deve criar um usuário com nome inválido', () => {
        mockRequest.body = { name: 'No' };
        userController.criarUsuario(mockRequest, mockResponse);

        expect(mockResponse.state.status).toBe(403);
        expect(mockResponse.state.json).toMatchObject({mensagem: 'O nome precisa ter mais de 3 caracteres'});

    })
})