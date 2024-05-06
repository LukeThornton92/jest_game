/**
 * @jest-environment jsdom
 */

beforeAll(() => {
  let fs = require("fs");
  let fileContents = fs.readFileSync("index.html", "UTF-8");
  document.open();
  document.write(fileContents);
  document.close();
});

describe("game object contains correct keys", () => {
  test("score key exists", () => {
    expect("score" in game).toBe(true);
  });
});
