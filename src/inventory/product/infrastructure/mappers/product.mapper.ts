import { ProductOrmEntity } from "../persistence/models/product.orm-entity/product.orm-entity";
import { IProduct } from "../../domain/interfaces/product.interface";

export class ProductMapper {

  static toDomain(entity: ProductOrmEntity): IProduct {
    return {
        id: entity.id,
        code: entity.code,
        name: entity.name,
        price: entity.price
    };
  }

  static toOrm(domain: IProduct): ProductOrmEntity {
    const orm = new ProductOrmEntity();
    
    orm.id = domain.id;
    orm.code = domain.code;
    orm.name = domain.name;
    orm.price = domain.price;
    return orm;
  }
}
