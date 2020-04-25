import React, {createContext, useState} from 'react';

export const PokemonContext = createContext();


export const PokemonProvider = (props) => {
    const [pokemons, setPokemons] = useState([
        {id: 1, name: 'Bulbasaur'}, 
        {id: 2, name: 'Charmander'}, 
        {id: 3, name: 'Squirtle'}
    ]);

    const [capturedPokemons, setCapturedPokemons] = useState([]);

    //values of state that the other components will need
    const providerValue = {
        pokemons, 
        setPokemons, 
        capturedPokemons, 
        setCapturedPokemons
    };


    return (
        <PokemonContext.Provider value={providerValue}>
             {props.children}
        </PokemonContext.Provider>
    )
}