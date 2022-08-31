var botonEncriptar = document.querySelector("#btnEncriptar");
var botonDesencriptar = document.querySelector("#btnDesencriptar");
var botonCopiar = document.querySelector("#btnCopiar");
var botonLimpiar = document.querySelector("#btnlimpiar");
var textAreaCifrado = document.querySelector("#txtcifrado");
var textAreaResultado = document.querySelector("#txtresultado");


botonEncriptar.onclick = encriptarTexto;
botonDesencriptar.onclick = desencriptarTexto;
botonCopiar.onclick = copiarTexto;
botonLimpiar.onclick = limpiarArea;



var textoEncriptado = ""

botonCopiar.addEventListener("click", function() {
    copiarTexto();
});

function encriptarTexto(){
   var textArea = document.getElementById("txtresultado").value;

   if(textoEncriptado != textArea || textoEncriptado == ""){
       if(textArea.trim() != ""){
           traspasarTexto(agregarEncriptado(textArea));
           textoEncriptado = agregarEncriptado(textArea)
          swal("Encriptado!", " Su mensaje fue encriptado :D", "success");
           }else{
               swal("Error :X","Debes ingresar el mensaje a encriptar.","error");
               txtcifrado.focus()
           }
   }else{
       swal("Un momento!","Este mensaje ya fue encriptado", "warning");
   }
}

function desencriptarTexto(){
   var textArea = document.getElementById("txtresultado").value;

   if(textArea.trim() != ""){
       traspasarTexto(quitarEncriptado(textArea));
     swal("Desencriptado!", "Mensaje desencriptado :D", "success");
       }else{
           swal(":C!", "Ingresa el mensaje a desencriptar.", "warning");
           txtcifrado.focus()
       }
}

function agregarEncriptado(texto){
   var textos = "";

   for(var i = 0; i < texto.length; i++){
      if(texto[i] == "a"){
         textos += "ai";
      }
      else if(texto[i] == "e"){
         textos += "enter";
      }
      else if(texto[i] == "i"){
         textos += "imes";
      }
      else if(texto[i] == "o"){
         textos += "ober";
      }
      else if(texto[i] == "u"){
         textos += "ufat";
      }
      else{
         textos += texto[i];
      }
   }

   return textos.toLowerCase();
}

function quitarEncriptado(texto){
   var textos = "";

   for(var i = 0; i < texto.length; i++){
      if(texto[i] == "a"){
         textos += "a";
         i = i+1;
      }
      else if(texto[i] == "e"){
         textos += "e";
         i += 4;
      }
      else if(texto[i] == "i"){
         textos += "i";
         i+= 3;
      }
      else if(texto[i] == "o"){
         textos += "o";
         i+=3;
      }
      else if(texto[i] == "u"){
         textos += "u";
         i+=3;
      }
      else{
         textos += texto[i];
      }
   }

   return textos.toLowerCase();
}
/*
function rotarAside(){
    var contenedor = document.querySelector(".munieco-contenedor");
    contenedor.style.transform="rotateY(180deg)"
 }

 function volverAside(){
    var contenedor = document.querySelector(".munieco-contenedor");
    contenedor.style.transform="rotateY(0deg)"
    copiar.value = "Copiar";
 }
*/
 function traspasarTexto(texto){
   /*var copiarTexto = document.querySelector("txtcifrado")
    copiarTexto.innerHTML = texto;
    textArea.value = copiarTexto.innerHTML;*/
    var copiarTexto1 = document.querySelector("#txtresultado");
    copiarTexto1.value = texto;
 }

 function copiarTexto(){
    /*var copiarTexto = document.getElementById("txtresultado");
    
    copiarTexto.select();
    copiarTexto.setSelectionRange(0,99999);
    navigator.clipboard.writeText(copiarTexto.value);
    swal("Mensaje copiado!", " Su mensaje fue copiado :D", "success");
   // textArea.value = copiarTexto.innerHTML;*/

   var copiarTexto= document.querySelector("#txtresultado");
    var textArea = document.getElementById("txtcifrado");
    textArea.value = copiarTexto.innerHTML;
    navigator.clipboard.writeText(copiarTexto.value);
    swal("Mensaje copiado!", "Mensaje copiado al portapapeles :D", "success");
}


 function limpiarArea(){
    document.getElementById("txtcifrado").value = "";
    document.getElementById("txtresultado").value = "";
 }











 


//eventos botones
/*
botonEncriptar.addEventListener("click", function() {
 
    var input = textAreaCifrado.value;
    
    var error = !esTextoValido(input);
    var vacio = esVacio(input);
    
    if(vacio){
        textoVacioMensaje();
        return;
    }
    
    if(error){
        errorMensaje();
        return;
    }
    
    var errorReset = document.querySelector("#error");
    errorReset.innerHTML = "";
    
    textAreaResultado.value = encriptar(input);
    textAreaCifrado.value = "";
    
});

botonDesencriptar.addEventListener("click", function() {
    var input = textAreaCifrado.value;
    
    var error = !esTextoValido(input);
    var vacio = esVacio(input);
    
    if(vacio){
        textoVacioMensaje();
        return;
    }
    
    if(error){
        errorMensaje();
        return;
    }
    
    var errorReset = document.querySelector("#error");
    errorReset.innerHTML = "";

    textAreaResultado.value = desencriptar(input);
    textAreaCifrado.value = "";
});

botonCopiar.addEventListener("click", function() {
    copiarTexto();
});

botonLimpiar.addEventListener("click", function() {
    textAreaResultado.value = "";
});



///////////////////////////////////////


function encriptar(texto){
    var textoEncriptado = "";
    
    textoEncriptado = texto.replace(/e/g, "enter");
    textoEncriptado = textoEncriptado.replace(/i/g, "imes");
    textoEncriptado = textoEncriptado.replace(/a/g, "ai");
    textoEncriptado = textoEncriptado.replace(/o/g, "ober");
    textoEncriptado = textoEncriptado.replace(/u/g, "ufat");
    
    return textoEncriptado;
}

function desencriptar(texto){
    var textoDesencriptado = "";
    
    textoDesencriptado = texto.replace(/enter/g, "e");
    textoDesencriptado = textoDesencriptado.replace(/imes/g, "i");
    textoDesencriptado = textoDesencriptado.replace(/ai/g, "a");
    textoDesencriptado = textoDesencriptado.replace(/ober/g, "o");
    textoDesencriptado = textoDesencriptado.replace(/ufat/g, "u");

    return textoDesencriptado;
}

function copiarTexto(){
    var copiarTexto = document.getElementById("txtresultado");
    
    copiarTexto.select();
    copiarTexto.setSelectionRange(0,99999);
    navigator.clipboard.writeText(copiarTexto.value);
}

function esTextoValido(texto){
    var valido = /^[a-z\s]+$/;
    return valido.test(texto);
}

function esVacio(texto){
    return texto.length == 0;
}

function errorMensaje(){
    var error = document.querySelector("#error");
    error.textContent = "Error. Ha ingresado un carácter inválido.";
}

function textoVacioMensaje(){
    var mensaje = document.querySelector("#error");
    mensaje.textContent = "No ha ingresado ningún texto.";
}

*/