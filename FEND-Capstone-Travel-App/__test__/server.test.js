const request = require("supertest");
const app = require("../src/server/app");

const GEONAMES_USERNAME = process.env.GEONAMES_USERNAME;

const WEATHERBIT_API_KEY = process.env.WEATHERBIT_API_KEY;
const PIXABAY_API_KEY = process.env.PIXABAY_API_KEY;
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
