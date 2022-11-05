import { Request, Response } from 'express';
import ProductsService from '../services/products.service';

export default class ProductsController {
  public service: ProductsService;

  constructor() {
    this.service = new ProductsService();
  }

  async getAllProducts(_req: Request, res: Response) {
    const result = await this.service.getAllProducts();
    res.status(200).json(result);
  }

  async registerProduct(req: Request, res: Response) {
    const data = req.body;
    const result = await this.service.registerProduct(data);
    res.status(201).json(result);
  }
}