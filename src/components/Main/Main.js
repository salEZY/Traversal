import React, { useState } from "react";

import "./Main.css";

const Main = () => {
  const [start, setStart] = useState(false);

  const startHandler = () => {
    setStart(true);
  };

  const stopHandler = () => {
    setStart(false);
  };

  return (
    <main>
      {start ? (
        <p onClick={stopHandler}>BLOCKS</p>
      ) : (
        <button className="start-button" onClick={startHandler}>
          START
        </button>
      )}
    </main>
  );
};

export default Main;
