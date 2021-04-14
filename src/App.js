import React, { useState, useEffect } from 'react'
// import PokemonCard from './PokemonCard'
import PokemonList from './PokemonList'
import Paginator from './Paginator'
import PokemonDetails from './PokemonDetails'
import PokemonCart from './PokemonCart'
import axios from 'axios'
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import './App.css'
import SplitForm from './components/SplitForm';

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
  const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

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

  function cleanCart() {
    setPokemons([...pokemons, ...cart])
    setCart([])
  }

  if (loading) return 'Loading...'
  
  return (
    <div className="container my-5">
      <div className="pokemon-page">
        <PokemonList
          pokemons={pokemons}
          gotoDetailsPage={(pokemonId) => gotoDetailsPage(pokemonId)}
          addPokemonToCart={(pokemon) => addPokemonToCart(pokemon)}
        />
        <div> 
          <PokemonDetails
            pokemonDetails={pokemonDetails}
            pokemonName={pokemon}
          />
          
          <PokemonCart
            cart={cart}
            removePokemonFromCart={(pokemon) => removePokemonFromCart(pokemon)}
          />
          <Elements stripe={stripePromise}>
            <SplitForm
              cart={cart}
              cleanCart={() => cleanCart()}
            /> 
          </Elements>
          <Paginator 
            gotoNextPage={nextPageUrl ? gotoNextPage : null}
            gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
