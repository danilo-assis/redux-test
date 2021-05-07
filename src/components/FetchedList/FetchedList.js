function FetchedList({ names }) {
  return (
    <>
      {names.map((name) => (
        <div>{name}</div>
      ))}
    </>
  );
}

export default FetchedList;
