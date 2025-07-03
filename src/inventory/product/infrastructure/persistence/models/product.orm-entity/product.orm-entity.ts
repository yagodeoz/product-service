import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


@Entity('products')
export class ProductOrmEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    code: string;

    @Column()
    name: string;

    @Column('decimal')
    price: number;

}
