// @ts-nocheck
describe('Class', () => {

  test('class_instanceof_type', () => {
    class Obj {
      constructor(
        public name: string,
        public value: number) {}
    };

    let obj = new Obj("name", 1);
    expect(obj.name).toBe("name");
    expect(obj.value).toBe(1);

    expect(obj instanceof Obj).toBe(true);
    expect(typeof obj === 'object').toBe(true); // <- !!!
  });

  test('getter_setter', () => {
    class Obj {
      constructor(
        private _name: string,
        private _value: number,
      ) {}
      
      public get name() { return this._name; }
      public set name(name: string) { this._name = name; }

      public get value() { return this._value; }
      public set value(value: number) { this._value = value; }
    };

    let obj = new Obj("name", 1);
    expect(obj.name).toBe("name");
    expect(obj.value).toBe(1);

    obj.name = "other";
    expect(obj.name).toBe("other");

    obj.value = 2;
    expect(obj.value).toBe(2);
  });

  test('this_in_function_context', () => {

    let context = { greting: "Hello, " };

    let foo = function (message: string) {
      return `${this?.greting ?? ""}${message}`;
    }
    expect(foo.call(context, "USER")).toBe("Hello, USER");

    let bar = (message: string) => {
      return `${this?.greting ?? ""}${message}`;
    }
    // NOTE!
    // Arrow-function in object is created when called,
    // that is why it has no 'this' context.
    expect(bar.call(context, "USER")).toBe("USER"); // <- !!!
  });

  test('this_in_object_context', () => {

    let obj = {

      greting: "Hello, ",

      foo: function (message: string) {
        return `${this?.greting ?? ""}${message}`;
      },

      bar: (message: string) => {
        return `${this?.greting ?? ""}${message}`;
      },

      function_context: function() { return this; },
      arrow_function_context: () => { return this; },
    }

    expect(obj.function_context()).not.toBe(undefined);
    expect(obj.arrow_function_context()).toBe(undefined); // <- !!!

    expect(obj.foo("USER")).toBe("Hello, USER");
    expect(obj.bar("USER")).toBe("USER"); // <- !!!
  });

  test('this_in_class_function_context', () => {

    class Context {

      constructor(public greting: string) {}

      call_function = function (message: string) {
        return `${this?.greting ?? ""}${message}`;
      };

      function_context = function() { return this; };
    }

    let obj = new Context("Hello, ");

    expect(obj.function_context()).not.toBe(undefined);
    expect(obj.call_function("USER")).toBe("Hello, USER");

    let call_func_by_ref = obj.call_function;
    expect(call_func_by_ref("USER")).toBe("USER"); // <- !!!
  });

  // IMP: do not use 'this' in arrow functions
  test('this_in_class_arrow_function_context', () => {

    class Context {

      constructor(public greting: string) {}

      call_arrow_function = (message: string) => {
        return `${this?.greting ?? ""}${message}`;
      };

      arrow_function_context = () => { return this; };
    }

    let obj = new Context("Hello, ");

    expect(obj.arrow_function_context()).not.toBe(undefined);
    expect(obj.call_arrow_function("USER")).toBe("Hello, USER");

    let call_arrow_by_ref = obj.call_arrow_function;
    expect(call_arrow_by_ref("USER")).toBe("Hello, USER");
  });

});
