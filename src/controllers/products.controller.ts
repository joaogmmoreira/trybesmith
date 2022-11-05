import { Request, Response } from 'express';
import ProductService from '../services/products.services';

export default class ProductController {
  public service: ProductService;

  constructor() {
    this.service = new ProductService();
  }

  async getAllProducts(_req: Request, res: Response) {
    const result = await this.service.getAllProducts();
    res.status(200).json(result);
  }
}