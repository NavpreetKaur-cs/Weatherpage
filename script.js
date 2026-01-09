function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "ef853791df6e2c18b8505f3fbe14fbb4";

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            if (data.cod !== 200) {
                document.getElementById("weatherResult").innerHTML =
                    `<p>Error: ${data.message}</p>`;
                return;
            }

            displayWeather(data);
        })
        .catch(error => {
            console.log("Error:", error);
        });
}

function displayWeather(data) {
    document.getElementById("weatherResult").innerHTML = `
        <div class="weather-card">
            <h2>${data.name}</h2>
            <p>🌡️ Temperature: ${data.main.temp} °C</p>
            <p>🌤️ Weather: ${data.weather[0].description}</p>
            <p>💧 Humidity: ${data.main.humidity}%</p>
            <p>🌬️ Wind Speed: ${data.wind.speed} m/s</p>
        </div>
    `;
}

