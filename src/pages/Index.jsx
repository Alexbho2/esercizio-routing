import React,{useState} from "react";
import { Link } from "react-router-dom";
import CardMaterial from "../component/cardMaterial";
import { Grid, Grow } from "@mui/material";
import Layout from "../component/Layout";
import { Button } from "@mui/material";

function Index() {
  const [pokemon, setPokemon] = useState([]);
  const [limit, setLimit] = useState(20);

  async function caricaPokemon() {
    const risultato = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=" + limit
    );
    const dati = await risultato.json();
    setPokemon(dati.results);
  }

  return (
    <Layout>
      <Grid container spacing={2}>
        <h1>Welcome to the index page!!</h1>
        <input type="number" onChange={(e) => setLimit(e.target.value)} />
        <Button variant="contained" onClick={() => caricaPokemon()}>
          Pokemon
        </Button>
        {pokemon.map((item, index) => {
          return (
            <Grid size={6}>
              <CardMaterial
                id={index + 1}
                name={item.name}
                image={
                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" +
                  (index + 1) +
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
