import React from 'react'

export default function PokemonList({ pokemon, gotoDetailsPage }) {
  return (
    <div className="pokemon-list"> 
      {pokemon.map(poke => (
        <div key={poke.name} className="pokemon-item">
          <span>{poke.name}</span>
          <button onClick={() => gotoDetailsPage(poke.url)}>See details</button>
        </div>
      ))}
    </div>
  );
}
