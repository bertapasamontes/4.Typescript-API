"use strict";
//chistes de más de una api
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//variables
const btnSiguiente = document.getElementById("btn-siguiente-chiste");
const placeholderChiste = document.querySelector("#chiste-contanier");
let chiste = document.getElementById("chiste");
let valoracion = document.querySelector("#valoracion");
const contenedorGeneral = document.getElementById("contenedor-general");
let reportAcudits = [{
        joke: "...",
        score: 1,
        date: ""
    }
];
console.log(reportAcudits);
let puntuacion = 0;
const coloresPastel = ["#FFADAD", "#FFD6A5", "#FDFFB6", "#A0C4FF", "#BDB2FF", "#FFC6FF", "#FFFFFC", "#CAFFBF", "#D7E3FC", "#E8A598", "#FCD2AF"];
//si cambia la valoración:
valoracion.addEventListener("change", (event) => {
    const boton = event.target;
    puntuacion = parseInt(boton.value || "0", 10);
    if (puntuacion != 0) {
        const chisteExistente = reportAcudits.find(item => item.joke === chiste.textContent);
        if (chisteExistente) {
            reportAcudits.pop();
            reportAcudits.push({
                joke: chiste.textContent || "",
                score: puntuacion,
                date: new Date().toISOString(),
            });
        }
        else {
            reportAcudits.push({
                joke: chiste.textContent || "",
                score: puntuacion,
                date: new Date().toISOString(),
            });
        }
    }
    ;
    console.log("chiste valorado: ", reportAcudits);
});
llamandoApisRandom(); //primer chiste
function llamandoApisRandom() {
    return __awaiter(this, void 0, void 0, function* () {
        const apis = [
            {
                url: "https://icanhazdadjoke.com/",
                type: "joke"
            },
            {
                url: "https://api.chucknorris.io/jokes/random",
                type: "value"
            }
        ];
        //elegimos una api del array apis
        const randomApi = apis[Math.floor(Math.random() * apis.length)];
        console.log("random api elegida: ", randomApi);
        //varaibles para la web
        const chisteNuevo = document.createElement("p");
        chisteNuevo.setAttribute("id", "chiste");
        //llamamos apis
        fetch(randomApi.url, {
            headers: { "Accept": "application/json" }
        })
            .then(res => res.json())
            .then(respuesta => {
            chisteNuevo.textContent = respuesta[randomApi.type];
            console.log("chiste: ", respuesta[randomApi.type]);
            if (placeholderChiste != null) {
                if (chiste && placeholderChiste.contains(chiste)) {
                    placeholderChiste.replaceChild(chisteNuevo, chiste); //reemplaza chiste viejo por nuevo
                    chiste = chisteNuevo; //asignamos el chiste nuevo al viejo para poder reemplazarlo al siguiente
                }
                else {
                    placeholderChiste.appendChild(chisteNuevo); //si no hay chiste, añadelo
                }
            }
        });
        const randomColor = Math.floor(Math.random() * coloresPastel.length);
        console.log("random color: ", randomColor);
        contenedorGeneral.style.backgroundColor = coloresPastel[randomColor];
    });
}
let llamamientoDeApi = new Promise((resolve, reject) => {
    if (btnSiguiente) {
        btnSiguiente.addEventListener("click", () => {
            llamandoApisRandom();
            if (chiste.textContent) {
                //añadimos joke a reportAcudits
                const chisteExistente = reportAcudits.find(item => item.joke === chiste.textContent && item.score !== 0);
                if (!chisteExistente) {
                    reportAcudits.push({
                        joke: chiste.textContent || "",
                        score: 0, // Última puntuación seleccionada
                        date: new Date().toISOString(),
                    });
                    console.log("chiste nuevo en el array");
                }
                puntuacion = 0;
            }
            console.log("siguiente chiste", reportAcudits);
        });
        resolve();
    }
    else {
        reject("Error");
    }
});
llamamientoDeApi
    .then(respuesta => { console.log(respuesta); })
    .catch(err => console.error(err));
