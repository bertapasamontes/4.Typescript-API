const btnSiguiente = document.getElementById("btn-siguiente-chiste") as HTMLDivElement | null;
const placeholderChiste = document.querySelector("#chiste-contanier");
let chiste = document.getElementById("chiste");

function llamandoApi() {
    const chisteNuevo = document.createElement("p");
    chisteNuevo.setAttribute("id","chiste");

    //llamando api
    fetch("https://icanhazdadjoke.com/",{
        headers:{"Accept": "application/json"}
    })
        .then(res => res.json())
        .then(chisteChistoso => {console.log(chisteChistoso.joke); return chisteChistoso}) //imprime el chiste por consola y daselo al siguiente then
        .then(respuesta => {
            chisteNuevo.textContent = respuesta.joke;
            if (placeholderChiste != null) {
                if (chiste && placeholderChiste.contains(chiste)) {
                    placeholderChiste.replaceChild(chisteNuevo, chiste); //reemplaza
                    chiste = chisteNuevo; //asignamos el chiste nuevo al viejo para poder reemplazarlo a al siguiente ronda
                } else {
                    placeholderChiste.appendChild(chisteNuevo);//si no hay chiste, añadelo
                }
            }
            
        })
        
}

let llamamientoDeApi = new Promise<void>((resolve, reject) => {
    if (btnSiguiente) {
        btnSiguiente.addEventListener("click", llamandoApi);
        resolve();
    }
    else{reject("Error");}
    
})

llamamientoDeApi
    .then(respuesta => {console.log(respuesta)})
    .catch(err => console.error(err));

