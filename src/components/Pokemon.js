import React from 'react'

export default function Pokemon({ pokemon, index, gotoDetailsPage, addPokemonToCart }) {
  return (
    <tr key={pokemon.name}>
      <th scope="row">{index + 1}</th>
      <td>{pokemon.name}</td>
      <td>Price: ${pokemon.price}</td>
      <td>
        <button className="btn btn-info btn-sm" id={pokemon.name+'-details'} onClick={() => gotoDetailsPage(pokemon.url)}>See details</button>
        <button className="btn btn-primary btn-sm" id={pokemon.name+'-cart'} onClick={() => addPokemonToCart(pokemon)}>Add to cart</button>
      </td>  
    </tr>
  );
}
