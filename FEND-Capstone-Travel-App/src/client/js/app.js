const getGeonameData = async (destination) => {
  const requestBody = {
    BASE_URL: `http://api.geonames.org/searchJSON?formatted=true&q=${destination}`,
  };

  const geonameResponse = await fetch("/geo-name-locations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  });

  const geonameData = await geonameResponse.json();
  return geonameData;
};
const getPixabayImages = async (
  photoType,
  category,
  isSafeSearch,
  orderBy,
  imageFormat,
  destination
) => {
  // Replace any spaces in the destination string, with the + symbol
  const pixabayDestination = destination.split(" ").join("+");

  // https://pixabay.com/api/docs/
  const pixabayRequestBody = {
    BASE_URL: `https://pixabay.com/api/?q=${pixabayDestination}&image_type=${photoType}&category=${category}&safesearch=${isSafeSearch}&order=${orderBy}&orientation=${imageFormat}`,
  };

  const pixabayResponse = await fetch("/pixabay-images", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pixabayRequestBody),
  });

  const pixabayData = await pixabayResponse.json();
  return pixabayData;
};

const getWeatherBitData = async (lat, lon) => {
  const weatherPostRequestBody = {
    BASE_URL: `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}`,
  };
  const weatherResponse = await fetch("/weather-bit-forecast", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(weatherPostRequestBody),
  });

  const weatherData = await weatherResponse.json();
  return weatherData;
};

const handleSubmit = async (e) => {
  e.preventDefault();
  const destinationName = document.getElementById("destinationName");

  const departureDate = document.getElementById("departureDate");

  try {
    const geonameData = await getGeonameData(destinationName.value);
    if (geonameData.geonames.length === 0) return;

    const weatherData = await getWeatherBitData(
      geonameData.geonames[0].lat,
      geonameData.geonames[0].lng
    );

    const pixabayData = await getPixabayImages(
      "photo",
      "travel",
      true,
      "popular",
      "horizontal",
      destinationName.value
    );

    document.getElementById(
      "travel-card"
    ).innerHTML = `  <div class="card" style="margin-top:12px">
    <div class="card-header">
        <h5 class="card-title">${geonameData.geonames[0].name + ", "}  ${
      geonameData.geonames[0].countryName
    }</h5>

    </div>
    <div class="card-body" >
        <div class="card-content-image">
                <div class="image-container"><img src=${
                  pixabayData.hits[0].webformatURL
                } width="128px" height="128px" /> </div>
                <div class="card-body">
                    
                        <div class="card-content">
                            <p style="font-weight: bold; padding-right: 9px">Departing:</p>
                            <p class="card-text" > ${departureDate.value}</p>
                        </div>
                        <div class="card-content">

                            <p class="card-text" style="font-weight:bold; padding-right: 9px">Typical weather for then is (Celcius):</p>
                            <p class="card-text">High: ${
                              weatherData[0].app_max_temp
                            }, Low: ${weatherData[0].app_min_temp}</p>
                        </div>
                        <div class="card-content">

                            <p class="card-text" style="font-weight:bold; padding-right: 9px">Description: </p>
                            
                        <p class="card-text" >${
                          weatherData[0].weather.description
                        }</p>
                        </div>
                </div>
        </div>

    </div>
  </div>`;
  } catch (e) {
    console.log(e);
  }
};

export { getGeonameData, getWeatherBitData, getPixabayImages, handleSubmit };
