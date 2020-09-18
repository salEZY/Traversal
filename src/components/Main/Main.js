import React from "react";
import styled from "styled-components";

import Blocks from "../Blocks/Blocks";

const Wrapper = styled.main`
  height: 84vh;
  width: 100%;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20%;
`;

const Button = styled.button`
  width: 30%;
  padding: 1rem;
  margin: 0 auto;
  font-size: 2rem;
  font-weight: bolder;
  color: tomato;
  background: #282c34;
  border: 0;
  outline: 0;
  border: 5px solid tomato;
  border-radius: 5px 10px 50px 5px;
  transition: all 0.25s ease-in-out;
  cursor: pointer;

  ${ButtonWrapper}:hover & {
    color: #282c34;
    background: tomato;
    border: 5px solid #282c34;
  }
`;

const Main = ({ startHandler, start }) => {
  return (
    <Wrapper>
      {start ? (
        <Blocks />
      ) : (
        <ButtonWrapper>
          <Button className="start-button" onClick={startHandler}>
            Start
          </Button>
        </ButtonWrapper>
      )}
    </Wrapper>
  );
};

export default Main;
