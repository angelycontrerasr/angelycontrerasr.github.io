let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/dibujo1.jpg') {
      miImage.setAttribute('src','images/dibujo2.jpg');
    } else {
      miImage.setAttribute('src', 'images/dibujo1.jpg');
    }
}
let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h1');
function estableceNombreUsuario() {
    let miNombre = prompt('Por favor, ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Naruto Uzomaki,' + miNombre;
}
if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Naruto Uzomaki,' + nombreAlmacenado;
}
miBoton.onclick = function() {
    estableceNombreUsuario();
}