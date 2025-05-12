import { benchmarkSuite } from "jest-bench";
import { HelloWorld } from "../HelloWorld";

let user = new HelloWorld("USER");;

benchmarkSuite("sample", {
  setup() {},
  teardown() {},

  ["HelloWorld"]: () => {
    user.hello();
  },
});