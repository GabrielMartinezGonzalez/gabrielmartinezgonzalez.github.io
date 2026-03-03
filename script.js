function saludarUsuario() {
    const nombre = document.getElementById("nombre").value;
    alert("¡Hola, " + nombre + "! Bienvenido a tu página.");
    return false;
}

function cambiarColor() {
    document.body.style.backgroundColor = "lightblue";
}

function cambiarTexto() {
    document.getElementById("mensaje").textContent = "El texto ha cambiado con JavaScript.";
}

function resaltarTexto() {
    const elemento = document.getElementById("mensaje");
    elemento.style.backgroundColor = "yellow";
    elemento.style.fontWeight = "bold";
    elemento.textContent = "¡Texto resaltado!";
}

function restaurarTexto() {
    const elemento = document.getElementById("mensaje");
    elemento.style.backgroundColor = "transparent";
    elemento.style.fontWeight = "normal";
    elemento.textContent = "Pasa el cursor por aquí.";
}

function alterarBoton(div) {
    div.style.backgroundColor = "#397e7e";
}

function restaurarBoton(div) {
    div.style.backgroundColor = "#2f5d5d";
}
