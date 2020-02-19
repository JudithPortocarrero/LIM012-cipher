const cipher = {
}
  
  cipher.encode = function (offset, string){
    const offset1=parseInt(offset,10);
    let longitud = string.length;
    let cifrado='';
    for(let i=0 ; i<longitud ; i++){
      let ascii = string.charCodeAt(i);
      if(ascii>=65 && ascii<=90){
        cifrado += String.fromCharCode((ascii-65+offset1)%26+65);
      }
      else if(ascii>=97 && ascii<=122){
        cifrado += String.fromCharCode((ascii-97+offset1)%26+97);
      }
      else if(ascii===32){
        cifrado+=" ";
      }
    }
    return cifrado;
  };

  cipher.decode = function (offsets, strings){
    const offset1=parseInt(offsets,10);
    let longitud = strings.length;
    let decifrado='';
    for(let j=0; j<longitud; j++){
      let ascii2 = strings.charCodeAt(j);
      if(ascii2>=65 && ascii2<=90){
        decifrado += String.fromCharCode((ascii2-90-offset1)%26+90);
      }
      else if(ascii2>=97 && ascii2<=122){
        decifrado += String.fromCharCode((ascii2-122-offset1)%26+122);
      }
      else if(ascii2===32){
        decifrado += " ";
      }
      /*else{

      }*/
    }
    return decifrado;
  };
export default cipher;
      