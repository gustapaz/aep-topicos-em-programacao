import { describe, expect, test } from "@jest/globals";
import { ArrayRandomValue } from "../ArrayRandomValues";
import { ProductType } from "../Types/product.type";

describe("ArrayRandomValue", () => {
  let arrayRandomValue: ArrayRandomValue;
  let products: ProductType[];

  beforeEach(() => {
    arrayRandomValue = new ArrayRandomValue();
    products = [
      { name: "Product 1", qty: 5, price: 10 },
      { name: "Product 2", qty: 8, price: 15 },
      { name: "Product 3", qty: 3, price: 20 },
      { name: "Product 4", qty: 6, price: 25 },
      { name: "Product 5", qty: 7, price: 30 },
    ];
  });

  test("Defining Array of Products", () => {
    arrayRandomValue.setProducts(products);
    expect(arrayRandomValue.getProducts()).toEqual(products);
  });
});
