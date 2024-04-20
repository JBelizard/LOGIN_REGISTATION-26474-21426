import Router from 'express';
import { login, register } from '../controllers/user.controller.js';

//--ROUTES--//
const usersRoutes = Router();

//Quando essa rota é acessada, a função 'login' será executada.
// http://localhost:4242/api/user/login
usersRoutes.post('/login', login);

//Quando essa rota é acessada, a função 'register' será executada.
// http://localhost:4242/api/user/register
usersRoutes.post('/register', register);
// http://localhost:4242/api/user/register
usersRoutes.post('/check', register);


//Exportando para que possa ser utilizado em outros arquivos do projeto.
export { usersRoutes };

