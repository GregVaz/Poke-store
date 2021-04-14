import React, { useState, useEffect } from 'react'
import PokemonList from './PokemonList'
import Paginator from './Paginator'
import PokemonDetails from './PokemonDetails'
import PokemonCart from './PokemonCart'
import axios from 'axios'
import './App.css'


function App() {
  const endpoint = 'https://pokeapi.co/api/v2/pokemon/'
  const [pokemons, setPokemons] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState(endpoint)
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(true)

  const [pokemon, setPokemon] = useState('')
  const [pokemonDetails, setPokemonDetails] = useState([])
  const [detailsPokemonUrl, setDetailsPokemonUrl] = useState()

  const [cart, setCart] = useState([])

  useEffect(() => {
    setLoading(true);
    let cancel
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c) 
    }).then( res => {
      setLoading(false);
      setNextPageUrl(res.data.next)
      setPrevPageUrl(res.data.previous)
      let resPokemons = res.data.results.map(castPokemons)
      resPokemons = resPokemons.filter(pokemon => cart.every(poke => poke.id !== pokemon.id))
      setPokemons(resPokemons)
      if (resPokemons.length > 0) {
        setDetailsPokemonUrl(endpoint + resPokemons[0].id)
      }
    })

    return () => cancel()
  }, [currentPageUrl])

  useEffect(() => {
    let cancel
    axios.get(detailsPokemonUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c) 
    }).then( res => {
      setPokemonDetails(res.data.stats)
      setPokemon(res.data.name)
    })

    return () => cancel()
  }, [detailsPokemonUrl])

  function castPokemons(pokemon) {
    return {
      name: pokemon.name,
      url: pokemon.url,
      id: pokemon.url.match(/\d{1,4}/g)[1]
    }
  }

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl)
  }

  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl)
  }

  function gotoDetailsPage(pokemonId) {
    setDetailsPokemonUrl(pokemonId)
  }

  const removePokemonFromList = (removedPokemon) =>
    pokemons.filter(pokemon => pokemon !== removedPokemon);

  function addPokemonToCart(pokemon) {
    setCart([...cart, pokemon]);
    setPokemons(removePokemonFromList(pokemon));
  }

  const releasePokemon = (releasedPokemon) =>
    cart.filter((pokemon) => pokemon !== releasedPokemon);

  function removePokemonFromCart(pokemon) {
    setCart(releasePokemon(pokemon));
    setPokemons([...pokemons, pokemon]);
  }

  if (loading) return 'Loading...'
  
  return (
    <>
      <div className="pokemon-page">
        <PokemonList
          pokemons={pokemons}
          gotoDetailsPage={(pokemonId) => gotoDetailsPage(pokemonId)}
          addPokemonToCart={(pokemon) => addPokemonToCart(pokemon)}
        />
        <PokemonDetails
          pokemonDetails={pokemonDetails}
          pokemonName={pokemon}
        />
      </div>
      <PokemonCart
        cart={cart}
        removePokemonFromCart={(pokemon) => removePokemonFromCart(pokemon)}
      />
      <Paginator 
        gotoNextPage={nextPageUrl ? gotoNextPage : null}
        gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
      />
    </>
  );
}

export default App;
