import { capitalize, reverseString, calculator } from "../index";

test("Check capitalize function working fine ", () => {
  expect(capitalize("mohamed")).toBe("Mohamed");
});

test("Check reverseString function working fine ", () => {
  expect(reverseString("salvador")).toBe("rodavlas");
});

test("Tech Calculator Add function  ", () => {
  expect(calculator.add(1, 3)).toBe(4);
});

test("Tech Calculator divide function  ", () => {
  expect(calculator.divide(6, 3)).toBe(2);
});

test("Tech Calculator subtract function  ", () => {
  expect(calculator.subtract(6, 3)).toBe(3);
});

test("Tech Calculator multiply function  ", () => {
  expect(calculator.multiply(6, 3)).toBe(18);
});
