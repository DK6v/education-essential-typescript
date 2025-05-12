// @ts-nocheck
describe('Object', () => {
  test('has_property', () => {

    let obj = { 
      has_property: true as Boolean,
      has_number: 0 as Number,
    };

    const defaultValue = Symbol('default');

    expect(obj.has_property).toBe(true);
    expect(obj?.has_property).toBe(true);
    expect(obj.has_property ?? defaultValue).toBe(true);
    expect(obj.has_property || defaultValue).toBe(true);

    expect(obj.has_number).toBe(0);
    expect(obj.has_number ?? defaultValue).toBe(0);
    expect(obj.has_number || defaultValue).toBe(defaultValue); // !!!
    expect(obj?.has_number).toBe(0);
    expect(obj?.has_number ?? defaultValue).toBe(0);
    
    expect(obj.missed_property).toBe(undefined);
    expect(obj.missed_property ?? defaultValue).toBe(defaultValue);
    expect(obj.missed_property || defaultValue).toBe(defaultValue);
    expect(obj?.missed_property).toBe(undefined);
    expect(obj?.missed_property ?? defaultValue).toBe(defaultValue);

    expect({}?.missed?.missed.missed).toBe(undefined);
    expect({}?.missed?.missed.missed ?? defaultValue).toBe(defaultValue);

    expect(null?.missed.missed).toBe(undefined);
    expect(undefined?.missed.missed).toBe(undefined);
   
    expect((obj ?? {}).missed_property ?? defaultValue).toBe(defaultValue);
  });

  test('copy_with_equal_operator_is_just_a_reference', () => {

    type obj_t = { num: number };

    let obj: obj_t = { num: 1};
    expect(obj).toStrictEqual({ num: 1});

    let copy: obj_t = obj;
    copy.num = 2;

    expect(obj).toStrictEqual({ num: 2}); // <- !!!
    expect(copy).toStrictEqual({ num: 2});
  });

  test('copy_with_rest_operator', () => {
    type obj_t = { num: number };

    let obj: obj_t = { num: 1};
    expect(obj).toStrictEqual({ num: 1});

    let copy: obj_t = { ...obj };
    copy.num = 2;

    expect(obj).toStrictEqual({ num: 1}); // <- !!!
    expect(copy).toStrictEqual({ num: 2});
  });

  test('delete_property', () => {
    type obj_t = { name: string, value: number };

    let obj: obj_t = { name: "name", value: 1};
    expect(obj).toStrictEqual({ name: "name", value: 1});
    
    delete obj.value;

    expect(obj).toStrictEqual({ name: "name" });
    expect(obj?.value).toBe(undefined);
    expect(obj.hasOwnProperty('name')).toBe(true);
    expect(obj.hasOwnProperty('value')).toBe(false);
    expect('name' in obj).toBe(true);
    expect('value' in obj).toBe(false);
  });

  test('optional_property', () => {
    type T = { name: string, value: number, option?: string };

    let obj: T = { name: "name", value: 1};
    expect(obj.option).toBe(undefined);
    expect(obj.other).toBe(undefined);
  });
});
