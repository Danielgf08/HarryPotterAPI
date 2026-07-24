const API_URL = "https://hp-api.onrender.com/api/characters";
const DEFAULT_IMAGE = "img/default.jpg";

const container = document.getElementById("charactersContainer");
const searchInput = document.getElementById("searchInput");
const houseFilter = document.getElementById("houseFilter");

let characters = [];

async function loadCharacters() {
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Error al obtener los datos");
        }

        characters = await response.json();
        renderCharacters(characters);
    } catch (error) {
        container.innerHTML = `
            <div class="col-12">
                <div class="alert alert-danger text-center">
                    Error al cargar la información.
                </div>
            </div>
        `;
        console.error(error);
    }
}

function renderCharacters(list) {
    container.innerHTML = "";

    if (list.length === 0) {
        container.innerHTML = `
            <div class="col-12">
                <div class="alert alert-warning text-center">
                    No se encontraron personajes.
                </div>
            </div>
        `;
        return;
    }

    let html = "";

    list.forEach(character => {
        html += `
            <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                <character-card
                    name="${character.name || 'Desconocido'}"
                    image="${character.image || DEFAULT_IMAGE}"
                    house="${character.house || 'Sin casa'}"
                    actor="${character.actor || 'Desconocido'}"
                    species="${character.species || 'Desconocido'}"
                    alive="${character.alive ? 'Vivo' : 'Fallecido'}">
                </character-card>
            </div>
        `;
    });

    container.innerHTML = html;
}

function filterCharacters() {
    const searchText = searchInput.value.toLowerCase().trim();
    const selectedHouse = houseFilter.value;

    const filtered = characters.filter(character => {
        const matchesName = character.name
            .toLowerCase()
            .includes(searchText);

        const matchesHouse =
            selectedHouse === "" ||
            character.house === selectedHouse;

        return matchesName && matchesHouse;
    });

    renderCharacters(filtered);
}

searchInput.addEventListener("input", filterCharacters);
houseFilter.addEventListener("change", filterCharacters);

loadCharacters();