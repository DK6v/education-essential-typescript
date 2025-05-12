// @ts-nocheck

class Base {
  constructor(
    public name: string,
    public price: number = 100,
  ) {};
};

describe('ClassPrototype', () => {

  test('create', () => {
    let base = new Base("base");

    expect(base.name).toBe("base");
    expect(base.price).toBe(100);
  });

  test('check_prototype', () => {
    let base = new Base("base");

    expect(Object.getPrototypeOf(base)).toBe(Base.prototype);
    expect(Object.getOwnPropertyNames(base)).toEqual(['name', 'price']);

    expect(Object.getPrototypeOf(base)).not.toBe(Object.prototype);
    expect(Object.getPrototypeOf(Base.prototype)).toBe(Object.prototype);
  });

  test('create_prototype', () => {
    let base = new Base("base");
    expect(base.toString()).toBe("[object Object]");

    let newPrototype = {
      toString: function () {
        return `${this.name}`;
      }
    };
    
    Object.setPrototypeOf(base, newPrototype);    
    expect(base.toString()).toBe("base");

    let other = new Base("other");
    expect(other.toString()).toBe("[object Object]");
  });

  test('copy_prototype', () => {
    let base = new Base("base");
    expect(base.toString()).toBe("[object Object]");

    // create copy
    let newPrototype = { ...Object.getPrototypeOf(base)};
    
    newPrototype.toString = function () {
      return `${this.name}`;
    };
    Object.setPrototypeOf(base, newPrototype);    
    expect(base.toString()).toBe("base");

    let other = new Base("other");
    expect(other.toString()).toBe("[object Object]");
  });

  test('change_prototype', () => {
    let base = new Base("base");
    expect(base.toString()).toBe("[object Object]");

    // modify by reference
    let prototype = Object.getPrototypeOf(base);
    prototype.toString = function () {
      return `${this.name}`;
    };
    expect(base.toString()).toBe("base");

    let other = new Base("other");
    expect(other.toString()).toBe("other");
  });

  test('prototype_chain', () => {
    
    let One = function () {}
    One.prototype.foo = function() { return true; };

    let Two = function () {
      One.call();
    }

    Object.setPrototypeOf(Two.prototype, One.prototype);
    Two.prototype.bar = function() { return true; };

    let one = new One();
    expect(Object.getPrototypeOf(one).hasOwnProperty('foo')).toBe(true);
    expect(Object.getPrototypeOf(one).hasOwnProperty('bar')).toBe(false);
    expect(one.foo?.()).toBe(true);
    expect(one.bar?.()).toBe(undefined);

    let two = new Two();
    expect(Object.getPrototypeOf(two).hasOwnProperty('foo')).toBe(false);
    expect(Object.getPrototypeOf(two).hasOwnProperty('bar')).toBe(true);
    expect(two.foo?.()).toBe(true);
    expect(two.bar?.()).toBe(true);
  });

  test('get_prototype_of', () => {
    
    function One() {
      this.foo = null;
    };
    One.prototype.outside = null;

    let one = new One();

    expect(typeof One).toBe('function');
    expect(typeof one).toBe('object');
    expect(typeof one.prototype).toBe('undefined');
    expect(typeof One.prototype).toBe('object');
    expect(typeof Object.getPrototypeOf(One)).toBe('function');
    expect(typeof Object.getPrototypeOf(one)).toBe('object');
    expect(typeof Object.getPrototypeOf(one).constructor).toBe('function');

    expect(One.prototype).toEqual(Object.getPrototypeOf(one));

    expect(one.hasOwnProperty('foo')).toBe(true);
    expect(one.hasOwnProperty('outside')).toBe(false);
    expect(Object.getPrototypeOf(one).hasOwnProperty('foo')).toBe(false);
    expect(Object.getPrototypeOf(one).hasOwnProperty('outside')).toBe(true);

    class Two {
      constructor(public foo : number) {
        this.inside = null;
      }
      public bar : number;
    }
    Two.prototype.outside = null;

    let two = new Two();

    expect(typeof Two).toBe('function');
    expect(typeof two).toBe('object');
    expect(typeof two.prototype).toBe('undefined');
    expect(typeof Two.prototype).toBe('object');
    expect(typeof Object.getPrototypeOf(Two)).toBe('function');
    expect(typeof Object.getPrototypeOf(two)).toBe('object');
    expect(typeof Object.getPrototypeOf(two).constructor).toBe('function');

    expect(Two.prototype).toEqual(Object.getPrototypeOf(two));

    expect(two.hasOwnProperty('foo')).toBe(true);
    expect(two.hasOwnProperty('bar')).toBe(true);
    expect(two.hasOwnProperty('inside')).toBe(true);
    expect(two.hasOwnProperty('outside')).toBe(false);
    expect(Object.getPrototypeOf(two).hasOwnProperty('foo')).toBe(false);
    expect(Object.getPrototypeOf(two).hasOwnProperty('bar')).toBe(false);
    expect(Object.getPrototypeOf(two).hasOwnProperty('inside')).toBe(false);
    expect(Object.getPrototypeOf(two).hasOwnProperty('outside')).toBe(true);

    let three = {
      foo: null,
    };
    three.bar = null;

    expect(typeof three.prototype).toBe('undefined');
    expect(typeof Object.getPrototypeOf(three)).toBe('object');
    expect(typeof Object.getPrototypeOf(three).constructor).toBe('function');

    expect(three.hasOwnProperty('foo')).toBe(true);
    expect(three.hasOwnProperty('bar')).toBe(true);

    expect(Object.getPrototypeOf(three).hasOwnProperty('foo')).toBe(false);
    expect(Object.getPrototypeOf(three).hasOwnProperty('bar')).toBe(false);
  });
});
