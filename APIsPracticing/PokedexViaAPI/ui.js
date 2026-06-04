const pokemonGrid = document.getElementById('pokemon-grid');

export function renderPokemonList(pokemonArray){
    pokemonGrid.innerHTML = '';
    pokemonArray.forEach(pokemon=>{
        const pokemonCard = document.createElement('div');
        pokemonCard.classList.add('card');
        pokemonCard.innerHTML = `
            <span class="pokemon-id">#${pokemon.id}</span>
            <img src="${pokemon.image}" alt="${pokemon.name}">
            <h2>${pokemon.name}</h2>
           <div class="types">
                <span class="type">${pokemon.types.join('</span><span class="type">')}</span>
            </div>
        `;
        pokemonGrid.appendChild(pokemonCard);
    })
}