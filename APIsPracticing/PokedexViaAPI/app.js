import { getDetailedPokemonList } from "./api.js";
import { renderPokemonList } from "./ui.js";

let stateOffset=0;
const previousBtn=document.getElementById("prev-btn");
const nextBtn=document.getElementById("next-btn");

async function loadPokemonList(offset=0, limit=20){
    try {
        const pokemonArray= await getDetailedPokemonList(offset, limit);
        renderPokemonList(pokemonArray);
        previousBtn.disabled=(offset<=0);
        nextBtn.disabled=(pokemonArray.length<limit);
    } catch (error) {
        console.error("Error loading Pokémon list:", error);
    }
}

previousBtn.addEventListener("click",()=>{
    stateOffset-=20;
    loadPokemonList(stateOffset);
});
nextBtn.addEventListener("click",()=>{
    stateOffset+=20;
    loadPokemonList(stateOffset);
});

loadPokemonList(stateOffset);