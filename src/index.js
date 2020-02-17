import cipher from './cipher.js';

//let form = document.querySelector("form");
//let texto = document.getElementById("texto").value;
//let offset = document.getElementById("offset").value;
let codificar = document.getElementById("codificar").addEventListener("click",respuestaImpresa);
let decodificar = document.getElementById("decodificar").addEventListener("click",respuestaImpresa2);
let codificado = document.getElementById("codificado");
//let cip = cipher.encode(texto,offset);
//console.log(cip);
//const codificado = document.getElementById("codificado");
//const palabra = texto.length;
//let result, ascii;
function respuestaImpresa(){
    let todo = cipher.encode(document.getElementById("texto").value,document.getElementById("offset").value);
    codificado.innerHTML="En un lenguaje secreto "+document.getElementById("texto").value+" significa:"+
    todo;
}
function respuestaImpresa2(){
    let todo = cipher.decode(document.getElementById("texto").value,document.getElementById("offset").value);
    codificado.innerHTML="En un lenguaje secreto "+document.getElementById("texto").value+" significa:"+
    todo;
}
//------------------------------------------------------------------------------------
