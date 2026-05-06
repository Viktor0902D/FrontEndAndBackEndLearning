const pokemonDatabase = [
  { id: 1, name: "Bulbasaur", type: "Grass", icon: "🍃", hp: 45 },
  { id: 4, name: "Charmander", type: "Fire", icon: "🔥", hp: 39 },
  { id: 7, name: "Squirtle", type: "Water", icon: "💧", hp: 44 },
  { id: 25, name: "Pikachu", type: "Electric", icon: "⚡", hp: 35 },
  { id: 39, name: "Jigglypuff", type: "Fairy", icon: "✨", hp: 115 },
  { id: 74, name: "Geodude", type: "Rock", icon: "🪨", hp: 40 },
  { id: 94, name: "Gengar", type: "Ghost", icon: "👻", hp: 60 },
  { id: 133, name: "Eevee", type: "Normal", icon: "🦊", hp: 55 },
  { id: 143, name: "Snorlax", type: "Normal", icon: "🐻", hp: 160 },
  { id: 150, name: "Mewtwo", type: "Psychic", icon: "👁️", hp: 106 },
];

export const fetchPokemonBatch = () => {
  return new Promise((resolve) => {
    console.log("📡 [Network] Fetching initial Pokemon batch...");
    setTimeout(() => {
      resolve([...pokemonDatabase]);
    }, 1200);
  });
};

export const searchPokemon = (query) => {
  return new Promise((resolve, reject) => {
    console.log(`🔍 [Network] Searching database for "${query}"...`);
    setTimeout(() => {
      const results = pokemonDatabase.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase()),
      );

      if (results.length > 0) {
        resolve(results);
      } else {
        reject(new Error(`No pokemon found matching  ${query}`));
      }
    }, 800);
  });
};
