import React from 'react'
import Image from "next/image"
import {useRouter} from "next/router"

export default function PokemonPage({details}) {
  const router = useRouter()
  return (
    <div>
        <h1 className="flex items-center justify-center text-3xl font-semibold">Pokemon - {details.name}  </h1>

        <div className="flex items-center justify-center relative">
          <Image src={details.imageURL} width={200} height={200} />
        </div>

        <div className="flex items-center justify-center flex-col space-y-4">
          <p>Height: {details.stats.height_m}</p>
          <p>Weight: {details.stats.weight_kg}</p>
          <p>Attack: {details.stats.attack}</p>
        </div>
    </div>
  )
}

export async function getServerSideProps(context){
  // console.log("context", context.params)
  const pokemonName =  context.params.pokemonname
  const response = await fetch(`http://127.0.0.1:8000/pokemon/${pokemonName}`)
  let data = await response.json()
 
  const externalUrl = ` https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}` 

  const externalDataResponse = await fetch(externalUrl)
  const externalData = await externalDataResponse.json()

  const imageURL = externalData.sprites.front_shiny


  console.log("before", data)
  
  data = {...data, imageURL}
  console.log("data of single of pokemon", data)

  return {
    props: {
      details: data
    }
  }
}