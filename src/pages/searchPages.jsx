
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardMaterial from "../component/cardMaterial";
import { Grid, Grow } from "@mui/material";
import Layout from "../component/Layout";
import { Button } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Quiz from "./Quiz";

function searchPages() {
  const [pokemon, setPokemon] = useState([]);
  const [nomePokemon, setNomePokemon] = useState("");
  const [ricercaFatta, setRicercaFatta] = useState(false);
  async function caricaPokemon() {
    const risultato = await fetch(
      "https://pokeapi.co/api/v2/pokemon/" + nomePokemon
    );
    const dati = await risultato?.json();
    console.log(dati);
    setPokemon(dati);
  }

  // function testSplit(){
  //   const stringa1= "https://pokeapi.co/api/v2/pokemon/257/"
  //   const stringa2="https://pokeapi.co/api/v2/serie2/pokemon/257/"

  //   const arrayStringa1= stringa1.split("/")
  //   const arrayStringa2= stringa2.split("/")

  //   console.log(arrayStringa1[arrayStringa1.length-2],arrayStringa2[arrayStringa2.length-2]);

  // }

  return (
    <Layout>
      <Grid container spacing={2}>
        <h1>Welcome to the index page!!</h1>

        <input
          type="text"
          onChange={(e) => {
            setNomePokemon(e.target.value);
            setRicercaFatta(false);
          }}
        ></input>
        <Button variant="contained" onClick={() => {caricaPokemon();
          setRicercaFatta(true);
        }}>
          Cerca pokemon
        </Button>

        {/* { pokemon.map((item, index) => {
          console.log(item.pokemon.url);
          const ris = item.pokemon.url.split("/");

          console.log(ris); */}

        {!!pokemon?.id ? (
          <Grid size={6}>
            <CardMaterial
              id={pokemon?.id}
              name={pokemon?.name}
              image={
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" +
                pokemon?.id +
                ".png"
              }
            />
          </Grid>
        ):(nomePokemon.length>0 && ricercaFatta ? <h1>Pokemon non trovato</h1> : <h1>Fai la tua ricerca</h1>)}
      </Grid>
    </Layout>
  );
}
export default searchPages;
