const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch(`https://dummyjson.com/products/${id}`)
    .then(res => res.json())
    .then(p => {
        document.getElementById("titulo").textContent = p.title;
        document.getElementById("imagen").src = p.thumbnail;
        document.getElementById("descripcion").textContent = `Descripción: ${p.description}`;
        document.getElementById("marca").textContent = `Marca: ${p.brand}`;

        const lista = document.getElementById("opiniones");

        if (p.reviews && p.reviews.length > 0) {
            p.reviews.forEach(r => {
                const li = document.createElement("li");
                li.textContent = `${r.reviewerName}: ${r.comment}`;
                lista.appendChild(li);
            });
        } else {
            lista.innerHTML = "<li>Este producto no tiene opiniones.</li>";
        }
    });

function volver() {
    window.location.href = "index.html";
}
