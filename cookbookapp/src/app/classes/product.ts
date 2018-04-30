import { ProductCategory } from '../classes/productCategory';

export class Product {
    id: number;
    name: string;
    category: ProductCategory;
    quantity: number;

    constructor(id: number, name: string, category: ProductCategory, quantity: number) {
      this.id = 0;
      this.name = name;
      this.category = category;
      this.quantity = quantity;
    }
}
