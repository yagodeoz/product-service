import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { Product } from "src/inventory/product/domain/entities/product.entity";
import { ProductRepository } from "src/inventory/product/domain/repositories/product.repository";


@Injectable()
export class UpdateProductUseCase {
  constructor(
    @Inject('ProductRepository')
    private readonly repository: ProductRepository,
  ) {}

  async execute(id: string, code: string, name: string, price: number): Promise<void> {
    const productDB = await this.repository.findById(id);
    if (!productDB) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    const product = new Product(id, code, name, price);
    return this.repository.update(product);
  }
}