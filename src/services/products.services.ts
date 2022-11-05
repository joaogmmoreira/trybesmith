import connection from '../models/connection';
import IProduct from '../Interfaces/product.interface';
import ProductsModel from '../models/products.model';

export default class ProductsService {
  public model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  async getAllProducts(): Promise<IProduct[]> {
    const result: IProduct[] = await this.model.getAllProducts();
    return result;
  }
}