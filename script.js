
const apiKey = "c19150297f192fd8955b75d277481f48";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searcBox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcn = document.querySelector(".weather-icon")

async function checkWeather(city){
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".Weather").style.display = "none";
    }else{
        let data = await response.json();
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML =   Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
        
        if (data.weather[0].main == "Clouds") {
            weatherIcn.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcn.src = "images/clear.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcn.src = "images/drizzle.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcn.src = "images/rain.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcn.src = "images/mist.png";
        }
        else if(data.weather[0].main == "Snow"){
            weatherIcn.src = "images/snow.png";
        }
        
        document.querySelector(".Weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }
}

searchbtn.addEventListener("click",()=>{
    checkWeather(searcBox.value);
})
    