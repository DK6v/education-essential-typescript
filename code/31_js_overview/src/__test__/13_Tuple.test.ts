describe('Tuple', () => {

  beforeAll(() => {});

  test('tuple', () => {
    let num: [number, number] = [100, 200];
    
    expect(num[0]).toBe(100);
    expect(num[1]).toBe(200);

    // TS2322: Type '[number, number, number]' is not assignable to type '[number, number]'.
    // Source has 3 element(s) but target allows only 2.
    // num = [1, 2, 3];

    // let triple: [number, number, number] = [1, 2, 3];
    // num = triple;
  });

  test('array_to_tuple', () => {
    let array = [100, 200];

    let num: [number, number] = array as [number, number];
    expect(num[0]).toBe(100);
    expect(num[1]).toBe(200);

    // Type 'number[]' is not assignable to type '[number, number]'.
    // Target requires 2 element(s) but source may have fewer.
    // let num: [number, number] = array;
  });

  test('tuple_to_array', () => {
    let tuple: [number, number] = [100, 200];

    let num: number[] = tuple;
    expect(num[0]).toBe(100);
    expect(num[1]).toBe(200);
  });
});
