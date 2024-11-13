"use strict";
const btnSiguiente = document.getElementById("btn-siguiente-chiste");
const placeholderChiste = document.querySelector(".chiste-contanier");
function llamandoApi() {
    const chiste = document.querySelector("#chiste");
    const chisteNuevo = document.createElement("p");
    chisteNuevo.setAttribute("id", "chiste");
    fetch("https://icanhazdadjoke.com/", {
        headers: { "Accept": "application/json" }
    })
        .then(res => res.json())
        .then(respuesta => {
        chisteNuevo.textContent = respuesta.joke;
        if (placeholderChiste != null && chiste != null) {
            // placeholderChiste.replaceChild(chiste,chiste);
            placeholderChiste.replaceChild(chisteNuevo, chiste);
        }
    });
}
if (btnSiguiente != null) {
    btnSiguiente.addEventListener("click", llamandoApi);
}
