const express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

const apiController = require("./controllers/apiController");

const app = express();
const port = 9001;

app.use(cors());
// to use json
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.static("dist"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/", apiController.homePage);
app.post("/geo-name-locations", apiController.getGeoNameLocations);
app.post("/weather-bit-forecast", apiController.getWeatherBitForecast);
app.post("/pixabay-images", apiController.getPixabayImages);

module.exports = app;
