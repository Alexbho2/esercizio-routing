import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import users from "../data/user.json";

function About() {
  const params = useParams();
  const [pokemon, setPokemon] = useState();

  async function trovaPokemon() {
    const pokemonTrovato = await fetch(
      "https://pokeapi.co/api/v2/pokemon/" + params.id
    );

    const dati = await pokemonTrovato.json();
    setPokemon(dati);
    console.log(dati);
  }

  useEffect(() => {
    trovaPokemon();
  }, [params]);

  return (
    <>
      <title>la pagina info di {pokemon?.name}</title>
      <div></div>
      <h1>N°Pokedex: {params.id}</h1>
      <h1>NOME: {pokemon?.name}</h1>
      <h1>ALTEZZA: {pokemon?.height / 10 + " M"}</h1>
      {pokemon?.types.map((item, index) => {
        return (
          <h1>
            TIPO{index + 1}:{item.type.name.toUpperCase()}
          </h1>
        );
      })}
      {pokemon?.abilities.map((item, index) => {
        return <h1>{item.ability.name}</h1>;
      })}
    </>
  );
}

export default About;
