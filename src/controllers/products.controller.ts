import { Request, Response } from 'express';
import ProductsService from '../services/products.services';

export default class ProductsController {
  public service: ProductsService;

  constructor() {
    this.service = new ProductsService();
  }

  async getAllProducts(_req: Request, res: Response) {
    const result = await this.service.getAllProducts();
    res.status(200).json(result);
  }
}