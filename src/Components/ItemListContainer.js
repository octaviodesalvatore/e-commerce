import React from "react";
import ItemList from "./ItemList";
import styled from "styled-components";

function ItemListContainer(props) {
  return (
    <DivContainer>
      <Title>{props.message}</Title>
      <ItemList />
    </DivContainer>
  );
}

export default ItemListContainer;

const DivContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 48px;
  margin-top: 50px;
`;
