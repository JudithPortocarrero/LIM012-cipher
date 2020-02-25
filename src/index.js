import cipher from './cipher.js';
document.getElementById("todo2").classList.add("ocultar");
document.getElementById("todo1").classList.add("ocultar");
document.getElementById("inicioB").classList.add("ocultar");

document.getElementById("indexco").addEventListener("click", () => {
  document.getElementById("decision").classList.add("ocultar");
  document.getElementById("todo2").classList.add("ocultar");
  document.getElementById("todo1").classList.remove("ocultar");
  document.getElementById("inicioB").classList.remove("ocultar");
});

document.getElementById("indexde").addEventListener("click",() =>{
  document.getElementById("todo1").classList.add("ocultar");
  document.getElementById("decision").classList.add("ocultar");
  document.getElementById("todo2").classList.remove("ocultar");
  document.getElementById("inicioB").classList.remove("ocultar");  
});

document.getElementById("codificar").addEventListener("click",() =>{
    const todo = cipher.encode(document.getElementById("offset").value,document.getElementById("texto").value);
  document.getElementById("codificado").value = todo;
});

document.getElementById("inicio").addEventListener("click",() =>{
  document.getElementById("todo1").classList.add("ocultar");
  document.getElementById("todo2").classList.add("ocultar");
  document.getElementById("decision").classList.remove("ocultar");
  document.getElementById("inicioB").classList.add("ocultar");
  codificado.innerHTML="";
  codificado1.innerHTML="";
  document.getElementById("texto").value="";
  document.getElementById("offset").value=""; 
});

document.getElementById("decodificar").addEventListener("click",() =>{
  const todo = cipher.decode(document.getElementById("offset1").value,document.getElementById("texto1").value);
  document.getElementById("codificado1").value = todo;
});
