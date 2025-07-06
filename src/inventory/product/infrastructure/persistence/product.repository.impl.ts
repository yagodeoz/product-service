import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ProductOrmEntity } from "./models/product.orm-entity/product.orm-entity";
import { ProductMapper } from "../mappers/product.mapper";
import { IProductRepository } from "../../domain/repositories/product.repository";
import { IProduct } from "../../domain/interfaces/product.interface";

@Injectable()
export class ProductRepositoryPostgres implements IProductRepository {

  constructor(
    @InjectRepository(ProductOrmEntity)
    private readonly ormRepo: Repository<ProductOrmEntity>,
  ) {}

  async create(product: IProduct): Promise<IProduct> {
    const ormEntity = ProductMapper.toOrm(product);
    const saved = await this.ormRepo.save(ormEntity);
    return ProductMapper.toDomain(saved);
  }

  async findAll(): Promise<IProduct[]> {
    const list = await this.ormRepo.find();
    return list.map(ProductMapper.toDomain);
  }

  async findById(id: string): Promise<IProduct | null> {
    const entity = await this.ormRepo.findOneBy({ id });
    return entity ? ProductMapper.toDomain(entity) : null;
  }

  async update(product: IProduct): Promise<void> {
    await this.ormRepo.update(product.id, {
      code: product.code,
      name: product.name,
      price: product.price,
    });
  }

  async delete(id: string): Promise<void> {
    await this.ormRepo.delete(id);
  }
}
