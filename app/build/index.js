import { llamandoApi } from "./api";
const btnSiguiente = document.getElementById("btn-siguiente-chiste");
const placeholderChiste = document.querySelector(".chiste-contanier");
if (btnSiguiente != null) {
    btnSiguiente.addEventListener("click", llamandoApi);
}
