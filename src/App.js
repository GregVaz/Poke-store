import React, { useState } from 'react';
import PokemonList from './PokemonList';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState(["bulbasur", "charmander"])
  return (
    <PokemonList pokemon={pokemon} />
  );
}

export default App;
