 export default class PokemonCard {
  constructor(pokemonData) {
    this.id = pokemonData.id;
    this.name = pokemonData.name;
    this.type = pokemonData.type;
    this.icon = pokemonData.icon;
    this.hp = pokemonData.hp;
  }
  render() {
    return `<div class="pokemon-card type-${this.type}">
    <div class="icon">${this.icon}</div>
    <h2>#${this.id} ${this.name}</h2>
    <p>Type: ${this.type}</p>
    <p>HP: ${this.hp}</p>
</div>`;
  }
}
