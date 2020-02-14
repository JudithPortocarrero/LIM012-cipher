const cipher = {
}
  
  cipher.encode = function (texto, offset){
    let longitud = texto.length;
    let cifrado='', ascii, resultado;
    for(let i=0 ; i<longitud ; i++){
      let ascii = texto.charCodeAt(i);
      if(ascii>=65 && ascii<=90){
        resultado = (ascii-65+offset)%26+65;
        cifrado += String.fromCharCode(resultado);
        console.log(cifrado);
      }
      else if(ascii>=97 && ascii<=122){
        resultado = (ascii-97+offset)%26+97;
        cifrado += String.fromCharCode(resultado);
        console.log(cifrado);
      }
      else if(ascii===32){
        console.log(" ");
      }
    }
    return cifrado;
  };

  cipher.decode = function (texto, offset){
    let longitud = texto.length;
    let decifrado, ascii2, resultado2;
    for(let j=0; j<longitud; j++){
      let ascii2 = texto.charCodeAt(j);
      if(ascii2>=65 && ascii2<=90){
        let resultado2 = (ascii2-90-offset)%26+90;
        decifrado = String.fromCharCode(resultado2);
        console.log(decifrado);
      }
      else if(ascii2>=97 && ascii2<=122){
        let resultado2 = (ascii2-122-offset)%26+122;
        decifrado = String.fromCharCode(resultado2);
        console.log(decifrado);
      }
      else if(ascii2===32){
        console.log(" ");
      }
    }
};
export default cipher;