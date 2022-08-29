const dotenv = require("dotenv");
const axios = require("axios");
dotenv.config();
const GEONAMES_USERNAME = process.env.GEONAMES_USERNAME;
const WEATHERBIT_API_KEY = process.env.WEATHERBIT_API_KEY;
const PIXABAY_API_KEY = process.env.PIXABAY_API_KEY;

exports.homePage = (req, res) => {
  res.json({ message: "Welcome to Travel App", status: "Success" });
};

exports.getGeoNameLocations = async (req, res) => {
  try {
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
    const response = await axios.get(
      `${req.body.BASE_URL}&key=${PIXABAY_API_KEY}`
    );
    res.send(response.data);
  } catch (e) {
    console.log(e);
  }
};
