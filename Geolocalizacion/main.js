const lista_peliculas=[
    {
        nombre:"Gotzilla",
        duracion:120,
        director:"fulano de tal",
        cartelera:false,
        genero:"accion"
    },
    {
        nombre:"the shining",
        duracion:180,
        director:"stanlee kubr...",
        cartelera:false,
        genero:"terror"
    },
    {
        nombre:"hurtix",
        duracion:126,
        director:"chichikawa",
        cartelera:true,
        genero:"anime"
    },
    {
        nombre:"Avatar 3",
        duracion:185,
        director:"james kameron....",
        cartelera: true,
        genero:"Fantacia"
    }
]

const mostrar=()=>{
    //obtengo el div contenedor
    const contenedor = document.getElementById("contenedor")
    contenedor.innerHTML=""

    lista_peliculas.forEach((pelicula)=>{
        if(pelicula.cartelera==true){
            contenedor.innerHTML+="<div class='tarjeta'><h2>"+ pelicula.nombre +"</h2></div>"
        }
    })

    
    //alert("hola"+lista_peliculas[3].nombre)
}