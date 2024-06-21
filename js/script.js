// 1. Clona este repositorio a tu entorno local.

// 2. Abre el archivo "index.html". En la página, encontrarás un selector que te permite elegir un Pokémon (Bulbasaur, Charmander o Squirtle) y un botón "Obtener Información".

// 3. Cuando selecciones un Pokémon y hagas clic en el botón "Obtener Información", se tendrá que mostrar la información en pantalla del Pokémon, incluyendo su nombre, imagen, tipo, altura y peso.

const bulbasaur = document.getElementById("bulbasaur");
const charmander = document.getElementById("charmander");
const squirtle = document.getElementById("squirtle");

const pokemonSelect = document.getElementById("pokemon-select").value;
console.log(pokemonSelect);

const obtenerBoton = document.getElementById("get-pokemon");

const getPokemon = () => {
  if (Option.value === bulbasaur) {
    return obtenerBoton;
  }
  if (Option.value === charmander) {
    return obtenerBoton;
  } else if (Option.value === squirtle) {
    return obtenerBoton;
  }
};
console.log(getPokemon);

document
  .getElementById("get-pokemon")
  .pokemonSelect.addEventListener("click", () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonSelect}`)
      .then((response) => response.json())
      .then((data) =>
}
    const pokemon = data.results
      character.forEach(character => {
        const template = `
              <h2><strong>Nombre:</strong> ${
                data.name.toUpperCase() + data.name.slice(1)
              }</h2>
              <img src="${data.sprites.front_default}" alt="${data.name}">
              <p><strong>Tipo:</strong> ${data.types
                .map((type) => type.type.name)
                .join(", ")}</p>
              <p><strong>Altura:</strong> ${data.height} m</p>
              <p><strong>Peso:</strong> ${data.weight} kg</p>
          `;
  });
