import { Request, Response } from 'express';
import OrdersService from '../services/orders.service';

export default class OrdersController {
  public service: OrdersService;

  constructor() {
    this.service = new OrdersService();
  }

  async getAllOrders(_req: Request, res: Response) {
    const result = await this.service.getAllOrders();
    res.status(200).json(result);
  }
}