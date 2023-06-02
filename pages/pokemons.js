import React, { useState } from 'react'
import Head from 'next/head'
import PokemonList from '@/components/PokemonList'
import Title from '@/components/Title'

export default function Pokemons({ pokemonsList }) {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  return (
    <div>
      {pokemonsList.length === 0 && (
        <p className="text-white text-md">Wait...</p>
      )}
      {pokemonsList.length > 0 && (
        <>
          <Head>
            <title>This is Pokedex</title>
          </Head>
          <Title label="Pokemon List" />
          <PokemonList
            pokemons={pokemonsList}
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
          />
        </>
      )}
    </div>
  )
}

export async function getServerSideProps(context) {
  const response = await fetch("https://pokedexapi-93d8.onrender.com/pokemon/")
  const data = await response.json()

  return {
    props: {
      pokemonsList: data,
    },
  }
}
