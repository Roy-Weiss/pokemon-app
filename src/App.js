import React from 'react';
import logo from './logo.svg';
import './App.css';

//components
import PokemonList from './components/PokemonList'
import CapturedPokemons from './components/CapturedPokemons'
import { PokemonProvider } from './context/PokemonContext';

function App() {
  return (
    <PokemonProvider>
      <div className="App">
        <h1>Pokemon App coming soon!</h1>
        <p>....under construction....</p>
        <PokemonList/>
        <CapturedPokemons/>
      </div>
    </PokemonProvider>
  );
}

export default App;
