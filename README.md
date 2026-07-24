# Harry Potter Characters App

Proyecto web desarrollado para consumir la API pública de Harry Potter y mostrar una lista de personajes con opciones de búsqueda y filtrado por casa.

## Descripción

La aplicación realiza peticiones HTTP a la API REST de Harry Potter para obtener la información de los personajes. Permite filtrar dinámicamente por nombre mediante un campo de texto y por casa (Gryffindor, Slytherin, Ravenclaw, Hufflepuff) utilizando un selector.

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

Se implementó un Web Component personalizado (`<character-card>`) utilizando Custom Elements y Shadow DOM para encapsular la tarjeta de cada personaje y sus estilos.

Atributos que recibe el componente:
- name: Nombre del personaje.
- image: URL de la imagen del personaje.
- house: Casa a la que pertenece.
- actor: Nombre del actor que lo interpreta.
- species: Especie del personaje.
- alive: Estado actual (Vivo / Fallecido).

## Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+, Fetch API, Web Components)
- Bootstrap 5
