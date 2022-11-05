import { Pool, RowDataPacket } from 'mysql2/promise';
import IOrder from '../Interfaces/order.interface';

export default class UsersModel {
  public connection: Pool;

  constructor(mysql: Pool) {
    this.connection = mysql;
  }

  async getAllOrders(): Promise<IOrder[]> {
    const [result] = await this.connection
      .execute<IOrder[] & RowDataPacket[]>(
      `SELECT ord.id,
      ord.userId,
      JSON_ARRAYAGG(prod.id) AS productsIds
      FROM Trybesmith.Orders AS ord
      INNER JOIN
      Trybesmith.Products AS prod
      ON
      prod.orderId = ord.id
      GROUP BY ord.Id`,
    );
    return result;
  }
}
