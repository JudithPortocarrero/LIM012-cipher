const cipher = {
  
  encode(texto, offset){
    const palabra = texto.length;
    let resultado, ascii;
    for (let i = 0; i < palabra; i++) {
      //converti las letras a numeros ascii
      ascii = texto.charCodeAt(i);
      if(65<=ascii && ascii<=90){
        console.log(result += String.fromCharCode((ascii-65+offset)%26+65));
      }
      else if(97<=ascii && ascii<=122){
        console.log(result += String.fromCharCode((ascii-65+offset)%26+65));
      }
      else{
        alert('solo escribir letras');
      } 
       
    }
   
    
  },

  decode(texto, offset){
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
    return result;
  }
};

export default cipher;