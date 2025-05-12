// @ts-nocheck

type BaseType = { name: string, price: number };

let Base = undefined;

describe('ClassConstructor', () => {

  beforeAll(() => {
    Base = function(name: string, price: number = 100) {
      this.name = name;
      this.price = price;
    }
  });

  test('create', () => {
    let base = new Base("base");
    expect(base.name).toBe("base");
    expect(base.price).toBe(100);
  });

  test('change_prototype', () => {
    let base = new Base("base");
    expect(base.toString()).toBe("[object Object]");

    Base.prototype.toString = function () {
      return `${this.name}`;
    };
    expect(base.toString()).toBe("base");

    let other = new Base("other");
    expect(other.toString()).toBe("other");

    Base.prototype.toString = Object.prototype.toString;
    expect(base.toString()).toBe("[object Object]");
  });

  test('static_method', () => {
    let One = function () {
      this.foo = undefined;
    };
    One.bar = () => { return true; }
  });
});
