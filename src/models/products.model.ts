import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
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

  async registerProduct(data: IProduct): Promise<IProduct> {
    const [{ insertId }] = await this.connection
      .execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [data.name, data.amount],
    );
    const result = {
      id: insertId,
      ...data,
    };

    return result;
  }
}