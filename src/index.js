import cipher from './cipher.js';
document.getElementById("todo2").classList.add("ocultar");
document.getElementById("todo1").classList.add("ocultar");
document.getElementById("inicioB").classList.add("ocultar");
document.getElementById("indexco").addEventListener("click",indexcodi);
document.getElementById("indexde").addEventListener("click",indexdeco);
document.getElementById("codificar").addEventListener("click",respuestaImpresa);
document.getElementById("inicio").addEventListener("click",inicioI);
document.getElementById("decodificar").addEventListener("click",respuestaImpresa2);
let codificado = document.getElementById("codificado");
let codificado1 = document.getElementById("codificado1");
function respuestaImpresa(){
  let todo = cipher.encode(document.getElementById("offset").value,document.getElementById("texto").value);
  codificado.innerHTML="Cifrado: "+ todo;
}
function respuestaImpresa2(){
  let todo = cipher.decode(document.getElementById("offset1").value,document.getElementById("texto1").value);
  codificado1.innerHTML="Decifrado: "+ todo;
}
//------------------------------------------------------------------------------------
function indexcodi() {
  document.getElementById("decision").classList.add("ocultar");
  document.getElementById("todo2").classList.add("ocultar");
  document.getElementById("todo1").classList.remove("ocultar");
  document.getElementById("inicioB").classList.remove("ocultar");
}
function indexdeco() {
  document.getElementById("todo1").classList.add("ocultar");
  document.getElementById("decision").classList.add("ocultar");
  document.getElementById("todo2").classList.remove("ocultar");
  document.getElementById("inicioB").classList.remove("ocultar");
}
function inicioI() {
  document.getElementById("todo1").classList.add("ocultar");
  document.getElementById("todo2").classList.add("ocultar");
  document.getElementById("decision").classList.remove("ocultar");
  document.getElementById("inicioB").classList.add("ocultar");
  codificado.innerHTML="";
  codificado1.innerHTML="";
  document.getElementById("texto").value="";
  document.getElementById("offset").value="";
}