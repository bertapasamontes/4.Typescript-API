import { llamandoApi } from "./api";
const btnSiguiente = document.getElementById("btn-siguiente-chiste") as HTMLDivElement | null;
const placeholderChiste = document.querySelector(".chiste-contanier");
if(btnSiguiente != null){
    btnSiguiente.addEventListener("click", llamandoApi);
}

