describe('Array', () => {
  test('sum_elements', () => {

    let sum = (...numbers: number[]): number => {
      let val = numbers.reduce(
        (total, value) => {
          return total + (Number.isNaN(value) ? 0 : value); 
        }, 0);
      return val;
    }

    let array = [1, 2, 3];

    expect(sum(...array)).toBe(6);
    expect(sum(...[1, 2, 3])).toBe(6);
  }),

  test('spread_operator', () => {
    let array = [1, 2, 3];

    let [one, two, three] = array;
    expect(one).toBe(1);
    expect(two).toBe(2);
    expect(three).toBe(3);

    let [head, ...tail] = array;
    expect(head).toBe(1);
    expect(tail).toEqual([2, 3]);

    let [first] = array;
    expect(first).toBe(1);

    let [last] = array.reverse();
    expect(last).toBe(3);

    let arr = new Array(1000).fill(0);
    arr.splice(500, 501, 1);
    expect(arr[500]).toBe(1);
  });

  test('copy_with_rest_operator', () => {
    let array = [1, 2, 3];
    expect(array).toStrictEqual([1, 2, 3]);

    let copy = [...array];
    copy[0] = 4;

    expect(array).toStrictEqual([1, 2, 3]);
    expect(copy).toStrictEqual([4, 2, 3]);
  });

  test('copy_with_equal_operator_is_just_a_reference', () => {

    let array: number[] = [1, 2, 3];
    expect(array).toStrictEqual([1, 2, 3]);

    let copy: number[] = array;
    copy[0] = 4;

    expect(array).toStrictEqual([4, 2, 3]); // <- 
    expect(copy).toStrictEqual([4, 2, 3]);
  });
});
