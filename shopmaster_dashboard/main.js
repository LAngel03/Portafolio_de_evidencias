let skip = 0;
const limit = 10;
let pagina = 1;
let filtros = {};
let productoActualId = null;

document.addEventListener("DOMContentLoaded", () => {
    cargarCategorias();
    cargarProductos();
});

function cargarProductos() {
    let url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;

    if (filtros.busqueda) {
        url = `https://dummyjson.com/products/search?q=${filtros.busqueda}`;
    }

    if (filtros.categoria) {
        url = `https://dummyjson.com/products/category/${filtros.categoria}`;
    }

    if (filtros.ordenar) {
        url += `&sortBy=${filtros.ordenar.campo}&order=${filtros.ordenar.tipo}`;
    }

    fetch(url)
        .then(res => res.json())
        .then(data => {
            renderizarTabla(data.products);
            document.getElementById("paginaInfo").textContent = `Página ${pagina}`;
        });
}

function renderizarTabla(productos) {
    const tabla = document.getElementById("tablaProductos");
    tabla.innerHTML = "";

    productos.forEach(p => {
        tabla.innerHTML += `
        <tr onclick="verDetalle(${p.id})" style="cursor:pointer">
            <td>${p.id}</td>
            <td><img src="${p.thumbnail}"></td>
            <td>${p.title}</td>
            <td>$${p.price}</td>
            <td>${p.category}</td>
            <td>
                <button onclick="event.stopPropagation(); editarProducto(${p.id})">Editar</button>
                <button onclick="event.stopPropagation(); eliminarProducto(${p.id})">Eliminar</button>
            </td>
        </tr>`;
    });
}

function verDetalle(id) {
    fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then(p => {
            productoActualId = id;

            document.getElementById("detalleTitulo").textContent = p.title;
            document.getElementById("detalleCategoria").textContent = `Categoría: ${p.category}`;
            document.getElementById("detallePrecio").textContent = `Precio: $${p.price}`;
            document.getElementById("detalleRating").textContent = `Rating: ⭐ ${p.rating}`;

            document.getElementById("detalleModal").style.display = "flex";
        });
}

function cerrarDetalle() {
    document.getElementById("detalleModal").style.display = "none";
}

document.getElementById("btnMasDetalles")?.addEventListener("click", () => {
    window.location.href = `detalle.html?id=${productoActualId}`;
});

function paginaSiguiente() {
    skip += limit;
    pagina++;
    cargarProductos();
}

function paginaAnterior() {
    if (skip > 0) {
        skip -= limit;
        pagina--;
        cargarProductos();
    }
}

function buscarProductos() {
    filtros = { busqueda: document.getElementById("searchInput").value };
    skip = 0;
    pagina = 1;
    cargarProductos();
}

function cargarCategorias() {
    fetch("https://dummyjson.com/products/category-list")
        .then(res => res.json())
        .then(data => {
            const select = document.getElementById("categorySelect");
            data.forEach(cat => {
                select.innerHTML += `<option value="${cat}">${cat}</option>`;
            });
        });
}

function filtrarCategoria() {
    filtros = { categoria: document.getElementById("categorySelect").value };
    skip = 0;
    pagina = 1;
    cargarProductos();
}

function editarProducto(id) {
    const nuevoPrecio = prompt("Nuevo precio:");
    if (!nuevoPrecio) return;

    fetch(`https://dummyjson.com/products/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ price: nuevoPrecio })
    })
    .then(() => {
        alert("Producto actualizado");
        cargarProductos();
    });
}

function eliminarProducto(id) {
    if (!confirm("¿Eliminar producto?")) return;

    fetch(`https://dummyjson.com/products/${id}`, { method: "DELETE" })
        .then(() => {
            alert("Producto eliminado");
            cargarProductos();
        });
}
