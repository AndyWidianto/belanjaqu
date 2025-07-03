import express from 'express';
import multer from 'multer';
import UsersController from '../controllers/usersController.js';
import ProductsController from '../controllers/ProductsController.js';
import categoiresController from '../controllers/CategoriesController.js';
import MessagesController from '../controllers/MessagesController.js';
import { verifyToken } from '../midelwares/token.js';
import ProfileController from '../controllers/ProfilesController.js';
import ImagesProductController from '../controllers/imagesProductController.js';

const routes = express.Router();
const storage = multer.diskStorage({
    destination: "public/uploads/",
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname.toLowerCase())
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
        cb(null, true);
    } else {
        cb(new Error('Hanya gambar yang diizinkan!'));
        res.status(403).json({ message: "Hanya Gambar yang diizinkan" });
    }
}

const upload = multer({
    storage: storage,
    fileFilter: fileFilter
})

routes.use(express.static("public/uploads/"));
//Auth 
routes.post('/login', UsersController.Login);
routes.post('/register', UsersController.Register);
routes.get('/logout', UsersController.Logout);

//users
routes.get('/users', UsersController.getUsers);
routes.get('/user/:id', UsersController.getUser);
routes.get('/parse/cookie', verifyToken, UsersController.parseCookie);

//profiles
routes.get('/profile', verifyToken, ProfileController.getProfile);
routes.put('/profile/:id', ProfileController.updateProfile);
routes.put('/profile/picture/:id', upload.single('profile'), ProfileController.updateProfilePicture);
routes.put('/profile/cover/:id', upload.single('cover'), ProfileController.updateCoverPicture);

//message
routes.get('/messages/:name', verifyToken, MessagesController.getMessages);
routes.get('/daftar/messages', verifyToken, MessagesController.getLastMessage);

//product 
routes.get('/products', ProductsController.getProducts);
routes.put('/product/:id', ProductsController.updateProduct);
routes.post('/product', ProductsController.createProduct);
routes.get('/product/:id', ProductsController.getProduct);

//product image
routes.post('/product-image/:id', upload.array("image"), ImagesProductController.createImages);

//categoires
routes.get('/categories', categoiresController.getCategories);
routes.post('/categorie', upload.single("picture"), categoiresController.createCategories);


export default routes;