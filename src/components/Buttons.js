const Buttons = () => {
  return (
    <div>
      {displaySats.map((sat, id) => {
        return (
          <button onClick={() => filterByType(sat)} key={id}>
          {sat} Orbit
          </button>
        );
      })}
      <button onClick ={() => setSat: "setSat"}>All Orbits</button>
      </div>
  );
};

export default Buttons;