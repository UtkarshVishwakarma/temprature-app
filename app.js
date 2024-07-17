const temp = document.getElementById("temp");
const btn = document.getElementById("btn");
const tempC = document.getElementById("tempc");
const windSpeed = document.getElementById("wind");
const humidity = document.getElementById("humidity");
const precipitation = document.getElementById("precipitation");


let url;
let place;
let data;

btn.addEventListener("click", () => {
     place = String(temp.value);
     url = `https://api.weatherapi.com/v1/current.json?key=ac06e5aa5c244d8aa2545146241707&q=${place}`;
     if (place === "") {
        alert("Type Name of the Place...");
     } else {
        getWeatherData(url.toLowerCase());
        }
     }
);

const getWeatherData = async (url) => {
    console.log(url);
    let promise = await fetch(url);
    data = await promise.json();
    const current = await data['current'];

    tempC.innerText = `Temprature(C): ${current['temp_c']}`; 
    windSpeed.innerText = `Wind Speed(KPH): ${current['wind_kph']}`; 
    humidity.innerText = `Humidity: ${current['humidity']}`; 
    precipitation.innerText = `Precipitation(MM): ${current['precip_mm']}`; 


}