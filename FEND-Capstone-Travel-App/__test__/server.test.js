const request = require("supertest");
const app = require("../src/server/app");

const GEONAMES_USERNAME = process.env.GEONAMES_USERNAME;
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
});
