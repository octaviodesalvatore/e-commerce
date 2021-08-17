import React, { useContext, useState } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";
import context from "./Context";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
// import MuiAlert from "@material-ui/lab/Alert";
function Item(props) {
  const { addItem } = useContext(context);
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <CardDiv>
      <StyledDiv>
        <h3>{props.name}</h3>

        <img src={props.img} width="300" height="200" alt={props.name} />

        <p>
          <b>Precio: </b>
          {props.price} USD
        </p>

        {/* <ItemCount stock={props.stock} /> */}
        <ButtonDiv>
          <Link to={`/productos/item/${props.id}`}>
            <Button variant="contained">Ver producto</Button>
          </Link>
          <Button
            variant="contained"
            onClick={() => {
              addItem(props.item, 1);
              handleClick();
            }}
          >
            Agregar al Carrito
          </Button>
        </ButtonDiv>
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={open}
          autoHideDuration={1500}
          onClose={handleClose}
          // message={"Producto agregado al carrito"}
        >
          <MuiAlert onClose={handleClose} severity="success">
            Producto agregado al carrito
          </MuiAlert>
        </Snackbar>
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

  @media (max-width: 1326px) {
    Button:nth-child(1) {
      padding: 4px 14px;
    }

    Button:nth-child(2) {
      padding: 4px 14px;
    }
  }
`;
