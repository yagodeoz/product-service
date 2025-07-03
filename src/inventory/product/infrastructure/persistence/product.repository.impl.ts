import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductRepository } from "src/inventory/product/domain/repositories/product.repository";
import { ProductOrmEntity } from "./models/product.orm-entity/product.orm-entity";
import { Repository } from "typeorm";
import { Product } from "src/inventory/product/domain/entities/product.entity";

@Injectable()
export class ProductRepositoryPostgres implements ProductRepository{


    constructor(
        @InjectRepository(ProductOrmEntity)
        private readonly ormRepo: Repository<ProductOrmEntity>,
    ){}

    async create(product: Product): Promise<Product> {
       const ormEntity = this.ormRepo.create({
        code: product.code,
        name: product.name,
        price: product.price
       });
       const saved = await this.ormRepo.save(ormEntity);
       return new Product(saved.id, saved.code, saved.name, saved.price);
    }   
    
    async findAll(): Promise<Product[]> {
        const list = await this.ormRepo.find();
        return list.map((p) => new Product(p.id, p.code, p.name, p.price));
    } 

  async findById(id: string): Promise<Product | null> {
    const p = await this.ormRepo.findOneBy({ id });
    if (!p) return null;
    return new Product(p.id, p.code, p.name, p.price);
  }

  async update(product: Product): Promise<void> {
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