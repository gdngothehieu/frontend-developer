import {
  handleSubmit,
  getWeatherBitData,
  getPixabayImages,
  getGeonameData,
} from "../src/client/js/app";

describe("handleSubmit()", () => {
  test("It should success", () => {
    expect(handleSubmit).toBeDefined();
    expect(getPixabayImages).toBeDefined();

    expect(getWeatherBitData).toBeDefined();
    expect(getGeonameData).toBeDefined();
  });
});
