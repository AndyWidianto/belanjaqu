import express from 'express';
import UsersController from '../controllers/usersController.js';

const routes = express.Router();

//Auth 
routes.get('/users', UsersController.getUsers);
routes.post('/login', UsersController.Login);
routes.post('/register', UsersController.Register);
routes.get('/logout', UsersController.Logout);

//message



export default routes;