import React, { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios'

export default function App() {
  const [pokeList, setPokeList ] = useState([])
  const [pokeName, setPokeName ] = useState("")

  const pegarPokemons = () => {

    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => {
        setPokeList(response.data.results)
      })
      .catch(err => {
        console.log(err);
      });

  }

  useEffect(() => {

    pegarPokemons()

  }, [])


  return (
    <div className="App">
      
      <select onChange={this.changePokeName}>
        <option value={""}>Nenhum</option>
        {pokeList.map(pokemon => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          );
        })}
      </select>

      {pokeName && <PokeCard pokemon={pokeName} />}

    </div>
  );
}

