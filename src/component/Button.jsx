import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import users from "../data/user.json";
import { Button } from "@mui/material";

function ButtonPokemon(props) {
  const [pokemon, setPokemon] = useState();
  async function trovaPokemon() {
    const pokemonTrovato = await fetch(
      "https://pokeapi.co/api/v2/pokemon/" + props.id
    );

    const dati = await pokemonTrovato.json();
    setPokemon(dati);
    console.log(dati);
  }

  useEffect(() => {
    trovaPokemon();
  }, [props]);

  return <Button onClick={props.onClick}>{pokemon?.name}</Button>;
}

export default ButtonPokemon;
