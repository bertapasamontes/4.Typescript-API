"use strict";
const temperatura = document.getElementById("temperatura");
const imgLuz = document.getElementById("imgLuz");
const imgTiempo = document.getElementById("imgTiempo");
const imgDia = document.createElement("img").src = "https://api.iconify.design/twemoji:sun.svg";
const parametros = {
    "latitude": 41.3888,
    "longitude": 2.159,
    "current": ["temperature_2m", "apparent_temperature", "is_day", "precipitation", "rain", "showers", "snowfall", "weather_code", "cloud_cover", "pressure_msl", "surface_pressure", "wind_speed_10m", "wind_direction_10m", "wind_gusts_10m"],
    "hourly": "temperature_2m",
    "daily": "weather_code",
    "timezone": "auto"
};
const url = `https://api.open-meteo.com/v1/forecast?latitude=${parametros.latitude}&longitude=${parametros.longitude}&hourly=temperature_2m,is_day&daily=weather_code&timezone=auto`;
const solOluna = {
    0: "https://api.iconify.design/line-md:moon-filled-alt-to-sunny-filled-loop-transition.svg",
    1: "https://api.iconify.design/line-md:moon-filled-alt-loop.svg"
};
const weatherEstados = {
    0: imgDia, //"Despejado",
    1: "https://api.iconify.design/twemoji:sun-behind-small-cloud.svg", //"Mayormente despejado"
    2: "https://api.iconify.design/twemoji:sun-behind-cloud.svg", //"Parcialmente nublado",
    3: "https://api.iconify.design/twemoji:sun-behind-large-cloud.svg", //"Nublado",
    45: "https://api.iconify.design/solar:fog-line-duotone.svg", //"Neblina",
    48: "https://api.iconify.design/carbon:wintry-mix.svg", //"Neblina con escarcha",
    51: "https://api.iconify.design/typcn:weather-shower.svg", //"Lluvia ligera",
    53: "https://api.iconify.design/fluent:weather-rain-20-filled.svg", //"Lluvia moderada",
    55: "https://api.iconify.design/fluent:weather-drizzle-48-filled.svg", //"Lluvia densa",
    56: "https://api.iconify.design/fluent:weather-rain-snow-24-filled.svg", //"Llovizna helada ligera",
    57: "https://api.iconify.design/fluent:weather-rain-snow-48-filled.svg", //"Llovizna helada densa",
    61: "https://api.iconify.design/typcn:weather-shower.svg", //"Lluvia leve",
    63: "https://api.iconify.design/fluent:weather-rain-20-filled.svg", //"Lluvia moderada",
    65: "https://api.iconify.design/fluent:weather-drizzle-48-filled.svg", //"Lluvia intensa",
    66: "https://api.iconify.design/fluent:weather-rain-snow-48-filled.svg", //"Lluvia helada ligera",
    67: "https://api.iconify.design/fluent:weather-rain-snow-48-filled.svg", //"Lluvia helada intensa",
    71: "https://api.iconify.design/material-symbols-light:weather-snowy.svg", //"Nevadas ligeras",
    73: "https://api.iconify.design/material-symbols:weather-snowy.svg", // "Nevadas moderadas",
    75: "https://api.iconify.design/mdi:weather-snowy.svg", //"Nevadas intensas",
    77: "https://api.iconify.design/mdi:weather-snowy-heavy.svg", //"Granizo",
    80: "https://api.iconify.design/streamline:interface-weather-rain-1-cloud-rain-rainy-meteorology-precipitation-weather.svg", //"Lluvias ligeras dispersas",
    81: "https://api.iconify.design/streamline:interface-weather-rain-2-cloud-rain-rainy-meteorology-precipitation-weather.svg", //"Lluvias moderadas dispersas",
    82: "https://api.iconify.design/ion:rainy-sharp.svg", //"Lluvias fuertes dispersas",
    85: "https://api.iconify.design/mdi:weather-snowy.svg", //"Nevadas ligeras dispersas",
    86: "https://api.iconify.design/mdi:weather-snowy-heavy.svg", //"Nevadas fuertes dispersas",
    95: "https://api.iconify.design/uil:thunderstorm.svg", //"Tormenta eléctrica",
    96: "https://api.iconify.design/mingcute:thunderstorm-line.svg", //"Tormenta eléctrica con granizo leve",
    99: "https://api.iconify.design/carbon:thunderstorm-severe.svg", //"Tormenta eléctrica con granizo fuerte",
    100: "???"
};
let fecha = new Date().toISOString().slice(0, 13); //dejamos la fecha con la hora pero sin los segundos ni minutos para que ocincida con el formato de la hora de la API
fetch(url)
    .then(result => result.json())
    .then((data) => {
    //hora actual
    const horaActual = data.hourly.time.find((tiempo) => tiempo.startsWith(fecha));
    //temperatura actual
    const temperaturaActual = data.hourly.temperature_2m[data.hourly.time.indexOf(horaActual)];
    temperatura.innerText = temperaturaActual + "ºC";
    //dia o noche
    const diaOnoche = data.hourly.is_day[data.hourly.time.indexOf(horaActual)];
    const luzImg = document.createElement("img");
    if (diaOnoche == 1) {
        imgLuz.innerHTML = "";
        luzImg.src = solOluna[0];
        imgLuz.appendChild(luzImg);
    }
    else {
        imgLuz.innerHTML = "";
        luzImg.src = solOluna[1];
        imgLuz.appendChild(luzImg);
    }
    //tiempo actual
    const fechaCONdia = new Date().toISOString().slice(0, 10);
    //data.daily.time es un array por lo que usamos findIndex y no indexOf.
    const dailyIndex = data.daily.time.findIndex((tiempo) => tiempo === fechaCONdia);
    const tiempoActual = data.daily.weather_code[dailyIndex];
    const weatherIconLink = weatherEstados[tiempoActual] || weatherEstados[100];
    const weatherImg = document.createElement("img");
    weatherImg.src = weatherIconLink;
    imgTiempo.appendChild(weatherImg);
});
