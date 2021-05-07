import { useDispatch } from "react-redux";
import { insertName } from "./redux/modules/dataList";

import FetchButton from "./components/FetchButton/FetchButton";
import FetchedList from "./components/FetchedList/FetchedList";

function App() {
  const dispatch = useDispatch();

  return (
    <>
      <FetchButton />
      <button onClick={() => dispatch(insertName("Danilo"))}>add name</button>
      <FetchedList />
    </>
  );
}

export default App;
