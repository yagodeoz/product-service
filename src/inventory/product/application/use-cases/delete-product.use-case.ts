import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { IProductRepository } from "../../domain/repositories/product.repository";


@Injectable()
export class DeleteProductUseCase {
  constructor(
    @Inject('ProductRepository')
    private readonly repository: IProductRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const productDB = await this.repository.findById(id);
    if (!productDB) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    return await this.repository.delete(id);  
  }
}