describe('DuckTyping', () => {

  beforeAll(() => {});

  test('duck_typing', () => {
    
    class Duck {
      public name!: string;
      constructor() { this.name = "duck"; }
    }

    class Pigeon {
      public name!: string;
      public type: number;
      constructor() { this.name = "pigeon"; this.type = 1; }
    }

    let duck: Duck = new Duck();
    let pigeon: Pigeon = new Pigeon();

    let foo = function (duck: Duck) : void {
      console.log(`Foo: ${duck.name}`);
    };

    foo(duck); // OK
    foo(pigeon); // OK
    foo({name: "name"}); // OK
    
    let bar: Pigeon = { name: "name", type: 1};
    expect(JSON.stringify(pigeon) === JSON.stringify({ name: "pigeon", type: 1})).toBeTruthy();
    foo(bar); // OK
    let ctx = { name: "name", type: 1};
    foo(ctx); // OK
  });

  test('duck_typing_literal', () => {
    
    class Duck {
      public name!: string;
      constructor() { this.name = "duck"; }
    }

    class Pigeon {
      public name!: string;
      public type: number;
      constructor() { this.name = "pigeon"; this.type = 1; }
    }

    let printDuckName = function (duck: { name: string }) : void {
      console.log(`Foo: ${duck.name}`);
    };
   
    let pigeon = { name: "name", type: 1} as Pigeon;
    printDuckName(pigeon); // OK

    // NOK: Checks for literal types are more stringent.
    // foo({ name: "name", type: 1});
    printDuckName({ name: "name", type: 1} as Duck); // OK
    printDuckName({ name: "name", type: 1} as { name: string}); // OK
  });
});
