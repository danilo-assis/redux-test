import { useDispatch } from "react-redux";
import { fetchNames } from "../../redux/modules/dataList";

function FetcheButton() {
  const dispatch = useDispatch();

  return <button onClick={() => dispatch(fetchNames())}>Fetch data</button>;
}

export default FetcheButton;
