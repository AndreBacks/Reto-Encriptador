function encriptar() {
    let texto = document.getElementById("texto").value;
    let mensajetitle = document.getElementById("mensaje-title");
    let parrafo = document.getElementById("parrafo");
    let icono = document.getElementById("icono");
  
    let textoCifrado = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  
    if (texto.length != 0) {
      document.getElementById("texto").value = textoCifrado;
      mensajetitle.textContent = "Texto encriptado con éxito";
      parrafo.textContent = "";
      icono.src = "./imag/ejecutando.gif";
    } else {
      icono.src = "./imag/icono.png";
      mensajetitle.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      swal(" ALERTA Ups!", "Debes ingresar un texto", "error");
    }
  }
  
  function desencriptar() {
    let texto = document.getElementById("texto").value;
    let mensajetitle = document.getElementById("mensaje-title");
    let parrafo = document.getElementById("parrafo");
    let icono = document.getElementById("icono");
  
    let textoCifrado = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
    
      if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        mensajetitle.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        icono.src = "./imag/happy.gif";
      } else {
        icono.src = "./imag/icono.png";
        mensajetitle.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal(" ALERTA Ups!", "Debes ingresar un texto", "error");
      }
  }