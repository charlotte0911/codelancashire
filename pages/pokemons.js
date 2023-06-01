import React from "react";
import Head from "next/head"
import pokemons from "@/assets/sampledataset.json"
import { PokemonList } from "@/components/PokemonList";
import Title from "@/components/Title";


export default function Pokemons({pokemonsList}){
    return(
    <>
        <Head>
            <title>Pokemons</title>
            </Head>
            <Title>
                <span className="bg-yellow-400 border-radius 10px justify-center" >
                    List of Pokemons
                </span>
                
                </Title>
            
            
            <PokemonList number={pokemonsList.key}    
            pokemons={pokemonsList}  /></>
    )
}

export async function getServerSideProps(context){
    console.log("pokemon", pokemons)

    // fetch(url).then(res => res.json()).then(data =>{})

    return {
    props: {
        pokemonsList:pokemons

}
}
}