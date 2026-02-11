const btnServicios = document.getElementById("btnServicios");
const btnSalones = document.getElementById("btnSalones");
const contenedor = document.getElementById("contenedorServicios");

/* ================= SERVICIOS ================= */

btnServicios.addEventListener("click", () => {
    contenedor.innerHTML = "<p>Cargando servicios...</p>";

    fetch("https://salonestenex.b-corpsolutions.com/APIMobil/servicios_api.php")
        .then(res => res.json())
        .then(json => {
            contenedor.innerHTML = "";

            json.data.forEach(servicio => {

                let imagen = "img/proyector.png";

                if (servicio.nombre_servicio.toLowerCase().includes("catering")) {
                    imagen = "img/Catering_basico.jpg";
                } else if (servicio.nombre_servicio.toLowerCase().includes("micrófono")) {
                    imagen = "img/microfono_inalmabrico.png";
                }

                contenedor.innerHTML += `
                    <div class="card">
                        <img src="${imagen}">
                        <h3>${servicio.nombre_servicio}</h3>
                        <p>${servicio.descripcion}</p>
                        <span class="precio">$${servicio.costo}</span>
                    </div>
                `;
            });
        })
        .catch(() => {
            contenedor.innerHTML = "<p>Error al cargar servicios</p>";
        });
});

/* ================= SALONES ================= */

btnSalones.addEventListener("click", () => {
    contenedor.innerHTML = "<p>Cargando salones...</p>";

    fetch("https://salonestenex.b-corpsolutions.com/APIMobil/salas.php")
        .then(res => res.json())
        .then(salones => {

            contenedor.innerHTML = "";

            salones.forEach(salon => {

                const imagen = salon.imageUrl
                    ? `https://salonestenex.b-corpsolutions.com/APIMobil/img/${salon.imageUrl}`
                    : "img/salon_default.jpg";

                contenedor.innerHTML += `
        <div class="card">
            <img src="${imagen}" alt="${salon.name}">
            <h3>${salon.name}</h3>
            <p>${salon.description}</p>
            <p>Capacidad: ${salon.capacity} personas</p>
            <span class="precio">$${salon.price}</span>
        </div>
    `;
            });
        })
        .catch(() => {
            contenedor.innerHTML = "<p>Error al cargar salones</p>";
        });
});
