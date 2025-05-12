import { benchmarkSuite } from "jest-bench";
import { HelloWorld } from "../HelloWorld.js";

let user = new HelloWorld("USER");;

benchmarkSuite("sample", {
  setup() {},
  teardown() {},

  ["HelloWorld"]: () => {
    user.hello();
  },
});