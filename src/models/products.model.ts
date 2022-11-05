import { Pool, RowDataPacket } from 'mysql2/promise';
import IProduct from '../Interfaces/product.interface';

export default class ProductsModel {
  public connection: Pool;

  constructor(mysql: Pool) {
    this.connection = mysql;
  }

  async getAllProducts(): Promise<IProduct[]> {
    const [result] = await this.connection
      .execute<IProduct[] & RowDataPacket[]>('SELECT * FROM Trybesmith.Products');
    return result;
  }
}