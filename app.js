const primeraPantalla = document.querySelector("#primera-pantalla");
const segundaPantalla = document.querySelector("#segunda-pantalla");
const btnEncriptar = document.querySelector("#btn-encriptar");
const btnDesencriptar = document.querySelector("#btn-desencriptar");
const btnCopiar = document.querySelector("#btn-copiar");
const textoIngresado = document.querySelector("#texto-ingresado");
const textoProcesado = document.querySelector("#texto-procesado");
textoIngresado.focus();
pantallaBase();

btnEncriptar.addEventListener("click", mostrarSegundaPantalla);
btnDesencriptar.addEventListener("click", mostrarSegundaPantalla);

function pantallaBase() {
  segundaPantalla.classList.add("oculto");
}

function mostrarSegundaPantalla() {
  if (textoIngresado.value.trim() !== "") {
    primeraPantalla.classList.add("oculto");
    segundaPantalla.classList.remove("oculto");
  }
}

function validarTexto(texto) {
  return /^[a-z\s]+$/.test(texto);
}

function encriptar(texto) {
  texto = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
  return texto;
}

function desencriptar(texto) {
  texto = texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  return texto;
}

function procesarTexto(a) {
  const texto = textoIngresado.value.trim();
  if (validarTexto(texto)) {
    textoProcesado.value = a(texto);
  } else {
    alert(
      "El texto ingresado debe contener solo letras minúsculas sin caracteres especiales."
    );
  }
}

function copiarTexto() {
  navigator.clipboard.writeText(textoProcesado.value);
  alert("Texto copiado al portapapeles");
  textoProcesado.value = "";
}

btnEncriptar.addEventListener("click", () => {
  procesarTexto(encriptar);
});

btnDesencriptar.addEventListener("click", () => {
  procesarTexto(desencriptar);
});

btnCopiar.addEventListener("click", copiarTexto);
