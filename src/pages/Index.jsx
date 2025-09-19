import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardMaterial from "../component/cardMaterial";
import { Grid, Grow } from "@mui/material";
import Layout from "../component/Layout";
import { Button } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Quiz from "./Quiz";
import searchPages from "./searchPages";

function Index() {
  const [pokemon, setPokemon] = useState([]);
  const [limit, setLimit] = useState(20);
  const [tipiPokemon, setTipipokemon] = useState([]);
  const [targetValue, setTargetValue] = useState(0);

  async function caricaTipi() {
    const risposta = await fetch("https:pokeapi.co/api/v2/type/");
    const tipi = await risposta.json();
    setTipipokemon(tipi.results);
    console.log(tipi.results);
  }

  useEffect(() => {
    caricaTipi();
  }, []);

  useEffect(() => {
    cercaPokemonTipo();
  }, [targetValue]);

  async function cercaPokemonTipo() {
    const risposta = await fetch("https:pokeapi.co/api/v2/type/" + targetValue);
    const tipi = await risposta.json();
    setPokemon(tipi.pokemon);
    console.log(tipi);
  }
  async function caricaPokemon() {
    const risultato = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=" + limit
    );
    const dati = await risultato.json();
    setPokemon(dati.pokemon);
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
      <div align-item="center">
        <Link to={"/quiz"}>
          <Button variant="contained">vai al quiz</Button>
        </Link>
      </div>

      <Grid container spacing={2}>
        <h1>Welcome to the index page!!</h1>

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={targetValue}
          label="Age"
          onChange={(item) => {
            setTargetValue(item.target.value);
          }}
        >
          {tipiPokemon.map((item, index) => {
            return <MenuItem value={item.name}>{item.name}</MenuItem>;
          })}
        </Select>

        {pokemon.map((item, index) => {
          console.log(item.pokemon.url);
          const ris = item.pokemon.url.split("/");

          console.log(ris);

          return (
            <Grid size={6}>
              <CardMaterial
                id={ris[ris.length - 2]}
                name={item.name || item.pokemon.name}
                image={
                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" +
                  ris[ris.length - 2] +
                  ".png"
                }
              />
            </Grid>
          );
        })}
      </Grid>
    </Layout>
  );
}

export default Index;
