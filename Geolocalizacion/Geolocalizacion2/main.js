let latitud  = 21.0432238711596
let longitud = -98.4003562440805


const coordenada = [latitud, longitud]

let map = L.map('map').setView(coordenada, 18)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map)

let marcador = L.marker(coordenada).addTo(map)

marcador.bindPopup(
    "<b>Mi Casa</b><br>" +
    "Latitud: " + latitud + "<br>" +
    "Longitud: " + longitud
).openPopup()


let poligonoCasa = L.polygon([
    [21.0432638711596, -98.4004262440805],
    [21.0432638711596, -98.4002862440805],
    [21.0431838711596, -98.4002862440805],
    [21.0431838711596, -98.4004262440805] 
], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5
}).addTo(map)

poligonoCasa.on('click', function () {
    poligonoCasa.bindPopup(
        "<b>Esta es mi casa</b><br>" +
        "En la que vivo con mi familia"
    ).openPopup()
})
