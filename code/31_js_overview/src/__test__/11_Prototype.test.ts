describe('Prototipe', () => {

  beforeAll(() => {});

  test('prototype', () => {

    class Duck {
      public name: string
      constructor(name: string = "duck") { this.name = name; }
    }

    let duck1: Duck = new Duck();
    // console.log(`duck1::prototype ${JSON.stringify(Object.getPrototypeOf(duck1))}`)

    expect(Duck.prototype).toEqual({});
    expect(Object.getPrototypeOf(duck1)).toEqual({});
  });

  test('prototype_derived', () => {

    class Duck {
      constructor(name: string = "duck") { this.name = name; }
      public toString(): string { return `Duck::${this.name}` }
      public bar(): void {}
      public name: string
    }

    expect(Object.getOwnPropertyNames(Duck.prototype).includes('bar'));
    expect(Duck.prototype.hasOwnProperty('bar')).toBeTruthy();
    expect('bar' in Duck.prototype).toBeTruthy();

    class Derived extends Duck {
      constructor() { super("derived"); }
      public toString() : string { return `Derived::${this.name}` }
    }

    let duck = new Duck();
    expect(duck.toString()).toBe("Duck::duck");

    let derived_1 = new Derived();
    expect(derived_1.toString()).toBe("Derived::derived");

    let derived_2 = new Derived();
    expect(derived_2.toString()).toBe("Derived::derived");

    let proto = {...Derived.prototype};
    proto.toString = function () { return `Overwritten::${this!.name}` };
    Object.setPrototypeOf(derived_2, proto);

    expect(duck.toString()).toBe("Duck::duck");
    expect(derived_1.toString()).toBe("Derived::derived");
    expect(derived_2.toString()).toBe("Overwritten::derived");
  });
});
