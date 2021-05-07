import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNames, insertName } from "./redux/modules/dataList";

import FetchButton from "./components/FetchButton/FetchButton";
import FetchedList from "./components/FetchedList/FetchedList";

function App() {
  const dispatch = useDispatch();
  const storeDataList = useSelector((state) => state.dataList);
  const names = storeDataList.names;

  return (
    <>
      <FetchButton handleClick={() => dispatch(fetchNames())} />
      <button onClick={() => dispatch(insertName("Danilo"))}>add name</button>
      <FetchedList names={names} />
    </>
  );
}

export default App;
