const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "7776ed390bef6c47c8fa46d0a50193fe";

weatherForm.addEventListener("submit", async event => {
    event.preventDefault();

    const city = cityInput.value;

    if(city){
        try{
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);

        }
        catch (error){
            console.error(error);
            displayError(error);
        }

    }
    else {
        displayError("Please enter a city");
    }
});

async function getWeatherData(city){

        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
        const response = await fetch(apiUrl);

        if(!response.ok){
            throw new Error("Could not fetch weather data");
        }

        return await response.json();
}
function displayWeatherInfo(data){

    const {name: city, 
        main: {temp, humidity}, 
        weather: [{description, id}],
        sys: {country}} = data;
        console.log(data)

    card.textContent = "";
    card.style.display = "flex";

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");

    cityDisplay.textContent = `${city}, ${country}`;
    tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    descDisplay.textContent = description;
    weatherEmoji.textContent = getWeatherEmoji(id);


    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    weatherEmoji.classList.add("weatherEmoji");

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(weatherEmoji);
}

function getWeatherEmoji(weatherId){
    switch(true){
        case (weatherId >= 200 && weatherId < 300):
            return "THUNDERSTORM";
        case (weatherId >= 300 && weatherId < 400):
            return "TYPHOON";
        case (weatherId >= 500 && weatherId < 600):
            return "RAINY";
        case (weatherId >= 600 && weatherId < 700):
            return "SNOWY";
        case (weatherId >= 700 && weatherId < 800):
            return "FOGGY";
        case (weatherId === 800):
            return "SUNNY";
        case (weatherId >= 801 && weatherId <810 ):
            return "CLOUDY";
        default:
            return "RUN!";
    }
}

function displayError(message){
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}

function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}