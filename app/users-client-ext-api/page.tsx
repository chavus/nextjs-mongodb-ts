'use client'
import { useEffect, useState } from "react";

/* 
CLIENT COMPONENT FETCHING DATA FROM EXTERNAL API
*/

const BASE_URL = "https://pokeapi.co/api/v2"

async function getPokemons(){
    const res = await fetch(`${BASE_URL}/pokemon`)
    const resJson = await res.json()
    return resJson
}

interface Pokemon{
    name:string
}

export default function UsersClient(){

    const [pokemonsData, setPokemonData] = useState<Pokemon[] | null>(null)

    useEffect( () => {
        // fetch(`${BASE_URL}/users`).then((response)=> response.json())
        // .then((json)=>setUsersData(json.data))        
        (async ()=>{ // To use async/await
            const pokemons = await getPokemons()
            setPokemonData(pokemons.results)
        }
        )()
    },[])

    function add(){
        return 10
    }

    return (
        <>
        <ul>
            
            {pokemonsData ?
            pokemonsData.map((pokemon) =>
                ( <li>{pokemon.name}</li>
                    )
            
            ) :
            <h1>Loading</h1>
            }
        </ul>
        </>
    )
}