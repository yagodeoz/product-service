import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductRepositoryPostgres } from '../infrastructure/persistence/product.repository.impl';
import { CreateProductUseCase } from '../application/use-cases/create-product.use-case';
import { UpdateProductUseCase } from '../application/use-cases/update-product.use-case';
import { ProductsController } from '../infrastructure/controllers/products.controller';
import { ProductOrmEntity } from '../infrastructure/persistence/models/product.orm-entity/product.orm-entity';
import { DeleteProductUseCase } from '../application/use-cases/delete-product.use-case';
import { FindAllProductsUseCase } from '../application/use-cases/find-all-products.use-case';
import { FindProductByIdUseCase } from '../application/use-cases/find-product-by-id.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([ProductOrmEntity])],
  controllers: [ProductsController],
  providers: [
    {
      provide: 'ProductRepository',
      useClass: ProductRepositoryPostgres,
    },
    CreateProductUseCase,
    UpdateProductUseCase,
    DeleteProductUseCase,
    FindAllProductsUseCase,
    FindProductByIdUseCase,
  ],
})
export class ProductModule {}
