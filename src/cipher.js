const cipher = cipher || {};
const abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n',
  'o','p','q','r','s','t','u','v','w','x','y','z'];
const abecedario = abc.length;
const palabra = texto.length;
let result, ascii;
cipher.encode(texto, offset){
  for (let i = 0; i < palabra.length; i++) {
    //converti las letras a numeros ascii
    ascii = texto.charCodeAt(i);
    if(65<=ascii && ascii<=90){
      result += String.fromCharCode((ascii-65+offset)%26+65);
    }
    else if(97<=ascii && ascii<=122){
      result += String.fromCharCode((ascii-65+offset)%26+65);
    }
    else{
      alert('solo escribir letras');
    } 
  }
  codificado.innerHTML = result;
}
/*function decode(texto, decode) {
  for (let i = 0; i < palabra.length; i++) {
    //converti las letras a numeros ascii
    ascii = texto.charCodeAt(i);
    if(65<=ascii && ascii<=90){
      result += String.fromCharCode((ascii-offset)%26);
    }
    else if(97<=ascii && ascii<=122){
      result += String.fromCharCode((ascii-offset)%26);
    }
    else{
      alert('solo escribir letras');
    }
  }
  decodificado.innerHTML = result;
}*/
export default cipher;