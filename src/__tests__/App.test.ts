import { sampleFuncToTest } from "../components/App";

test("1 + 1 = 2", () => {
  expect(sampleFuncToTest(1, 1)).toBe(2);
});
