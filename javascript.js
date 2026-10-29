console.log("Sistema de cine iniciado");

const titulo = document.querySelector(".cartelera h1");
console.log(titulo);

titulo.textContent = "Cartelera de Peliculas";


const peliculas = document.querySelectorAll(".movie");

const detalles = document.querySelector("#detalles-pelicula");
const nombrePelicula = document.querySelector("#nombre-pelicula");
const mensajePelicula = document.querySelector("#mensaje-pelicula");

peliculas.forEach((pelicula) => {
    pelicula.addEventListener("click", () => {
        const img = pelicula.querySelector("img");
        const name = img.alt || "Pelicula";
        
        nombrePelicula.textContent = name;
        mensajePelicula.textContent = "Proximamente: informacion y horarios de la pelicula ";

        detalles.hidden = false;
    });
});

document.querySelector("#cerrar-detalles").addEventListener("click", () => {
    detalles.hidden = true;
});
