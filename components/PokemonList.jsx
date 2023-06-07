import { useState } from "react";
import React from "react";
import Link from "next/link";
import Pagination from "./Pagination";

const colorMap = {
  fire: "bg-red-300",
  water: "bg-blue-300",
  grass: "bg-green-300",
  normal: "bg-gray-300",
  bug: "bg-green-300",
  poison: "bg-purple-300",
  electric: "bg-yellow-300",
  ground: "bg-yellow-300",
  fairy: "bg-purple-300",
  fighting: "bg-red-300",
  psychic: "bg-orange-300",
  rock: "bg-gray-300",
  ghost: "bg-purple-300",
  ice: "bg-blue-300",
  dragon: "bg-blue-300",
  dark: "bg-gray-300",
  steel: "bg-gray-300",
  flying: "bg-blue-300",
};

function PokemonListItem({ pokemon }) {
  return (
    <div className="grid items-end bg-purple-500  m-2  my-5 w-[210px] h-[200px]">
      <Link href={`/pokemons/${pokemon.name}`}>
        <div className="text-black text-xl bg-purple-200  text-center p-1">
          {pokemon.name}
        </div>
        <div className={`h-[120px] m-3 ${colorMap[pokemon.type1]}`}>
          <div className="text-black mt-8">
          
        </div>
        <div className="h-[24px] bg-purple-200">
          <span
            className={`text-black grid place-items-center rounded-b-lg ${
              colorMap[pokemon.type1]
            }`}
          ></span>
        </div>
      </Link>
    </div>
  );
}

export default function PokemonList({ pokemons }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredPokemons, setFilteredPokemons] = useState(pokemons);
  const itemsPerPage = 20;

  const filterType = (type) => {
    const filtered = type
      ? pokemons.filter((item) => item.type1 === type || item.type2 === type)
      : pokemons;
    setFilteredPokemons(filtered);
    setCurrentPage(1);
  };

  const filterLegendary = () => {
    const filtered = pokemons.filter((item) => item.is_legendary);
    setFilteredPokemons(filtered);
    setCurrentPage(1);
  };

  const filterSearch = (searchValue) => {
    const filtered = searchValue
      ? pokemons.filter((item) =>
          item.name.toLowerCase().includes(searchValue.toLowerCase())
        )
      : pokemons;
    setFilteredPokemons(filtered);
    setCurrentPage(1);
  };

  function clearInput() {
    document.getElementById("searchInput").value = "";
    filterType("");
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredPokemons.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  return (
    <>
      <div className="flex items-center justify-left mb-1">
        <input
          id="search"
          className="p-2 w-36 h-8 m-2 text-black bg-purple-200"
          type="text"
          onChange={(e) => filterSearch(e.target.value)}
        ></input>
        <button
          onClick={() => clearInput()}
          className="w-24 m-2  text-black bg-purple-300"
        >
          Clear
        </button>
        <button
          onClick={() => filterType("")}
          className="w-20 m-2 text-gray-800 bg-gray-300"
        >
          All
        </button>
      </div>
      <div className="grid justify-items-center xl:w-[1250px] lg:w-[1010px] md:w-[760px] sm:[620px] content-center bg-amber-300  xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 p-3 m-2">
        {currentItems.length > 0 ? (
          currentItems.map((pokemon, index) => (
            <PokemonListItem pokemon={pokemon} key={index} />
          ))
        ) : (
          <h1 className="text-xl text-black"> Nothing Found </h1>
        )}
      </div>
      <div className="flex">
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={filteredPokemons.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
}
