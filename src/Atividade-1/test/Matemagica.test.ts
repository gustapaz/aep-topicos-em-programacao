import { describe, expect, test } from "@jest/globals";
import { Matemagica } from "../Matemagica";
import { ErrorMessages } from "../../Error/errorMessages.enum";

describe("Sum", () => {
  test("Sum of two numbers", () => {
    const matemagica = new Matemagica();
    matemagica.setA(1);
    matemagica.setB(2);

    expect(matemagica.getSum()).toBe(3);
  }),

  test("Sum of number with string", () => {
    const matemagica = new Matemagica();
    matemagica.setA(1);
    // @ts-ignore
    matemagica.setB("a");

    expect(matemagica.getSum()).toBe(ErrorMessages.ENUM_ERRO_SUM);
  });
});

describe("Sub", () => {
  test("Subtraction of two numbers", () => {
    const matemagica = new Matemagica();
    matemagica.setA(1);
    matemagica.setB(2);

    expect(matemagica.getSub()).toBe(-1);
  }),

  test("Subtraction of number with string", () => {
    const matemagica = new Matemagica();
    matemagica.setA(1);
    // @ts-ignore
    matemagica.setB("a");

    expect(matemagica.getSub()).toBe(ErrorMessages.ENUM_ERRO_SUB);
  });
});

describe("Div", () => {
  test("Division of two numbers", () => {
    const matemagica = new Matemagica();
    matemagica.setA(1);
    matemagica.setB(2);

    expect(matemagica.getDiv()).toBe(.5);
  }),

  test("Division of number with string", () => {
    const matemagica = new Matemagica();
    matemagica.setA(1);
    // @ts-ignore
    matemagica.setB("a");

    expect(matemagica.getDiv()).toBe(ErrorMessages.ENUM_ERRO_DIV);
  });
});

describe("Mult", () => {
  test("Multiplication of two numbers", () => {
    const matemagica = new Matemagica();
    matemagica.setA(1);
    matemagica.setB(2);

    expect(matemagica.getMult()).toBe(2);
  }),
  
  test("Multiplication of number with string", () => {
    const matemagica = new Matemagica();
    matemagica.setA(1);
    // @ts-ignore
    matemagica.setB("a");

    expect(matemagica.getMult()).toBe(ErrorMessages.ENUM_ERRO_MULT);
  });
});
