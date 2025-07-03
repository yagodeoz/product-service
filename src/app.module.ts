import { Module } from '@nestjs/common';
import { ProductModule } from './inventory/product/config/product.module';
import { DatabaseModule } from './inventory/product/config/database.module';

@Module({
  imports: [
    DatabaseModule,
    ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}


