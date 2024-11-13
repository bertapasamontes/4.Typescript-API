const placeholderChiste = document.querySelector(".chiste-contanier");
export function llamandoApi() {
    fetch("https://icanhazdadjoke.com/",{
        headers:{"Accept": "application/json"}
    })

        .then(res => res.json())
        .then(respuesta => console.log(respuesta));
    placeholderChiste.replaceChild();
    const chiste = document.createElement("p");
    chiste.textContent = "";
}