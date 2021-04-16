import React from 'react'

export default function PokemonDetails({ pokemonDetails, pokemonName }) {
  return (
    <div className="card card-body" >
      <h5 className="card-title">Pokemon details</h5>
      <h6 className="card-title">{pokemonName}</h6>
      {pokemonDetails.map(detail => (
        <div key={detail.stat.name} className="card-text">
          <h6 className="d-flex justify-content-between">
            {detail.stat.name.toUpperCase()}
            <span>{detail.base_stat}</span>
          </h6>
        </div>
      ))}
    </div>
  );
}
