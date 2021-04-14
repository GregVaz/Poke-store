import React from 'react'

export default function PokemonList({ pokemons, gotoDetailsPage, addPokemonToCart}) {
  return (
    <div className="pokemon-list"> 
      {pokemons.map(pokemon => (
        <div key={pokemon.name} className="pokemon-item">
          <span>{pokemon.name}</span>
          <span>Price: ${pokemon.id}</span>
          <button onClick={() => gotoDetailsPage(pokemon.url)}>See details</button>
          <button onClick={() => addPokemonToCart(pokemon)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
}
