function getWeather() {
    const city = document.getElementById("cityInput").value.trim();
    const apiKey = "ef853791df6e2c18b8505f3fbe14fbb4";
    const resultBox = document.getElementById("weatherResult");

    if (city === "") {
        resultBox.innerHTML = `❌ Please enter a city name`;
        resultBox.style.display = "block";
        resultBox.scrollIntoView({ behavior: "smooth" });
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found");
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
            resultBox.style.display = "block";
            resultBox.scrollIntoView({ behavior: "smooth" });
        })
        .catch(error => {
            resultBox.innerHTML = `❌ ${error.message}`;
            resultBox.style.display = "block";
            resultBox.scrollIntoView({ behavior: "smooth" });
        });
}

function displayWeather(data) {
    const resultBox = document.getElementById("weatherResult");

    resultBox.innerHTML = `<div class="weather-card">
            <h2>${data.name}</h2>
            <p>🌡️ Temperature: ${data.main.temp} °C</p>
            <p>🌤️ Weather: ${data.weather[0].description}</p>
            <p>💧 Humidity: ${data.main.humidity}%</p>
            <p>🌬️ Wind Speed: ${data.wind.speed} m/s</p>
        </div>`;
    resultBox.style.display = "block";
}
