import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import pokemons from "@/assets/sampledataset.json";
import { useRouter } from "next/router";

function PokemonListItem({ pokemon, test }) {
  return (
    <Link href={`/pokemons/${pokemon.name}`}>
      <li
        className={`rounded-sm flex items-center justify-center border border-black p-5 space-x-4 border-radius 10px ${ColorMap(
          pokemon.type1
        )}`}
      >
        <span className="flex items-center justify-center text-white text-xl border-radius 50px">
          {test}. {pokemon.name}
        </span>
      </li>
    </Link>
  );
}

function ColorMap(pokemonType) {
  switch (pokemonType) {
    case "grass":
      return "bg-green-500";
    case "poison":
      return "bg-yellow-500";
    case "water":
      return "bg-blue-500";
    case "bug":
      return "bg-red-500";
    default:
      return "bg-gray-500";
  }
}

export function PokemonList({ pokemons }) {
  return (
    <ul>
      {pokemons.length > 0 ? (
        pokemons.map((pokemon, index) => (
          <PokemonListItem test={index} key={index} pokemon={pokemon} />
        ))
      ) : (
        <h1 className="text-3xl text-gray-600"> No pokemons in database </h1>
      )}
    </ul>
  );
}

export async function getServerSideProps(context) {
  // console.log("context", context.params)
  const pokemonName = context.params.pokemonname;
  const response = await fetch(`http://127.0.0.1:8000/pokemon/${pokemonName}`);
  let data = await response.json();
  const externalUrl = ` https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`;

  const externalDataResponse = await fetch(externalUrl);
  const externalData = await externalDataResponse.json();

  const imageURL = externalData.sprites.front_shiny;

  console.log("before", data);

  data = { ...data, imageURL };
  console.log("data of single of pokemon", data);

  return {
    props: {
      details: data,
    },
  };
}
