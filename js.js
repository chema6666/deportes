const form = document.getElementById("btn");
form.addEventListener("click", subir);

function subir()
{
const nombre = String(document.getElementById("nom").value);
const resultado = document.getElementById("resultado");
resultado.innerText= "Hola " + nombre;
}