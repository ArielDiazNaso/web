const imagenes = [
    "/KaratePage/images/ejemplo2.jpg",
    "/KaratePage/images/ejemplo3.jpg",
    "/KaratePage/images/ejemplo4.jpg",
];

let indiceActual = 0;

function cambiarImagen(direccion) {
    indiceActual += direccion;
    
    if (indiceActual < 0) {
        indiceActual = imagenes.length - 1;
    } else if (indiceActual >= imagenes.length) {
        indiceActual = 0;
    }

    document.getElementById("imagen-principal").src = imagenes[indiceActual];
}
