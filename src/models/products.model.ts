import { Pool } from 'mysql2/promise';
import IProduct from '../Interfaces/product.interface';

export default class ProductModel {
  public connection: Pool;

  constructor(mysql: Pool) {
    this.connection = mysql;
  }

  async getAllProducts(): Promise<IProduct[]> {
    const result = await this.connection.execute('SELECT * FROM products');
    const [rows] = result;
    return rows as IProduct[];
  }
}