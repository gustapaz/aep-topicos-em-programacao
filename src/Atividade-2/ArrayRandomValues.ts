import { ProductType } from "./Types/product.type";

export class ArrayRandomValue {
  private products: Array<ProductType>;
  private numberOfRandomValues: Number;

  public setProducts(products: Array<ProductType>): void {
    this.products = products;
  }

  public setNumberOfRandomValues(number: Number): void {
    this.numberOfRandomValues = number;
  }

  public getProducts(): Array<ProductType> {
    return this.products;
  }

  public getNumberOfRandomValues(): Number {
    return this.getRandomObjects();
  }

  private getRandomObjects() {
    let result: any = [];
    while (result.length < this.numberOfRandomValues) {
      let randomIndex = Math.floor(Math.random() * this.products.length);
      let randomObject: any = this.products[randomIndex];
      if (!result.includes(randomObject)) {
        result.push(randomObject);
      }
    }

    return result;
  }
}