import React, { useState, useEffect } from 'react'
import PokemonList from './PokemonList'
import Paginator from './Paginator'
import PokemonDetails from './PokemonDetails'
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
  const [detailsPokemonUrl, setDetailsPokemonUrl] = useState(endpoint + '1')
  
  useEffect(() => {
    setLoading(true);
    let cancel
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c) 
    }).then( res => {
      setLoading(false);
      setNextPageUrl(res.data.next)
      setPrevPageUrl(res.data.previous)
      setPokemons(res.data.results)
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

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl)
  }

  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl)
  }

  function gotoDetailsPage(pokemonId) {
    setDetailsPokemonUrl(pokemonId)
  }

  if (loading) return 'Loading...'
  
  return (
    <>
      <div className="pokemon-details">
        <PokemonList
          pokemon={pokemons}
          gotoDetailsPage={(pokemonId) => gotoDetailsPage(pokemonId)}
        />
        <PokemonDetails
          pokemonDetails={pokemonDetails}
          pokemonName={pokemon}
        />
      </div>
      <Paginator 
        gotoNextPage={nextPageUrl ? gotoNextPage : null}
        gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
      />
    </>
  );
}

export default App;
