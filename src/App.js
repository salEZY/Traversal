import React, { useState } from "react";
import styled from "styled-components";

import Main from "./components/Main/Main";

const Header = styled.header`
  background-color: #282c34;
  height: 8vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  font-size: calc(10px + 2vmin);
  color: tomato;
`;

const Footer = styled.footer`
  background-color: #282c34;
  height: 8vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: tomato;
`;

const CloseButton = styled.button`
  width: 20%;
  padding: 8px;
  font-size: 1.2rem;
  font-weight: bolder;
  color: tomato;
  background: #282c34;
  border: 0;
  outline: 0;
  border: 4px solid tomato;
  border-radius: 5px 10px 50px 5px;
  cursor: pointer;
`;

function App() {
  const [start, setStart] = useState(false);

  const startHandler = () => {
    setStart(true);
  };

  const stopHandler = () => {
    setStart(false);
  };
  return (
    <>
      <Header>
        <h1>Traversal</h1>
        {start && <CloseButton onClick={stopHandler}>Stop</CloseButton>}
      </Header>
      <Main startHandler={startHandler} start={start} />
      <Footer>
        <p>bobicaleks@yahoo.com</p>
      </Footer>
    </>
  );
}

export default App;
