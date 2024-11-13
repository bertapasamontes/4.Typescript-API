"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.llamandoApi = llamandoApi;
const placeholderChiste = document.querySelector(".chiste-contanier");
function llamandoApi() {
    fetch("https://icanhazdadjoke.com/", {
        headers: { "Accept": "application/json" }
    })
        .then(res => res.json())
        .then(respuesta => console.log(respuesta));
    placeholderChiste.replaceChild();
    const chiste = document.createElement("p");
    chiste.textContent = "";
}
