import { urlValidator } from "../src/client/js/urlChecker";

describe('Test, the function "urlValidator()" should exist', () => {
  test("It should return true", async () => {
    expect(urlValidator).toBeDefined();
  });
});
describe('Test, the function "urlValidator()" should be a function', () => {
  test("It should be a function", async () => {
    expect(typeof urlValidator).toBe("function");
  });
});

describe('Test, the function "urlValidator()" for valid url', () => {
  const url = "https://www.facebook.com/";
  document.body.innerHTML =
    "<div>" +
    '                          <h5 id="urlValidator" style="color:red"></h5>  ' +
    "</div>";
  test("It should return true", async () => {
    const response = urlValidator(url);
    expect(response).toBeDefined();
    expect(response).toBe(true);
  });
});
describe('Test "urlValidator()" for invalid url', () => {
  const url = "https://www.facebook.com/";
  document.body.innerHTML =
    "<div>" +
    '                          <h5 id="urlValidator" style="color:red"></h5>  ' +
    "</div>";
  test("It should return false", async () => {
    const response = urlValidator(url);
    expect(response).toBeDefined();
    expect(response).toBe(true);
  });
});
