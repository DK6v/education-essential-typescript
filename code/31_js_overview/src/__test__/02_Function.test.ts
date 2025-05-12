describe('Functions', () => {
  test('rest parameter', () => {

    expect(
      Array(1, 2, 3).reduce(function(total, value) { return total + value; }, 0)
    ).toBe(6);

    expect(
      Array(1, 2, 3).reduce((total, value) => { return total + value; }, 0)
    ).toBe(6);

    expect(
      Array(1, 2, 3).reduce(
        (total, value) => {
          return total + (Number.isNaN(value) ? 0 : value); 
        }, 0)
    ).toBe(6);

    expect(
      Array(1, 2, 3).reduce(
        (total, value) => {
          return total + (Number.isNaN(value) ? 0 : value); 
        }, 0)
    ).toBe(6);

  });
});
