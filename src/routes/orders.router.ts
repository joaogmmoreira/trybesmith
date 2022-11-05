import { Router } from 'express';
import OrdersController from '../controllers/orders.controller';

const ordersRouter = Router();
const ordersController = new OrdersController();

ordersRouter.get('/', (req, res) => ordersController.getAllOrders(req, res));

export default ordersRouter;