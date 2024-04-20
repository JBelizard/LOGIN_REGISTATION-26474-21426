// Importando o módulo Router do pacote 'express'
import Router from 'express';

// Importando as rotas relacionadas aos usuários do arquivo user.routes.js
import { usersRoutes } from './user.routes.js';
// Criando uma instância do Router
const api = Router();

// Configurando a rota base para o prefixo '/user'
// Todas as rotas relacionadas aos usuários estarão disponíveis em 
// http://localhost:4242/api/user ....
api.use('/user', usersRoutes);

// Exportando a instância do Router como 'api' para uso em outros lugares do código
export { api };

