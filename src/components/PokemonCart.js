import React from 'react'

export default function PokemonCart({ cart, removePokemonFromCart }) {
  const total = cart.reduce((total, pokemon) => total + pokemon.price, 0)
  return (
    <>
      <h4>Pokemon Cart</h4>
      <p>Total: ${total}</p>
      <button className="btn btn-primary btn-block" type="button" data-toggle="collapse" data-target="#cartPokemon" aria-expanded="false" aria-controls="cartPokemon">
    List of pokemons in cart
  </button>
      <div className="collapse" id="cartPokemon">
        {cart.map(pokemon => (
          <div key={pokemon.name} className="d-flex justify-content-around m-2 p-2 border border-top-0">
            <span>{pokemon.name}</span>
            <button className="btn btn-warning btn-sm" onClick={() => removePokemonFromCart(pokemon)}>Remove pokemon</button>
          </div>
        ))}
      </div>
    </>
  );
}
