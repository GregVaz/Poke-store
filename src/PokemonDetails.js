import React from 'react'

export default function PokemonDetails({ pokemonDetails }) {
  return (
    <div> 
      {pokemonDetails.map(detail => (
        <div key={detail.stat.name}>
          <h6>{detail.stat.name}</h6>
          <h6>{detail.base_stat}</h6>
        </div>
      ))}
    </div>
  );
}
