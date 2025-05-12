// @ts-nocheck
describe('TypeCast', () => {
  test('nullish_coalescing_operator', () => {

    const defaultValue = Symbol('default');

    expect(null       ?? defaultValue).toBe(defaultValue);
    expect(undefined  ?? defaultValue).toBe(defaultValue);

    expect(100        || defaultValue).toBe(100);
    expect(0          ?? defaultValue).toBe(0);
    expect(true       ?? defaultValue).toBe(true);
    expect(false      ?? defaultValue).toBe(false);
    expect(NaN        ?? defaultValue).toBe(NaN);
    expect("str"      ?? defaultValue).toBe("str");
    expect({}         ?? defaultValue).toEqual({}); // not the same
  });

  test('value_or_default', () => {

    const defaultValue = Symbol('default');

    expect(null       || defaultValue).toBe(defaultValue);
    expect(undefined  || defaultValue).toBe(defaultValue);
    expect(false      || defaultValue).toBe(defaultValue);
    expect(0          || defaultValue).toBe(defaultValue);
    expect(NaN        || defaultValue).toBe(defaultValue);

    expect(100        || defaultValue).toBe(100);
    expect(true       || defaultValue).toBe(true);
    expect("str"      || defaultValue).toBe("str");
    expect({}         || defaultValue).toEqual({}); // not the same
  });

  test('value_plus_number', () => {

    const number: Number = 1;

    expect(null       + number).toBe(number);
    expect(undefined  + number).toBe(NaN);
    expect(NaN        + number).toBe(NaN);
    expect(0          + number).toBe(number);
    expect(100        + number).toBe(100 + number);
    expect(true       + number).toBe(1 + number);
    expect(false      + number).toBe(number);
    expect("100"      + number).toBe("100" + String(number));
    expect("str"      + number).toBe("str" + String(number));
    expect({}         + number).toBe("[object Object]" + + String(number)); // 8-0

    expect(number + null     ).toBe(number);
    expect(number + undefined).toBe(NaN);
    expect(number + NaN      ).toBe(NaN);
    expect(number + 0        ).toBe(number);
    expect(number + 100      ).toBe(100 + number);
    expect(number + true     ).toBe(1 + number);
    expect(number + false    ).toBe(number);
    expect(number + "100"    ).toBe(String(number) + "100");
    expect(number + "str"    ).toBe(String(number) + "str");
    expect(number + {}       ).toBe(String(number) + "[object Object]"); // 8-0
  });

  test('typeof', () => {

    expect(typeof(100 + "100")).toBe("string");
    expect(typeof("100" + 100)).toBe("string");

    expect(typeof(100 - "100")).toBe("number");
    expect(typeof("100" - 100)).toBe("number");

    expect(typeof(100 / "100")).toBe("number");
    expect(typeof("100" / 100)).toBe("number");

    expect(typeof(100 * "100")).toBe("number");
    expect(typeof("100" * 100)).toBe("number");
});

test('type_cast', () => {

    expect(100 + "100").toBe("100100");
    expect("100" + 100).toBe("100100");

    expect(100 - "100").toBe(0);
    expect("100" - 100).toBe(0);

    expect(100 / "100").toBe(1);
    expect("100" / 100).toBe(1);

    expect(100 * "100").toBe(10000);
    expect("100" * 100).toBe(10000);

    expect(100 == "100").toBe(true);
    expect("100" == 100).toBe(true);

    expect(100 === "100").toBe(false);
    expect("100" === 100).toBe(false);
  });

  test('type_of_value', () => {

    expect(typeof(1)).toBe("number");
    expect(typeof(Number(1))).toBe("number");
    expect(Number(1) === 1).toBe(true);
  });

  test('cast_to_number', () => {

    expect(Number(null)     ).toBe(0);
    expect(Number(undefined)).toBe(NaN);
    expect(Number(NaN)      ).toBe(NaN);
    expect(Number(0)        ).toBe(0);
    expect(Number(100)      ).toBe(100);
    expect(Number(true)     ).toBe(1);
    expect(Number(false)    ).toBe(0);
    expect(Number("100")    ).toBe(100);
    expect(Number("str")    ).toBe(NaN);
    expect(Number({})       ).toBe(NaN);
  });

  test('cast_to_boolean', () => {

    expect(Boolean(null)     ).toBe(false);
    expect(Boolean(undefined)).toBe(false);
    expect(Boolean(NaN)      ).toBe(false);
    expect(Boolean(0)        ).toBe(false);
    expect(Boolean(100)      ).toBe(true);
    expect(Boolean(true)     ).toBe(true);
    expect(Boolean(false)    ).toBe(false);
    expect(Boolean("100")    ).toBe(true);
    expect(Boolean("str")    ).toBe(true);
    expect(Boolean({})       ).toBe(true);
  });

  test('cast_to_string', () => {

    expect(String(null)     ).toBe("null");
    expect(String(undefined)).toBe("undefined");
    expect(String(NaN)      ).toBe("NaN");
    expect(String(0)        ).toBe("0");
    expect(String(100)      ).toBe("100");
    expect(String(true)     ).toBe("true");
    expect(String(false)    ).toBe("false");
    expect(String("100")    ).toBe("100");
    expect(String("str")    ).toBe("str");
    expect(String({})       ).toBe("[object Object]");
  });

});
