import {capitalize , reverseString} from "../index";

test("Check capitalize function working fine ", () => {
  expect(capitalize("mohamed")).toBe("Mohamed");
});


test("Check reverseString function working fine ", () => {
  expect(reverseString("salvador")).toBe("rodavlas");
});
