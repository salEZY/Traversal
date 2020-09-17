import React from "react";
import styled from "styled-components";

import Main from "./components/Main/Main";

function App() {
  const Header = styled.header`
    background-color: #282c34;
    height: 8vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  `;

  const Footer = styled.footer`
    background-color: #282c34;
    height: 8vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  `;

  return (
    <div className="App">
      <Header>
        <h1>Traversal</h1>
      </Header>
      <Main />
      <Footer>
        <p>bobicaleks@yahoo.com</p>
      </Footer>
    </div>
  );
}

export default App;
