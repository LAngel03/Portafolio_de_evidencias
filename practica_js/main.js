const lista_peliculas = [
    {
        nombre: "Gotzilla",
        duracions: 120,
        director: "Fulando",
        cartelera: false,
        genero: "accion"
    },

    {
        nombre: "kuko",
        duracions: 120,
        director: "Fulando",
        cartelera: true,
        genero: "accion"
    },

    {
        nombre: "poquemon",
        duracions: 85,
        director: "Fulando",
        cartelera: false,
        genero: "accion"
    },

    {
        nombre: "juntrix",
        duracions: 185,
        director: "Fulando",
        cartelera: true,
        genero: "accion"
    }
]

const mostrar = () => {
    const contenedor = document.getElementById("contenedor")

    lista_peliculas.forEach((pelicula) => {
        if (pelicula.cartelera)
            contenedor.innerHTML += "<div class = 'tarjeta '> <h2>" + pelicula.nombre + "</h2></div>"
    })
}