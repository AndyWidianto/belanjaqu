import express from 'express';
import UsersController from '../controllers/usersController.js';
import cookieController from '../controllers/cookieController.js';
import ProductsController from '../controllers/ProductsController.js';
import categoiresController from '../controllers/CategoriesController.js';
import MessagesController from '../controllers/MessagesController.js';
import { verifyToken } from '../midelwares/token.js';
import ProfileController from '../controllers/ProfilesController.js';

const routes = express.Router();

//Auth 
routes.post('/login', UsersController.Login);
routes.post('/register', UsersController.Register);
routes.get('/logout', UsersController.Logout);

//users
routes.get('/users', UsersController.getUsers);
routes.get('/user/:id', UsersController.getUser);
routes.get('/parse/cookie', verifyToken, UsersController.parseCookie);

//profiles
routes.put('/profile/:id', ProfileController.updateProfile);

//cookie
routes.get('/cookie', cookieController.getCookie);
routes.get('/clear-cookie', cookieController.clearCookie);

//message
routes.get('/messages/:name', verifyToken, MessagesController.getMessages);
routes.get('/daftar/messages', verifyToken, MessagesController.getLastMessage);

//product 
routes.get('/products', ProductsController.getProducts);
routes.put('/product/:id', ProductsController.updateProduct);
routes.post('/product', ProductsController.createProduct);
routes.get('/product/:id', ProductsController.getProduct);

//categoires
routes.get('/categories', categoiresController.getCategories);

routes.get('/coba', (req, res) => {
    const { username } = req.query
})

export default routes;