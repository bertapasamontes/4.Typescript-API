"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("./api");
const btnSiguiente = document.querySelector("#btn-siguiente-chiste");
const placeholderChiste = document.querySelector(".chiste-contanier");
btnSiguiente.addEventListener("click", api_1.llamandoApi);
