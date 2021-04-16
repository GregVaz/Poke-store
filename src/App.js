import React, { useState, useEffect } from 'react'
import PokemonList from './components/PokemonList'
import Paginator from './components/Paginator'
import PokemonDetails from './components/PokemonDetails'
import PokemonCart from './components/PokemonCart'
import Toolbar from './components/Toolbar';
import axios from 'axios'
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import './App.css'
import SplitForm from './components/SplitForm';

function App() {
  const endpoint = process.env.REACT_APP_ENDPOINT 
  const [pokemons, setPokemons] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState(endpoint)
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(true)

  const [pokemon, setPokemon] = useState('')
  const [pokemonDetails, setPokemonDetails] = useState([])
  const [detailsPokemonUrl, setDetailsPokemonUrl] = useState()

  const [cart, setCart] = useState([])
  const stripePromise = loadStripe(process.env.REACT_APP_TEST_KEY)

  useEffect(() => { 
    setLoading(true);
    fetchData(currentPageUrl).then(response => { 
      setLoading(false);
      setNextPageUrl(response.data.next)
      setPrevPageUrl(response.data.previous)
      let resPokemons = response.data.results.map(castPokemons)
      resPokemons = resPokemons.filter(pokemon => cart.every(poke => poke.id !== pokemon.id))
      setPokemons(resPokemons)
      if (resPokemons.length > 0) {
        setDetailsPokemonUrl(endpoint + resPokemons[0].price)
      }
    })
  }, [currentPageUrl])

  useEffect(() => {
    if (detailsPokemonUrl) {
      fetchData(detailsPokemonUrl).then(response => {
        setPokemonDetails(response.data.stats)
        setPokemon(response.data.name)
      })
    }
  }, [detailsPokemonUrl])

  async function fetchData(url) {
    let cancel
    try {
      let response = await axios.get(url, {
        cancelToken: new axios.CancelToken(c => cancel = c) 
      });
      return response;
    } catch(error) {
      if (axios.isCancel(cancel)) {
        return Promise.reject();
      }
    }
  }

  function castPokemons(pokemon) {
    return {
      name: pokemon.name,
      url: pokemon.url,
      price: parseInt(pokemon.url.match(/\d{1,4}/g)[1])
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
    <>
      <Toolbar />
      <div className="container mb-5">
        <div className="pokemon-page">
          <div className="pokemon-elements">
            <PokemonList
              pokemons={pokemons}
              gotoDetailsPage={(pokemonId) => gotoDetailsPage(pokemonId)}
              addPokemonToCart={(pokemon) => addPokemonToCart(pokemon)}
            />
            <Paginator 
              gotoNextPage={nextPageUrl ? gotoNextPage : null}
              gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
            />
          </div>
          <div className="pokemon-elements-details"> 
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
            
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
