import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import IUser from '../Interfaces/user.interface';

export default class UsersModel {
  public connection: Pool;

  constructor(mysql: Pool) {
    this.connection = mysql;
  }

  // async getAllProducts(): Promise<IProduct[]> {
  //   const [result] = await this.connection
  //     .execute<IProduct[] & RowDataPacket[]>('SELECT * FROM Trybesmith.Products');
  //   return result;
  // }
  
  async getByUserName(data: IUser): Promise<IUser | undefined> {
    const [[result]] = await this.connection
      .execute<IUser[] & RowDataPacket[][]>(
      'SELECT * FROM Trybesmith.Users WHERE username = ?', 
      [data.username],
    );

    return result;
  }

  async registerUser(data: IUser): Promise<number> {
    const [{ insertId }] = await this.connection
      .execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ? ,?)',
      [data.username, data.classe, data.level, data.password],
    );

    return insertId;
  }
}
