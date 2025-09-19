import React, { useEffect, useState } from "react";
import About from "./About";
import Index from "./Index";
import Contact from "./Contact";
import Button from "../component/Button";
import Alert from "@mui/material/Alert";
import "../index.css";

function Quiz() {
  const [punteggio, setPunteggio] = useState(0);
  const [pokemonId, setPokemonId] = useState([]);
  const [rispostaCorretta, setRispostaCorretta] = useState();
  const [alertType, setAlertType] = useState(0);

  function generaNumeri() {
    let arrayId = [];

    for (let i = 0; i < 4; i++) {
      arrayId.push(Math.round(Math.random() * 1000));
    }
    setRispostaCorretta(arrayId[Math.round(Math.random() * 3)]);
    setPokemonId(arrayId);
  }
  useEffect(() => {
    setTimeout(() => {
      setAlertType(0);
    }, 2000);

    setTimeout(() => {
      generaNumeri();
    }, 3000);
  }, [punteggio]);
  function controllaRisposta(id) {
    if (rispostaCorretta === id) {
      setPunteggio(punteggio + 1);
      setAlertType(1);
    } else {
      setPunteggio(punteggio - 2);
      setAlertType(2);
    }
  }

  return (
    <>
      <h1>quiz pages</h1>
      <h1>il tuo punteggio {punteggio}</h1>
      <img
        className={alertType === 0 && "pokemon-nascosto"}
        src={
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" +
          rispostaCorretta +
          ".png"
        }
      ></img>{" "}
      <br></br>
      {pokemonId.map((item) => {
        return (
          <Button
            id={item}
            onClick={() => {
              if (alertType === 0) {
                controllaRisposta(item);
              }
            }}
          ></Button>
        );
      })}
      {alertType === 1 && (
        <Alert severity="success">This is a success Alert.</Alert>
      )}
      {alertType === 2 && (
        <Alert severity="error">This is an error Alert.</Alert>
      )}
    </>
  );
}

export default Quiz;
