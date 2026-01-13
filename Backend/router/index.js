import express from 'express';
import multer from 'multer';
import path from "path";
import { fileURLToPath } from "url";
import UsersController from '../controllers/usersController.js';
import ProductsController from '../controllers/ProductsController.js';
import categoiresController from '../controllers/CategoriesController.js';
import MessagesController from '../controllers/MessagesController.js';
import ImagesProductController from '../controllers/imagesProductController.js';
import SizesController from '../controllers/SizesController.js';
import { Authentication } from '../midelwares/middleware.js';
import AuthController from '../controllers/authController.js';


const auth = new AuthController();
const products = new ProductsController();
const category = new categoiresController();
const users = new UsersController();

const routes = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
  destination: path.join(__dirname, "../public/uploads"),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const name = path.basename(file.originalname, ext)
      .toLowerCase()
      .replace(/\s+/g, "-");

    cb(null, `${Date.now()}-${name}${ext}`);
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Hanya gambar yang diizinkan!"), false);
  }
};

const upload = multer({
  storage,
  fileFilter
});

routes.use(express.static("public/uploads/"));
//Auth 
routes.post('/login', auth.Login);
routes.post('/register', auth.Register);
routes.get('/logout', auth.Logout);
routes.get('/refresh-token', auth.RefreshToken);

//users
routes.get('/users', Authentication, users.getUsers);
routes.get('/user/:id', Authentication, users.getUser);
routes.post('/users', Authentication, users.createUser);
routes.put('/users/:id', Authentication, users.updateUser);

//message
routes.get('/messages/:name', Authentication, MessagesController.getMessages);
routes.get('/daftar/messages', Authentication, MessagesController.getLastMessage);

//product and product item
routes.get('/products', products.getProducts);
routes.get('/products/:id', products.getProduct);
routes.put('/products/:id', Authentication, products.updateProduct);
routes.post('/products', Authentication, products.createProduct);
routes.delete('/products/:id', Authentication, products.deleteProduct);

routes.post('/product/items', Authentication, upload.single("image"), products.createProductItem);
routes.put('/product/items/:id', Authentication, upload.single("image"), products.updateProductItem);
routes.get('/product/items', products.getProductItems);
routes.delete('/product/items/:id', Authentication, products.deleteProductItem);

//size
routes.post('/sizes/:id', SizesController.createSizes);

//product image
routes.post('/product-image/:id', upload.array("images"), ImagesProductController.createImages);

//categoires
routes.get('/categories', category.getCategories);
routes.get('/categories/:id', category.getCategory);
routes.post('/categories', Authentication, category.createCategory);
routes.delete('/categories/:id', Authentication, category.deleteCategory)
routes.put('/categories/:id', Authentication, category.updateCategory);


export default routes;