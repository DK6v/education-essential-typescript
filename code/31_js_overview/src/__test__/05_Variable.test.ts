// @ts-nocheck
describe('Variable', () => {
  test('make_copy', () => {

    let num: number = 1;
    expect(num).toBe(1);

    let copy: number = num;

    copy = 2;
    expect(num).toBe(1);
    expect(copy).toBe(2);
  });
});
