import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
// import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

function Item(props) {
  return (
    <CardDiv>
      <StyledDiv>
        <h3>{props.name}</h3>

        <img src={props.img} width="300" height="200" alt={props.name} />

        <p>
          <b>Precio: </b>
          {props.price}
        </p>

        {/* <ItemCount stock={props.stock} /> */}
        <ButtonDiv>
          <Link to={`/productos/item/${props.id}`}>
            <Button variant="contained">Ver producto</Button>
          </Link>
          <Button variant="contained">Agregar al Carrito</Button>
        </ButtonDiv>
      </StyledDiv>
    </CardDiv>
  );
}

export default Item;

const CardDiv = styled(Card)`
  text-align: center;
  margin: 10px;
  padding: 40px;
  max-width: 500px;

  &:hover {
    -webkit-box-shadow: 0px 7px 15px 2px rgba(0, 0, 0, 0.44);
    box-shadow: 0px 7px 15px 2px rgba(0, 0, 0, 0.44);
    transition: all 200ms ease-in-out;
  }
`;

const StyledDiv = styled.div`
  h3 {
    margin-bottom: 40px;
  }

  img {
    object-fit: contain;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
  }

  Button:nth-child(1) {
    margin-top: 15px;
    background-color: #ffffff;
    color: #000000;
  }

  Button:nth-child(2) {
    margin-top: 15px;
    background-color: #000000;
    color: #ffffff;
  }
`;
