const API_KEY = "&APPID=e23122c5062eb361eb2aa6ee3762e1db&units=imperial";
const baseURL = "https://api.openweathermap.org/data/2.5/weather?q=";


const convertDate = (timestamp) => {
	const date = new Date(timestamp * 1000);
	const convertedTime = date.toString().slice(4,15);

	return convertedTime;
}


const displayData = () => {
	const zip = document.getElementById("zip").value;
	const feelings = document.getElementById("feelings").value;

	getWeatherData(baseURL, zip, API_KEY)
		.then( (data) => {
			postWeatherData("/addWeatherData", {
				temperature: data.main.temp,
				date: convertDate(data.dt),
				userResponse: feelings,
			});
		})
		.then(() => retrieveData());
}

const getWeatherData = async (baseURL, zip, API_KEY) => {
	if (zip.toString().length !== 5) {
		alert("Must enter a zip length of 5");
		return;
	}

	const url = `${baseURL}${zip}${API_KEY}`;

	const request = await fetch(url);
	try {
		const allData = await request.json();
		if (allData.message) {
			alert(allData.message);
		} else {
			return allData;
		}
	} catch (error) {
		console.log("error", error);
	}

};

const postWeatherData = async (url = "", data = {}) => {
	const response = await fetch(url, {
		method: "POST",
		credentials: "same-origin",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});

	try {
		const newData = await response.json();
	} catch (error) {
		console.log("error", error);
	}
};

const retrieveData = async () => {
	const request = await fetch("/all");
	try {
		const allData = await request.json();
		document.getElementById("date").innerHTML = `Date: ${allData.date}`;
		document.getElementById("temp").innerHTML = `Temperature(°C): ${allData.temperature}`;
		document.getElementById("content").innerHTML = `Feelings: ${allData.userResponse}`;
	} catch (error) {
		console.log("error", error);
	}
};


document.getElementById("generate").addEventListener("click", displayData);