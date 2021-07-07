import React from "react";
import styled from "styled-components";

function ItemListContainer(props) {
  return <Title>{props.message}</Title>;
}

export default ItemListContainer;

const Title = styled.h1`
  display: flex;
  position: relative;
  justify-content: center;
  font-size: 48px;
  margin-top: 50px;
`;
