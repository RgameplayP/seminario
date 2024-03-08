import './style.css'
import fetchPokemon from './src/services/api.js';

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const pokemonDisplay = document.getElementById('pokemon-display');

searchButton.addEventListener('click', async () => {
  const query = searchInput.value.trim();
  if (!query) return; // No buscar si el input está vacío.
  console.log('test');
  try {
      const pokemon = await fetchPokemon('https://pokeapi.co/api/v2/pokemon/', query);
      console.log(pokemon.sprites);
      displayPokemon(pokemon);
      displayPokemonSprites(pokemon); // Llamamos a la función displayPokemonSprites para mostrar la imagen del Pokémon
  } catch (error) {
      console.error("Error al buscar el Pokémon:", error);
  }
});


const  displayPokemon = (pokemon) => {
    pokemonDisplay.innerHTML = '';
    const pokemonName = document.createElement('h2');
    pokemonName.textContent = pokemon.name;
    pokemonDisplay.appendChild(pokemonName);
}

const displayPokemonSprites = (pokemon) => {
  const pokemonImage = document.createElement('img');
  pokemonImage.src = pokemon.sprites.front_default;
  pokemonDisplay.appendChild(pokemonImage);
};


