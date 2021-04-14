import React from 'react'

export default function PokemonCard({ pokemons, gotoDetailsPage, addPokemonToCart, getPokemonImg}) {
  return (
    <div className="pokemon-card">
      {pokemons.map(pokemon => (
        <div className="card pokemon-card-item my-2 mx-1" key={pokemon.name}>
          <div className="card-body">
            <h5 className="card-title">{pokemon.name}</h5>
            <h6 className="card-text">Price: ${pokemon.id}</h6>
            <div>
              <button className="btn btn-info btn-sm btn-block" onClick={() => gotoDetailsPage(pokemon.url)}>See details</button>
              <button className="btn btn-primary btn-sm btn-block" onClick={() => addPokemonToCart(pokemon)}>Add to cart</button>
            </div>  
          </div>
        </div>
      ))}
    </div>
  );
}
