import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeNames, insertName } from "./redux/modules/dataList";

import FetchButton from "./components/FetchButton/FetchButton";
import FetchedList from "./components/FetchedList/FetchedList";

function App() {
  const ENDPOINT = "https://pokeapi.co/api/v2/type/16/";

  const dispatch = useDispatch();
  const [names, setNames] = useState(['nome 1', 'nome 2']);

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
      <button onClick={() => dispatch(storeNames(names))}>set names</button>
      <button onClick={() => dispatch(insertName('Danilo'))}>add name</button>
      <FetchButton handleClick={handleFetchClick} />
      <FetchedList names={names} />
    </>
  );
}

export default App;
