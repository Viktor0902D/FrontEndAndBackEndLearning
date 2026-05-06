import { fetchPokemonBatch, searchPokemon } from "./api.js";
import debouncedSearch from "./utils.js";
import PokemonCard from "./component.js";

const grid = document.getElementById("pokedex-grid");
const searchInput = document.getElementById("search-bar");

function renderGrid(pokemonArray) {
    console.log("Data passed to renderGrid:", pokemonArray);
  grid.innerHTML = pokemonArray
    .map((pokemon) => {
      let card = new PokemonCard(pokemon);
      return card.render();
    })
    .join("");
}
async function init() {
  const results = await fetchPokemonBatch();
  renderGrid(results);
}

init();

async function handleSearch(event) {
  const query = event.target.value;
  if (query === "") {
    init();
  } else {
    try {
      const searched = await searchPokemon(query);
      renderGrid(searched);
    } catch (error) {
      grid.innerHTML = `<h2>❌ ${error.message}</h2>`;
    }
  }
}

const superSearch = debouncedSearch(handleSearch, 500);
searchInput.addEventListener("input", superSearch);
