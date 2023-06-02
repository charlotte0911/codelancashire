import React from "react";
import Link from "next/link";
import Image from "next/image";
import pokemons from "@/assets/sampledataset.json";

export default function Return(pokemons) {
  return <Link href={"http://localhost:3000/pokemons"}>Home</Link>;
}
