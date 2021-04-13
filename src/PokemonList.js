import React from 'react'

export default function PokemonList({ pokemon }) {
  return (
    <div> 
      {pokemon.map(poke => (
        <div key={poke.name}>
          <span>{poke.name}</span>
        </div>
      ))}
    </div>
  );
}
