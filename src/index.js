import cipher from './cipher.js';

const form = document.querySelector("form");
const texto1 = document.getElementById('texto').value;
const offset1 = document.getElementById('offset').value;
const codificar = document.getElementById("codificar").addEventListener("click",respuestaImpresa);
var codificado = document.getElementById("codificado");
let cip = cipher.encode(texto1,offset1);
console.log(cip);
//const codificado = document.getElementById("codificado");
//const palabra = texto.length;
//let result, ascii;
function respuestaImpresa(){
    codificado.innerHTML="En un lenguaje secreto "+texto1+"significa:"+cip;
}
