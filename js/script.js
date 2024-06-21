// 1. Clona este repositorio a tu entorno local.

// 2. Abre el archivo "index.html". En la página, encontrarás un selector que te permite elegir un Pokémon (Bulbasaur, Charmander o Squirtle) y un botón "Obtener Información".

// 3. Cuando selecciones un Pokémon y hagas clic en el botón "Obtener Información", se tendrá que mostrar la información en pantalla del Pokémon, incluyendo su nombre, imagen, tipo, altura y peso.


const obtenerBoton = document.getElementById("get-pokemon");

const getPokemon = () => {
const pokemonSelect = document.getElementById("pokemon-select").value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonSelect}`)
      .then((response) => response.json())
      .then((data) => {
        const template = `
              <h2><strong>Nombre:</strong> ${data.name.toUpperCase()}</h2>
              <img class="imagen" src="${data.sprites.front_default}" alt="${data.name}">
              <p><strong>Tipo:</strong> ${data.types
                .map((type) => type.type.name)
                .join(" - ")}</p>
              <p><strong>Altura:</strong> ${data.height} m</p>
              <p><strong>Peso:</strong> ${data.weight} kg</p>`;
              
obtenerBoton.innerHTML = template;

        })  
        .catch(error => {
          console.error("Error al obtener los datos del Pokémon:", error);
        });
  }

obtenerBoton.addEventListener("click", getPokemon);