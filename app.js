const username = "LANgel03";

fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json())
    .then(data => {
        document.getElementById("perfil").innerHTML = `
            <img src="${data.avatar_url}" 
                 class="rounded-circle mb-3 shadow"
                 width="150">
            <h1>${data.name ?? username}</h1>
            <p>${data.bio ?? ""}</p>
            <p class="text-secondary">${data.location ?? ""}</p>
        `;
    })
    .catch(error => console.error("Error perfil:", error));


fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6&type=owner&direction=desc`)
    .then(res => res.json())
    .then(repos => {

        const container = document.getElementById("repos");
        container.innerHTML = "";

        repos.forEach(repo => {
            container.innerHTML += `
                <div class="col-md-6 col-lg-4">
                    <div class="card h-100 shadow">
                        <div class="card-body">
                            <h5 class="card-title">${repo.name}</h5>
                            <p class="card-text">${repo.description ?? "Sin descripción"}</p>
                            <p><strong>Lenguaje:</strong> ${repo.language ?? "N/A"}</p>
                            <p><i class="bi bi-star-fill text-warning"></i>  ${repo.stargazers_count}</p>

                            <a href="${repo.html_url}" 
                               target="_blank" 
                               class="btn btn-outline-info btn-sm">
                               Ver en GitHub
                            </a>
                        </div>
                    </div>
                </div>
            `;
        });

    })
    .catch(error => console.error("Error repos:", error));


fetch(`https://api.github.com/users/${username}/followers?per_page=5`)
    .then(res => res.json())
    .then(followers => {

        const container = document.getElementById("followers");
        container.innerHTML = "";

        followers.forEach(user => {
            container.innerHTML += `
                <img src="${user.avatar_url}" 
                     title="${user.login}" 
                     class="rounded-circle shadow"
                     width="70">
            `;
        });

    })
    .catch(error => console.error("Error followers:", error));
