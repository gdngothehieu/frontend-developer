const aylien = require("aylien_textapi");
require("dotenv").config();

const postHandler = (req, res, next) => {
  const textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY,
  });
  textapi.sentiment(
    {
      url: req.body.text,
    },
    (error, response) => {
      if (error) {
        console.log(error);
        return;
      }
      res.send(response);
    }
  );
};
const validateRequest = (req, res, next) => {
  if (!req.body.text) {
    res.status(400).json({
      message: "Invalid input",
      status: 400,
    });
    return;
  }
  return next();
};

exports.validateRequest = validateRequest;
exports.postHandler = postHandler;
