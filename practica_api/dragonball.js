// URL de la API de Dragon Ball
const urlApi = "https://dragonball-api.com/api/characters";

// Función principal que se ejecuta al dar clic
const cargarPersonajes = () => {
    fetch(urlApi)
        .then(response => response.json())
        .then(data => {
            // La API devuelve los personajes dentro de "items"
            const personajes = data.items;
            mostrarPersonajes(personajes);
        })
        .catch(error => {
            console.error("Error al cargar los personajes:", error);
            alert("Error al obtener los datos de la API");
        });
};

// Función que crea las tarjetas dinámicamente
const mostrarPersonajes = (personajes) => {
    const contenedor = document.getElementById("contenedor-personajes");

    // Limpiar contenido previo
    contenedor.innerHTML = "";

    personajes.forEach(personaje => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("practice-card");

        tarjeta.innerHTML = `
            <img src="${personaje.image}" alt="${personaje.name}">
            <h3 class="practice-title">${personaje.name}</h3>
            <p>${personaje.description}</p>
            <p><strong>Ki:</strong> ${personaje.ki}</p>
            <p><strong>Raza:</strong> ${personaje.race}</p>
            <p><strong>Género:</strong> ${personaje.gender}</p>
        `;

        contenedor.appendChild(tarjeta);
    });
};
