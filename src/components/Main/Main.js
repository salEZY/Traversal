import React, { useState } from "react";
import styled from "styled-components";

const Main = () => {
  const [start, setStart] = useState(false);

  const startHandler = () => {
    setStart(true);
  };

  const stopHandler = () => {
    setStart(false);
  };

  const Wrapper = styled.main`
    min-height: 84vh;
    text-align: center;
  `;
  const Button = styled.button`
    margin-top: 50px;
    width: 30%;
    padding: 1rem;
    font-size: 2rem;
    font-weight: bolder;
    color: tomato;
    background: #282c34;
    border: 0;
    outline: 0;
    border: 5px solid tomato;
    border-radius: 5px 10px 50px 5px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  `;

  return (
    <Wrapper>
      {start ? (
        <p onClick={stopHandler}>BLOCKS</p>
      ) : (
        <Button className="start-button" onClick={startHandler}>
          START
        </Button>
      )}
    </Wrapper>
  );
};

export default Main;
