import { Request, Response } from 'express';
import UsersService from '../services/users.service';

export default class ProductsController {
  public service: UsersService;

  constructor() {
    this.service = new UsersService();
  }

  // async getAllProducts(_req: Request, res: Response) {
  //   const result = await this.service.getAllProducts();
  //   res.status(200).json(result);
  // }

  async registerUser(req: Request, res: Response) {
    const data = req.body;
    const result = await this.service.registerUser(data);

    if (result.type) {
      return res.status(result.type).json({ message: result.message });
    }
    return res.status(201).json({ token: result.message });
  }
}