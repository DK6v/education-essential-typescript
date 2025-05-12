describe('String', () => {

  beforeAll(() => {});

  test('get_type_of_this', () => {

    function getTypeOfThis(this: any) : any {
      return typeof this;
    };

    const str1: string = 'text';
    expect(getTypeOfThis.call(str1)).toBe("string");

    const str2: String = new String('text');
    expect(getTypeOfThis.call(str2)).toBe("object");
  });

  test('type_cast', () => {

    function toString(message: string) : string {
      return message;
    };

    const str1: string = 'text';
    expect(toString(str1)).toBe("text");

    // Cast is not allowed: String -> string
    // const str2: String = new String('text');
    // expect(toString(str2)).toBe("text");
  });
});
 