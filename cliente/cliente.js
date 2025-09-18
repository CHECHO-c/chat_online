

let socket = io();
const btnEnviar = document.querySelector("#btnEnviar");
const texto = document.querySelector("#texto");

btnEnviar.addEventListener('click', ()=>{
    if(texto.value){
        socket.emit('chat',texto.value);
        texto.value = '';
    }
}) 


socket.on('chat',(msg)=>{
    const main = document.querySelector("main");
    let div1 = document.createElement("div");
    let div2 = document.createElement("div2")
    let mensaje = document.createElement("p");
    //Clases

    div1.classList.add("flex","items-start");
    div2.classList.add("bg-gray-200", "text-gray-900", "px-4","py-2", "roundend-2x1", "max-u-xs");

    //Texto 
    mensaje.innerText = msg;
    main.appendChild(div1);
    div1.appendChild(div2);
    div2.appendChild(mensaje);

})