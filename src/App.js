import React, { useState } from "react";

import FetchButton from "./components/FetchButton/FetchButton";
import FetchedList from "./components/FetchedList/FetchedList";

function App() {
  const ENDPOINT = "https://pokeapi.co/api/v2/type/16/";

  const [names, setNames] = useState([]);

  const handleFetchClick = () => {
    fetch(ENDPOINT)
      .then((response) => response.json())
      .then((data) => {
        setNames(
          data.pokemon.map((currentPokemon) => currentPokemon.pokemon.name)
        );
      })
      .catch(() => {
        console.log("Error on fetch");
      });
  };

  return (
    <>
      <FetchButton handleClick={handleFetchClick} />
      <FetchedList names={names} />
    </>
  );
}

export default App;
