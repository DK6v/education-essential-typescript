function arraysEqual<T>(a: T[], b: T[]) {
  return a.length === b.length && a.every(item => b.includes(item));
}

function arrayIncludes<T>(a: T[], b: T[]) {
  return a.length >= b.length && b.every(item => a.includes(item));
}

function arrayJoin<T>(a: T[], b: T[]) {
  let join = new Set();
  [...a, ...b].forEach(v => join.add(v));
  return [...join];
}

let isAandB = <A, B> (a: A, b: B, obj: any): obj is A & B => {
  let keys = (obj: any) => Object.getOwnPropertyNames(obj);
  return arraysEqual(
    arrayJoin(keys(a), keys(b)),
    Object.getOwnPropertyNames(obj));
}

let isAorB = <A, B> (a: A, b: B, obj: any): obj is A | B => {
  let keys = (obj: any) => Object.getOwnPropertyNames(obj);
  return (arrayIncludes([...keys(a), ...keys(b)], keys(obj))) &&
         (arrayIncludes(keys(obj), keys(a)) ||
          arrayIncludes(keys(obj), keys(b)));
}

describe('TypeStatement', () => {

  beforeAll(() => {});

  test('cast_to_any', () => {
    let num: number = 100;

    num = "200" as any;
    expect(num).toBe("200");

    num += 1; 
    expect(num).toBe("2001");

    // TS2322: Type 'string' is not assignable to type 'number'.
    // num = "300";

    num = <any>"300"
    expect(num).toBe("300");
  });

  test('keyof_or_stringent', () => {
    
    class A { constructor(public a: number = 1, public c: number = 3) {} };
    class B { constructor(public b: number = 2, public c: number = 3) {} };

    // keyof A|B = (keyof A) & (keyof B)
    type AB = A | B;
    
    let TRUE = true;
    expect(isAorB(new A(), new B(), {})).toBe(false);
    expect(isAorB(new A(), new B(), {a: 1})).toBe(false);
    expect(isAorB(new A(), new B(), {a: 1, b: 2})).toBe(false);
    expect(isAorB(new A(), new B(), {a: 1, c: 3})).toBe(TRUE);
    expect(isAorB(new A(), new B(), {b: 1, c: 3})).toBe(TRUE);
    expect(isAorB(new A(), new B(), {a: 1, b: 2, c: 3})).toBe(TRUE);
    expect(isAorB(new A(), new B(), {a: 2, b: 2, c: 3, d: 4})).toBe(false);
  });
  
  test('keyof_and_stringent', () => {
    
    class A { constructor(public a: number = 1, public c: number = 3) {} };
    class B { constructor(public b: number = 2, public c: number = 3) {} };

    // keyof A & B = (keyof A) | (keyof B)
    type AB = A & B;
    
    let TRUE = true;
    expect(isAandB(new A(), new B(), {})).toBe(false);
    expect(isAandB(new A(), new B(), {a: 1})).toBe(false);
    expect(isAandB(new A(), new B(), {a: 1, b: 2})).toBe(false);
    expect(isAandB(new A(), new B(), {a: 2, b: 2, c: 3})).toBe(TRUE);
    expect(isAandB(new A(), new B(), {a: 2, b: 2, c: 3, d: 4})).toBe(false);
  });

  test('keyof_combined', () => {
    
    class A { constructor(public a: number = 1) {} };
    class B { constructor(public b: number = 2) {} };
    class C { constructor(public c: number = 3) {} };

    type E = (A|B) & (A|C);
    let e: E[] = [
      // {},
      {a: 1},
      // {b: 2},
      // {c: 3},
      {a: 1, b: 2},
      {a: 1, c: 3},
      {b: 2, c: 3},
      {a: 1, b: 2, c: 3},
      // {a: 1, b: 2, c: 3, d: 4},
    ];

    type D = (A&B) | (A&C);
    let d: D[] = [
      // {},
      // {a: 1},
      // {b: 2},
      // {c: 3},
      {a: 1, b: 2},
      {a: 1, c: 3},
      // {b: 2, c: 3},
      {a: 1, b: 2, c: 3},
      // {a: 1, b: 2, c: 3, d: 4},
    ];
  });

  test('readonly_property', () => {

    interface A { a: number; }
    interface B { readonly a: number; }

    let a: A = { a: 1 } as B;
    expect(a.a).toBe(1);

    let b: B = { a: 2 } as A;
    expect(b.a).toBe(2);

    a.a = 1;

    // NOK, readonly
    // b.a = 2;
  });

  test('type_vs_value', () => {
    let foo = function({a, b} : {a: number, b: string}) {}
    foo({a: 1, b: "abc"});
  });
});
