import React from "react";
import styled from "styled-components";

import Block from "../Block/Block";

const BlocksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 84vh;
  padding-left: 5%;
`;

const Blocks = ({ close }) => {
  let blocksArr = [];
  for (let index = 1; index < 101; index++) {
    blocksArr.push(index);
  }

  return (
    <div onClick={close}>
      <BlocksWrapper>
        {blocksArr.map((el) => (
          <Block key={el} value={el} />
        ))}
      </BlocksWrapper>
    </div>
  );
};

export default Blocks;
