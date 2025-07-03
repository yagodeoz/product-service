import { Product } from "../entities/product.entity";

export interface ProductRepository {
  create(product: Product): Promise<Product>;
  findAll(): Promise<Product[]>;
  findById(id: string): Promise<Product | null>;
  update(product: Product): Promise<void>;
  delete(id: string): Promise<void>;
}