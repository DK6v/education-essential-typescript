import { benchmarkSuite } from "jest-bench";

benchmarkSuite("array_reverse", {
  setup() {},
  teardown() {},

  ["first"]: () => {
    let array = [1, 2, 3];
    let [first] = array;
    expect(first).toBe(1);
  },

  ["last"]: () => {
    let array = [1, 2, 3];
    let [last] = array.reverse();
    expect(last).toBe(3);
  },
});

benchmarkSuite("array_applend", {
  setup() {},
  teardown() {},

  ["first"]: () => {
    let array = new Array(1000).fill(0);
    array.unshift(1);
    expect(array[0]).toBe(1);
  },

  ["last"]: () => {
    let array = new Array(1000).fill(0);
    array.push(1);
    expect(array[array.length - 1]).toBe(1);
  },

  ["middle"]: () => {
    let array = new Array(1000).fill(0);
    array.splice(500, 501, 1);
    expect(array[500]).toBe(1);
  },
});
