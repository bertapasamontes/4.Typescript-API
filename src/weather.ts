const temperatura = document.getElementById("temperatura") as HTMLParagraphElement;
const imgLuz = document.getElementById("imgLuz") as HTMLDivElement;
const imgTiempo = document.getElementById("imgTiempo") as HTMLDivElement;
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


interface weatherInterface{
    [key:number]:string;
}

const solOluna: weatherInterface = {
    0:"https://api.iconify.design/line-md:moon-filled-alt-to-sunny-filled-loop-transition.svg",
    1: "https://api.iconify.design/line-md:moon-filled-alt-loop.svg"
}

const weatherEstados: weatherInterface = {
    0: imgDia,//"Despejado",
    1: "https://api.iconify.design/twemoji:sun-behind-small-cloud.svg", //"Mayormente despejado"
    2: "https://api.iconify.design/twemoji:sun-behind-cloud.svg",//"Parcialmente nublado",
    3: "https://api.iconify.design/twemoji:sun-behind-large-cloud.svg",//"Nublado",
    45: "Neblina",
    48: "Neblina con escarcha",
    51: "Lluvia ligera",
    53: "Lluvia moderada",
    55: "Lluvia densa",
    56: "Llovizna helada ligera",
    57: "Llovizna helada densa",
    61: "Lluvia leve",
    63: "Lluvia moderada",
    65: "Lluvia intensa",
    66: "Lluvia helada ligera",
    67: "Lluvia helada intensa",
    71: "Nevadas ligeras",
    73: "Nevadas moderadas",
    75: "Nevadas intensas",
    77: "Granizo",
    80: "Lluvias ligeras dispersas",
    81: "Lluvias moderadas dispersas",
    82: "Lluvias fuertes dispersas",
    85: "Nevadas ligeras dispersas",
    86: "Nevadas fuertes dispersas",
    95: "Tormenta eléctrica",
    96: "Tormenta eléctrica con granizo leve",
    99: "Tormenta eléctrica con granizo fuerte",
    100: "???"
};

let fecha = new Date().toISOString().slice(0, 13); //dejamos la fecha con la hora pero sin los segundos ni minutos para que ocincida con el formato de la hora de la API
console.log("fecha:"+fecha);

console.log("current "+parametros.current[2]);


fetch(url)
    .then(result => result.json())
    .then((data) => {
        console.log("Datos del clima:", data);
        // array de temperatura horaria
        console.log("Temperaturas horarias:", data.hourly.temperature_2m);

        console.log("is day:", data.hourly.is_day);
        console.log("Weather code:", data.daily.weather_code);

        //hora actual
        const horaActual = data.hourly.time.find((tiempo: string) => tiempo.startsWith(fecha));
        console.log("tiempo actual: "+horaActual);

        //temperatura actual
        const temperaturaActual = data.hourly.temperature_2m[data.hourly.time.indexOf(horaActual)];

        temperatura.innerText = temperaturaActual+"ºC";

        //dia o noche
        const diaOnoche = data.hourly.is_day[data.hourly.time.indexOf(horaActual)];

        const luzImg = document.createElement("img");
       
        if(diaOnoche == 1){
            console.log("es de dia");
            imgTiempo.innerHTML = "";
            luzImg.src = solOluna[0]; 
            imgTiempo.appendChild(luzImg);
        }
        else{
            console.log("es de noche");
            imgTiempo.innerHTML = "";
            luzImg.src = solOluna[1]; 
            imgTiempo.appendChild(luzImg);
        }

        //tiempo actual
        const fechaCONdia = new Date().toISOString().slice(0, 10);
        //data.daily.time es un array por lo que usamos findIndex y no indexOf.
        const dailyIndex = data.daily.time.findIndex((tiempo:string) => tiempo ===fechaCONdia);

        console.log("daily time: "+data.daily.time);
        console.log("fecha con dia: "+fechaCONdia)
        console.log("dailyIndex:"+dailyIndex);


        const tiempoActual = data.daily.weather_code[dailyIndex] as number;

        const weatherIconLink = weatherEstados[tiempoActual] || weatherEstados[100];
        console.log("weahter icon link "+ weatherIconLink)

        const weatherImg = document.createElement("img");
        weatherImg.src = weatherIconLink;
        imgTiempo.appendChild(weatherImg);
      }
      
    )