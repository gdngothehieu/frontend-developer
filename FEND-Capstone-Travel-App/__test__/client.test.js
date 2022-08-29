import {
  handleSubmit,
  getWeatherBitData,
  getPixabayImages,
  getGeonameData,
} from "../src/client/js/app";

describe("Testing client app", () => {
  test("It should success", () => {
    expect(handleSubmit).toBeDefined();
    expect(getPixabayImages).toBeDefined();

    expect(getWeatherBitData).toBeDefined();
    expect(getGeonameData).toBeDefined();
  });
});
