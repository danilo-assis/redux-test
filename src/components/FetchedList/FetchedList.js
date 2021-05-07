import { useSelector } from "react-redux";

function FetchedList() {
  const storeDataList = useSelector((state) => state.dataList);
  const names = storeDataList.names;

  return (
    <>
      {names.map((name) => (
        <div key={name}>{name}</div>
      ))}
    </>
  );
}

export default FetchedList;
