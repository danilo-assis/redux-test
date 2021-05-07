import React, { useEffect, useState } from "react";

import FetchedList from "./components/FetchedList/FetchedList";

function App() {
  const ENDPOINT = "https://pokeapi.co/api/v2/type/16/";

  const [names, setNames] = useState([]);

  useEffect(() => {
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
  }, []);

  return <FetchedList names={names} />;
}

export default App;
