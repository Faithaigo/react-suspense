// Simple Data-fetching
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'
import {PokemonDataView, fetchPokemon, PokemonErrorBoundary} from '../pokemon'


let pokemon;
let error;
let pokemonPromise = fetchPokemon('pikach').then(value=>pokemon = value, err=>error = err)

function PokemonInfo() {
  if(!pokemon){
    throw pokemonPromise
  }
  if(error){
    throw error
  }

  return (
    <div>
      <div className="pokemon-info__img-wrapper">
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
      <PokemonDataView pokemon={pokemon} />
    </div>
  )
}

function App() {
  return (
    <div className="pokemon-info-app">
      <div className="pokemon-info">
      <PokemonErrorBoundary>
        <React.Suspense fallback={<div>Loading....</div>}>
            <PokemonInfo />
        </React.Suspense>
      </PokemonErrorBoundary>
      </div>
    </div>
  )
}

export default App
