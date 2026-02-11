const baseUrl = "https://api.disneyapi.dev/character";

window.onload = () => {
    getCharacters();
};

function getCharacters(page = 1) {
    fetch(`${baseUrl}?page=${page}`)
        .then(response => response.json())
        .then(data => {
            displayCharacters(data.data);
        });
}

function displayCharacters(characters) {
    const container = document.getElementById("charactersContainer");
    container.innerHTML = "";

    characters.forEach(character => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${character.imageUrl ? character.imageUrl : 'https://via.placeholder.com/150'}" width="150">
            <h3>${character.name}</h3>
        `;

        card.onclick = () => toggleDetail(card, character._id);

        container.appendChild(card);
    });
}

async function toggleDetail(card, id) {

    const existingDetail = card.querySelector(".detail");
    if (existingDetail) {
        existingDetail.remove();
        return;
    }

    const response = await fetch(`${baseUrl}/${id}`);
    const data = await response.json();
    const character = data.data;

    const detail = document.createElement("div");
    detail.className = "detail";

    detail.innerHTML = `
        <p><strong>Películas:</strong> ${character.films.length ? character.films.join(", ") : "No disponible"}</p>
        <p><strong>Series:</strong> ${character.tvShows.length ? character.tvShows.join(", ") : "No disponible"}</p>
        <p><strong>Videojuegos:</strong> ${character.videoGames.length ? character.videoGames.join(", ") : "No disponible"}</p>
    `;

    card.appendChild(detail);
}

async function searchCharacter() {
    const name = document.getElementById("searchInput").value;
    if (!name) return;

    const response = await fetch(`${baseUrl}?name=${name}`);
    const data = await response.json();

    displayCharacters(data.data);
}
