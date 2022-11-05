import { Router } from 'express';
import ProductsController from '../controllers/products.controller';

const productsRouter = Router();
const productsController = new ProductsController();

productsRouter.get('/', (req, res) => productsController.getAllProducts(req, res));
productsRouter.post('/', (req, res) => productsController.registerProduct(req, res));

export default productsRouter;