import React from 'react';
import PokeCard from "@/components/PokeCard";
import HomeCss from '../styles/Home.module.css' // Importa el módulo CSS para el estilo


const PokeList = async () => {
    // Hace una petición a la API de Pokemon
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=0.`)
    // Convierte la respuesta en JSON
    const data = await response.json()
    const pokemonList = data.results

    const allPokemonData = await Promise.all(pokemonList.map(async (pokemon) => {
        const response = await fetch(pokemon.url)
        const data = await response.json()
        return data
    }))

    console.log(pokemonList)

    return (
        <div className={HomeCss.columnas}>
            <ul>
                {
                    allPokemonData.map((pokemon) => (
                    <li key={pokemon.id}>
                        <PokeCard pokemon={pokemon}/>
                    </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default PokeList;