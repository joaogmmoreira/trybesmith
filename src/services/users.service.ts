import connection from '../models/connection';
import IUser from '../Interfaces/user.interface';
import UsersModel from '../models/users.model';
import generateToken from '../auth/generateToken';

export default class ProductsService {
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  // async getAllProducts(): Promise<IProduct[]> {
  //   const result: IProduct[] = await this.model.getAllProducts();
  //   return result;
  // }

  async registerUser(data: IUser): Promise<{ type: number | null, message: string }> {
    const getByName = await this.model.getByUserName(data);

    if (getByName) {
      return { type: 418, message: 'Bugou!' };
    }

    const result = await this.model.registerUser(data);
    const token = generateToken({ id: result, ...data });
    
    return { type: null, message: token };
  }
}