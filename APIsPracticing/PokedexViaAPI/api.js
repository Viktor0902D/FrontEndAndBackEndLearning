export async function getPokemonList(offset=0,limit=20) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
        if (!response.ok) {
            throw new Error("Failed to fetch Pokémon list.");
        }
        const data= await response.json();
        return data.results;
    } catch (error) {
        console.error("Error fetching Pokémon list:", error);
        throw error;
    }
}

export async function getDetaildPokemonInfo(url){
    try {
        const response= await fetch(url);
        if(!response.ok){
            throw new Error("Failed to fetch Pokémon details.");
        }
        const data= await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching Pokémon details:", error);
        throw error;
    }
}

export async function getDetailedPokemonList(offset=0,limit=20){
    try {
        const pokemonList= await getPokemonList(offset, limit);
        const detailedPokemonList=await Promise.all(pokemonList.map(pokemon=>getDetaildPokemonInfo(pokemon.url)));
        const data=detailedPokemonList.map(pokemon=>{
            return {
                id: pokemon.id,
                name: pokemon.name,
                image: pokemon.sprites.other['official-artwork'].front_default,
                types: pokemon.types.map(t => t.type.name)
            };
        });
        return data;
    } catch (error) {
        console.error("Error fetching detailed Pokémon list:", error);
        throw error;
    }
}
getPokemonList(0, 5).then(console.log);
getDetailedPokemonList(0, 5).then(console.log);
          