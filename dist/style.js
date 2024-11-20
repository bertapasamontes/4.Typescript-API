"use strict";
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btns = [btn1, btn2, btn3];
btns.forEach((boton) => {
    boton.addEventListener("mouseover", () => {
        boton.textContent = "";
    });
    boton.addEventListener("mouseout", () => {
        btn1.textContent = "🤨";
        btn2.textContent = "🙂";
        btn3.textContent = "😆";
    });
});
