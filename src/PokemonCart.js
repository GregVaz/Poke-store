import React from 'react'

export default function PokemonCart({ cart, removePokemonFromCart }) {
  return (
    <>
      <h4>Pokemon Cart</h4>
      <p>Total: ${cart.reduce((total, pokemon) => total + parseInt(pokemon.id), 0)}</p>
      <div className="pokemon-cart">
        {cart.map(pokemon => (
          <div key={pokemon.name} className="pokemon-cart-item">
            <p>{pokemon.name}</p>
            <button onClick={() => removePokemonFromCart(pokemon)}>Remove pokemon</button>
          </div>
        ))}
      </div>
    </>
  );
}
