const request = require("supertest");
const app = require("../src/server/app");

const GEONAMES_USERNAME = "gdngothehieu";

const WEATHERBIT_API_KEY = "2a0121063ad24033b30a2d8532075936";
const PIXABAY_API_KEY = "29570620-da60fab639d51358578f4869c";
const BASE_URL =
  "http://api.geonames.org/searchJSON?formatted=true&q=manchester";
describe("Testing APIs", () => {
  it("Get geo locations", async () => {
    const res = await request(app)
      .post("/geo-name-locations")
      .send({
        BASE_URL: `${BASE_URL}&username=${GEONAMES_USERNAME}`,
      });

    expect(res.statusCode).toEqual(200);
  });

  it("Get geo locations", async () => {
    const res = await request(app)
      .post("/geo-name-locations")
      .send({
        BASE_URL: `${BASE_URL}&key=${WEATHERBIT_API_KEY}`,
      });

    expect(res.statusCode).toEqual(200);
  });

  it("Get geo locations", async () => {
    const res = await request(app)
      .post("/geo-name-locations")
      .send({
        BASE_URL: `${BASE_URL}&key=${PIXABAY_API_KEY}`,
      });

    expect(res.statusCode).toEqual(200);
  });
});
