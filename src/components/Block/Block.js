import React from "react";
import styled from "styled-components";

const SingleBlock = styled.div`
  width: 9%;
  height: 9%;
  color: white;
  background: tomato;
  border: 1px solid white;
`;

const Block = ({ value }) => {
  return (
    <SingleBlock>
      <p style={{ verticalAlign: "middle", fontSize: "1.3rem" }}>{value}</p>
    </SingleBlock>
  );
};

export default Block;
