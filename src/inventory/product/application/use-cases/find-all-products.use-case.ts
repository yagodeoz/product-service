import { Inject, Injectable } from '@nestjs/common';
import { Product } from '../../domain/entities/product.entity';
import { IProductRepository } from '../../domain/repositories/product.repository';

@Injectable()
export class FindAllProductsUseCase {
  constructor(
    @Inject('ProductRepository')
    private readonly repository: IProductRepository,
  ) {}

  async execute(): Promise<Product[]> {
    return this.repository.findAll();
  }
}
