import cipher from './cipher.js';
document.getElementById("todo2").style.display="none";
document.getElementById("todo1").style.display="none";
document.getElementById("inicioB").style.display="none";
document.getElementById("indexco").addEventListener("click",indexcodi);
document.getElementById("indexde").addEventListener("click",indexdeco);
document.getElementById("codificar").addEventListener("click",respuestaImpresa);
document.getElementById("inicio").addEventListener("click",inicioI);
document.getElementById("decodificar").addEventListener("click",respuestaImpresa2);
let codificado = document.getElementById("codificado");
let codificado1 = document.getElementById("codificado1");
function respuestaImpresa(){
    let todo = cipher.encode(document.getElementById("offset").value,document.getElementById("texto").value);
    codificado.innerHTML="En un lenguaje secreto "+document.getElementById("texto").value+" significa:"+
    todo;
}
function respuestaImpresa2(){
    let todo = cipher.decode(document.getElementById("offset1").value,document.getElementById("texto1").value);
    codificado1.innerHTML="En un lenguaje secreto "+document.getElementById("texto1").value+" significa:"+
    todo;
}
//------------------------------------------------------------------------------------
function indexcodi() {
  document.getElementById("todo2").style.display="none";
  document.getElementById("decision").style.display="none";
  document.getElementById("todo1").style.display="block";
  document.getElementById("inicio").style.display="block";
}

function indexdeco() {
  document.getElementById("todo1").style.display="none";
  document.getElementById("decision").style.display="none";
  document.getElementById("todo2").style.display="block";
  document.getElementById("inicio").style.display="block";
}
function inicioI() {
    document.getElementById("todo1").style.display="none";
    document.getElementById("todo2").style.display="none";
    document.getElementById("decision").style.display="block";
    document.getElementById("inicio").style.display="none";
    codificado.innerHTML="";
    codificado1.innerHTML="";
    document.getElementById("texto").value="";
    document.getElementById("offset").value="";
}