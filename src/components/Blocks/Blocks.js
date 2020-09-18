import React from "react";
import styled from "styled-components";

const BlocksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 84vh;
  padding-left: 5%;
`;

const SingleBlock = styled.div`
  width: 9%;
  height: 9%;
  color: white;
  background: ${(props) => (props.primary ? "green" : "tomato")};
  border: 1px solid white;
`;

const Paragraph = styled.p`
  vertical-align: middle;
  font-size: 1.3rem;
`;

const Blocks = ({ close }) => {
  let blocksArr = [];
  for (let index = 1; index < 101; index++) {
    blocksArr.push(index);
  }

  return (
    <div onClick={close}>
      <BlocksWrapper>
        {blocksArr.map((el) => {
          if (el === 31 || el === 39) {
            return (
              <SingleBlock primary key={el}>
                <Paragraph>{el}</Paragraph>
              </SingleBlock>
            );
          }
          return (
            <SingleBlock key={el}>
              <Paragraph>{el}</Paragraph>
            </SingleBlock>
          );
        })}
      </BlocksWrapper>
    </div>
  );
};

export default Blocks;
