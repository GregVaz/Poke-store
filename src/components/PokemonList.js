import React from 'react'
import Pokemon from './Pokemon'
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
          <Pokemon
            pokemon={pokemon}
            index={index}
            gotoDetailsPage={gotoDetailsPage}
            addPokemonToCart={addPokemonToCart}
          />
        ))}
        </tbody>
      </table>
    </div>
  );
}
