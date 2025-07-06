import { IProduct } from "../interfaces/product.interface";

export class Product implements IProduct {
  constructor(
    public readonly id: string,
    public code: string,
    public name: string,
    public price: number,
  ) {}
}