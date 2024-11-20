const btn1 = document.getElementById("btn1") as HTMLOptionElement;
const btn2 = document.getElementById("btn2") as HTMLOptionElement;
const btn3 = document.getElementById("btn3") as HTMLOptionElement;

const btns = [btn1, btn2, btn3];

btns.forEach((boton)=>{
    boton.addEventListener("mouseover", ()=>{
        boton.textContent = "";
    })
    boton.addEventListener("mouseout", ()=>{
        btn1.textContent = "🤨";
        btn2.textContent = "🙂";
        btn3.textContent = "😆";
    })

})
