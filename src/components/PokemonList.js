import React from 'react'

export default function PokemonList({ pokemons, gotoDetailsPage, addPokemonToCart}) {
  return (
    <div className="pokemon-list-container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
        {pokemons.map((pokemon, index) => (
          <tr key={pokemon.name}>
            <th scope="row">{index + 1}</th>
            <td>{pokemon.name}</td>
            <td>Price: ${pokemon.id}</td>
            <td>
              <button className="btn btn-info btn-sm" id={pokemon.name+'-details'} onClick={() => gotoDetailsPage(pokemon.url)}>See details</button>
              <button className="btn btn-primary btn-sm" id={pokemon.name+'-cart'} onClick={() => addPokemonToCart(pokemon)}>Add to cart</button>
            </td>  
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}
