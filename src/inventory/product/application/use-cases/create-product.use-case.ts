import { Inject, Injectable } from "@nestjs/common";
import { Product } from "src/inventory/product/domain/entities/product.entity";
import { ProductRepository } from "src/inventory/product/domain/repositories/product.repository";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CreateProductUseCase {
  constructor(
    @Inject('ProductRepository')
    private readonly repository: ProductRepository,
  ) {}

  async execute(code: string, name: string, price: number): Promise<Product> {
    const product = new Product(uuidv4(), code, name, price);
    return this.repository.create(product);
  }
}