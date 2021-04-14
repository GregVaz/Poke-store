import React from 'react'

export default function PokemonDetails({ pokemonDetails, pokemonName }) {
  return (
    <div className="card" > 
      <div className="card-body">
        <h4 className="card-title">{pokemonName}</h4>
        {pokemonDetails.map(detail => (
          <div key={detail.stat.name} className="card-text">
            <h6 className="d-flex justify-content-between">
              {detail.stat.name.toUpperCase()}
              <span>{detail.base_stat}</span>
            </h6>
          </div>
        ))}
      </div>
    </div>
  );
}
