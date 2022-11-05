import connection from '../models/connection';
import IOrder from '../Interfaces/order.interface';
import OrdersModel from '../models/orders.model';

export default class OrderService {
  public model: OrdersModel;

  constructor() {
    this.model = new OrdersModel(connection);
  }

  async getAllOrders(): Promise<IOrder[]> {
    const result: IOrder[] = await this.model.getAllOrders();
    return result;
  }
}