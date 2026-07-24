class CharacterCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        const name = this.getAttribute("name");
        const image = this.getAttribute("image");
        const house = this.getAttribute("house");
        const actor = this.getAttribute("actor");
        const species = this.getAttribute("species");
        const alive = this.getAttribute("alive");

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    height: 100%;
                }

                .card {
                    background: #1e293b;
                    color: white;
                    border-radius: 18px;
                    overflow: hidden;
                    box-shadow: 0 10px 25px rgba(0,0,0,.4);
                    transition: .3s;
                    height: 100%;
                }

                .card:hover {
                    transform: translateY(-8px);
                }

                img {
                    width: 100%;
                    height: 320px;
                    object-fit: cover;
                }

                .content {
                    padding: 20px;
                }

                h2 {
                    color: #facc15;
                    font-size: 1.3rem;
                    margin-top: 0;
                }

                p {
                    margin-bottom: 8px;
                }
            </style>

            <div class="card">
                <img src="${image}" onerror="this.src='img/default.jpg'">

                <div class="content">
                    <h2>${name}</h2>
                    <p>Casa: ${house}</p>
                    <p>Actor: ${actor}</p>
                    <p>Especie: ${species}</p>
                    <p>Estado: ${alive}</p>
                </div>
            </div>
        `;
    }
}

customElements.define("character-card", CharacterCard);