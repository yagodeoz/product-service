import { Inject, Injectable } from '@nestjs/common';
import { ProductRepository } from '../../domain/repositories/product.repository';
import { Product } from '../../domain/entities/product.entity';

@Injectable()
export class FindAllProductsUseCase {
  constructor(
    @Inject('ProductRepository')
    private readonly repository: ProductRepository,
  ) {}

  async execute(): Promise<Product[]> {
    return this.repository.findAll();
  }
}
