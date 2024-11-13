import { llamandoApi } from "./api";
const btnSiguiente = document.querySelector("#btn-siguiente-chiste");
const placeholderChiste = document.querySelector(".chiste-contanier");

btnSiguiente.addEventListener("click", llamandoApi);
