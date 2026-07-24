# Harry Potter Characters App

Proyecto web para consumir la API de Harry Potter y mostrar la lista de personajes con búsqueda por nombre y filtro por casa.

## Estructura del Proyecto

```
HarryPotterApi/
├── css/
│   └── styles.css
├── img/
│   └── default.jpg
├── js/
│   ├── components/
│   │   └── CharacterCard.js
│   └── app.js
├── index.html
└── README.md
```

## Componentes

### Web Component (<character-card>)

Se utilizó un Web Component personalizado para renderizar la tarjeta de cada personaje mediante Custom Elements y Shadow DOM.

Atributos que recibe:
- name: Nombre del personaje.
- image: URL de la imagen.
- house: Casa a la que pertenece.
- actor: Nombre del actor.
- species: Especie.
- alive: Estado (Vivo / Fallecido).
