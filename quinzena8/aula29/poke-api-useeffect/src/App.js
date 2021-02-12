import React, { useState } from 'react'
import './App.css';

export default function App() {
  const [pokeList, setPokeList ] = useStateate([])
  const [pokeName, setPokeName ] = useStateate("")

  return (
    <div className="App">
      
      <select onChange={this.changePokeName}>
        <option value={""}>Nenhum</option>
        {this.state.pokeList.map(pokemon => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          );
        })}
      </select>

      {this.state.pokeName && <PokeCard pokemon={this.state.pokeName} />}

    </div>
  );
}

