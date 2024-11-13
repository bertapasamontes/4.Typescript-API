const placeholderChiste = document.getElementById("chiste-contanier");
export function llamandoApi() {
    const chiste = document.createElement("p");
    fetch("https://icanhazdadjoke.com/", {
        headers: { "Accept": "application/json" }
    })
        .then(res => res.json())
        .then(respuesta => chiste.textContent = respuesta);
    if (placeholderChiste != null) {
        // placeholderChiste.replaceChild(chiste,chiste);
        placeholderChiste.appendChild(chiste);
    }
}
