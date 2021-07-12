import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import ItemCount from "./ItemCount";

function Item(props) {
  return (
    <div>
      <CardDiv>
        <StyledDiv>
          <h3>{props.name}</h3>
          <img
            src={props.img}
            width="300"
            height="200"
            alt="Product Karambit"
          />
          <p>
            <b>Precio: </b>
            {props.price}
          </p>
          <ItemCount stock={props.stock} />
          <Button variant="contained">Agregar al Carrito</Button>
        </StyledDiv>
      </CardDiv>
    </div>
  );
}

export default Item;

const CardDiv = styled(Card)`
  text-align: center;
  margin: 10px;
  padding: 40px;

  &:hover {
    -webkit-box-shadow: 0px 7px 15px 2px rgba(0, 0, 0, 0.44);
    box-shadow: 0px 7px 15px 2px rgba(0, 0, 0, 0.44);
    transition: all 200ms ease-in-out;
  }
`;

const StyledDiv = styled.div`
  h3 {
    margin-bottom: 20px;
  }

  img {
    object-fit: contain;
  }

  Button:nth-child(5) {
    margin-top: 15px;
    background-color: #2968c8;
    color: white;
  }
`;
