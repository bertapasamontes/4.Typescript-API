// chistes de una sola api


// //variables
// const btnSiguiente = document.getElementById("btn-siguiente-chiste") as HTMLDivElement | null;
// const placeholderChiste = document.querySelector("#chiste-contanier") as HTMLDivElement;
// let chiste = document.getElementById("chiste") as HTMLParagraphElement;
// let valoracion = document.querySelector("#valoracion") as HTMLSelectElement ;

// let reportAcudits =[{
//         joke: "...",
//         score: 1, 
//         date: ""
//     }
// ];
// console.log(reportAcudits);

// let puntuacion:number = 0;

// //si cambia la valoración:
// valoracion.addEventListener("change", (event) => {
//     const boton = event.target as HTMLSelectElement;
//     puntuacion = parseInt(boton.value || "0", 10);

//     if(puntuacion != 0){
//         const chisteExistente = reportAcudits.find(item => item.joke === chiste.textContent);
//         if(chisteExistente){
//             reportAcudits.pop();
//             reportAcudits.push({
//                 joke: chiste.textContent || "",
//                 score: puntuacion,
//                 date: new Date().toISOString(),
//             });
//         }
//         else{reportAcudits.push({
//             joke: chiste.textContent || "",
//             score: puntuacion,
//             date: new Date().toISOString(),
//         });}
        
//     };
//     console.log("chiste valorado: ", reportAcudits);
// });


// llamandoApiJokes(); //primer chiste

// function llamandoApiJokes() {
//     const chisteNuevo = document.createElement("p");
//     chisteNuevo.setAttribute("id","chiste");

//     //llamando api
//     fetch("https://icanhazdadjoke.com/",{
//         headers:{"Accept": "application/json"}
//     })
//         .then(res => res.json())
//         .then(chisteChistoso => {console.log(chisteChistoso.joke); return chisteChistoso}) //imprime el chiste por consola y daselo al siguiente .then
//         .then(respuesta => {
//             chisteNuevo.textContent = respuesta.joke;
//             if (placeholderChiste != null) {
//                 if (chiste && placeholderChiste.contains(chiste)) {
//                     placeholderChiste.replaceChild(chisteNuevo, chiste); //reemplaza chiste viejo por nuevo
//                     chiste = chisteNuevo; //asignamos el chiste nuevo al viejo para poder reemplazarlo al siguiente
//                 } else {
//                     placeholderChiste.appendChild(chisteNuevo);//si no hay chiste, añadelo
//                 }
//             }
//         });        
// }

// let llamamientoDeApi = new Promise<void>((resolve, reject) => {
//     if (btnSiguiente) {
//         btnSiguiente.addEventListener("click", ()=>{
//             llamandoApiJokes();
//             if(chiste.textContent){
//                 //añadimos joke a reportAcudits
//                 const chisteExistente = reportAcudits.find(item => item.joke === chiste.textContent && item.score !== 0);
//                 if(!chisteExistente){
//                    reportAcudits.push({
//                         joke: chiste.textContent || "",
//                         score: 0, // Última puntuación seleccionada
//                         date: new Date().toISOString(),
//                     });  
//                     console.log("chiste nuevo en el array");  
//                 }
//                 puntuacion = 0;
                 
//             }
            
//             console.log("siguiente chiste", reportAcudits);
//         });
//         resolve();
//     }
//     else{reject("Error");}
    
// })

// llamamientoDeApi
//     .then(respuesta => {console.log(respuesta)})
//     .catch(err => console.error(err));