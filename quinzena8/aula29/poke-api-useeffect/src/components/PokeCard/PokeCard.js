import React, { useEffect, useState } from 'react'

export default function PokeCard() {

    return <div>
        <p>{pokemon.name}</p>
        <p>{pokemon.weight} Kg</p>
        {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
        {pokemon.sprites && (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
    </div>

}