import React from "react";
import ItemList from "./ItemList";
import styled from "styled-components";

function ItemListContainer(props) {
  return (
    <>
      <Title>{props.message}</Title>
      <ItemList />
    </>
  );
}

export default ItemListContainer;

const Title = styled.h1`
  text-align: center;
  font-size: 48px;
  margin-top: 50px;
`;
