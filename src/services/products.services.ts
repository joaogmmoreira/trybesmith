import connection from '../models/connection';
import IProduct from '../Interfaces/product.interface';
import ProductModel from '../models/products.model';

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  async getAllProducts(): Promise<IProduct[]> {
    const result: IProduct[] = await this.model.getAllProducts();
    return result;
  }
}