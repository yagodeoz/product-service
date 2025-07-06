import { IProduct } from "../interfaces/product.interface";

export interface IProductRepository {
  create(product: IProduct): Promise<IProduct>;
  findAll(): Promise<IProduct[]>;
  findById(id: string): Promise<IProduct | null>;
  update(product: IProduct): Promise<void>;
  delete(id: string): Promise<void>;
}