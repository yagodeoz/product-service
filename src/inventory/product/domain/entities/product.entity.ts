export class Product {
  constructor(
    public readonly id: string,
    public code: string,
    public name: string,
    public price: number,
  ) {}
}