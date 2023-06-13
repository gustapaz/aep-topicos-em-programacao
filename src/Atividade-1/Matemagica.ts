import { ErrorMessages } from "../Error/errorMessages.enum";

export class Matemagica {
  private a: Number;
  private b: Number;

  public constructor() {}
  private sum(): Number | String {
    if (typeof this.getA() !== "number" || typeof this.getB() !== "number") {
      return ErrorMessages.ENUM_ERRO_SUM;
    }
    return Number(this.a) + Number(this.b);
  }

  private sub(): Number | String {
    if (typeof this.getA() !== "number" || typeof this.getB() !== "number") {
      return ErrorMessages.ENUM_ERRO_SUB;
    }
    return Number(this.a) - Number(this.b);
  }

  private div(): Number | String {
    if (typeof this.getA() !== "number" || typeof this.getB() !== "number") {
      return ErrorMessages.ENUM_ERRO_DIV;
    }
    return Number(this.a) / Number(this.b);
  }

  private mult(): Number | String {
    if (typeof this.getA() !== "number" || typeof this.getB() !== "number") {
      return ErrorMessages.ENUM_ERRO_MULT;
    }
    return Number(this.a) * Number(this.b);
  }

  public getSum() {
    return this.sum();
  }

  public getSub() {
    return this.sub();
  }

  public getDiv() {
    return this.div();
  }

  public getMult() {
    return this.mult();
  }

  public setA(a: Number): void {
    this.a = a;
  }

  public setB(b: Number): void {
    this.b = b;
  }

  public getA() {
    return this.a;
  }

  public getB() {
    return this.b;
  }
}
