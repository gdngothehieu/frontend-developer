const dotenv = require("dotenv");
const axios = require("axios");
dotenv.config();
const GEONAMES_USERNAME = "gdngothehieu";

const WEATHERBIT_API_KEY = "2a0121063ad24033b30a2d8532075936";
const PIXABAY_API_KEY = "29570620-da60fab639d51358578f4869c";

exports.homePage = (req, res) => {
  res.sendFile(__dirname + "dist/index.html");
};

exports.getGeoNameLocations = async (req, res) => {
  try {
    if (!req.body.BASE_URL) {
      res.json({ message: "Invalid URL", status: "Failed" }).status(400);
      return;
    }
    const response = await axios
      .get(`${req.body.BASE_URL}&username=${GEONAMES_USERNAME}`)
      .then((data) => {
        return data;
      });
    res.send(response.data);
  } catch (e) {
    console.log(e);
  }
};

exports.getWeatherBitForecast = async (req, res) => {
  try {
    if (!req.body.BASE_URL) {
      res.json({ message: "Invalid URL", status: "Failed" }).status(400);
      return;
    }
    const response = await axios.get(
      `${req.body.BASE_URL}&key=${WEATHERBIT_API_KEY}`
    );
    res.send(response.data.data);
  } catch (e) {
    console.log(e);
  }
};

exports.getPixabayImages = async (req, res) => {
  try {
    if (!req.body.BASE_URL) {
      res.json({ message: "Invalid URL", status: "Failed" }).status(400);
      return;
    }
    const response = await axios.get(
      `${req.body.BASE_URL}&key=${PIXABAY_API_KEY}`
    );
    res.send(response.data);
  } catch (e) {
    console.log(e);
  }
};
