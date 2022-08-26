
projectData = {};

const express = require("express");

const app = express();

const bodyParser = require("body-parser");



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require("cors");
app.use(cors());

app.use(express.static("website"));


const port = 8000;

const server = app.listen(port, listening);

function listening() {
	console.log("Server is up-");
	console.log(`Active on 127.0.0.1:${port}`);
}



const sendData = (req, res) => {
	res.send(projectData);
}

const addWeatherData =(req, res) => {
	projectData = req.body;
	res.send(projectData);
}

app.get("/all", sendData);

app.post("/addWeatherData", addWeatherData);

