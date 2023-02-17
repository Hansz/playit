import { expect, test } from "@playwright/test";

import { TestIt } from "../src/testit.js";

test.describe("Test calculations", () => {
  test("Test :: Adding", () => {
    let calc = new TestIt(656);

    let receivedValue = calc.add(10);

    expect(receivedValue).toBe(666);
  });

  test("Test :: Subtracting", () => {
    let calc = new TestIt(676);

    let receivedValue = calc.subtract(10);

    expect(receivedValue).toBe(666);
  });

  test("Test :: Multiplication", () => {
    let calc = new TestIt(222);

    let receivedValue = calc.multiplyBy(3);

    expect(receivedValue).toBe(666);
  });

  test("Test :: Division", () => {
    let calc = new TestIt(1998);

    let receivedValue = calc.divideBy(3);

    expect(receivedValue).toBe(666);
  });
});
