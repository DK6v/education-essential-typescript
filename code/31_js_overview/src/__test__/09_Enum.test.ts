describe('Enum', () => {

  beforeAll(() => {});

  test('enum_number', () => {
    enum Product { ONE, TWO, THREE };
    console.log(Product);
    expect(Product[0]).toBe('ONE');
    expect(Product['ONE']).toBe(0);
  });

  test('enum_string', () => {
    enum Product { ONE = 'one', TWO = 'two', THREE = 'three'};
    console.log(Product);
    expect(Product['ONE']).toBe('one');
  });

  test('const', () => {
    const enum Product { ONE, TWO, THREE };
    expect(Product['ONE']).toBe(0);
  });
});
