import React, { useState, useContext } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import context from "./Context";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

// const [mostrar, setMostrar] = useState();

function ItemDetail(props) {
  const [valor, setValor] = useState(0);

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
    <div>
      <CardDiv>
        <StyledDiv>
          <div>
            <img
              src={props.image}
              width="300"
              height="200"
              alt="Product Karambit"
            />
          </div>

          <CenterDiv>
            <h3>{props.name}</h3>
            <p>
              <b> Precio: </b> {props.price}
            </p>

            <p>{props.description}</p>
          </CenterDiv>
          <StyledRightSide>
            <ItemCount stock={props.stock} valor={valor} setValor={setValor} />

            {valor === 0 ? (
              <></>
            ) : (
              <>
                <Button
                  variant="contained"
                  onClick={() => {
                    addItem(props.item, valor);
                    setValor(0);
                    handleClick();
                  }}
                >
                  Agregar al Carrito
                </Button>
                <Link to="/cart">
                  <ButtonCompra>Terminar Compra</ButtonCompra>
                </Link>
              </>
            )}
          </StyledRightSide>
        </StyledDiv>
      </CardDiv>
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
    </div>
  );
}

export default ItemDetail;

const StyledRightSide = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const CardDiv = styled(Card)`
  text-align: center;
  margin: 10px;
  padding: 40px;
  margin: 0 auto;
  margin-top: 50px;
  max-width: 1200px;
  background-color: ${(props) => props.theme.backgroundCard} !important;
  color: ${(props) => props.theme.color};

  &:hover {
    -webkit-box-shadow: 0px 7px 15px 2px rgba(0, 0, 0, 0.44);
    box-shadow: 0px 7px 15px 2px rgba(0, 0, 0, 0.44);
    transition: all 200ms ease-in-out;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    margin-bottom: 20px;
    color: ${(props) => props.theme.color};
  }

  img {
    object-fit: contain;
    border-right: 1px solid #999;
  }

  p {
    margin: 20px 0;
    color: ${(props) => props.theme.color};
  }

  Button:nth-child(2) {
    margin-top: 15px;
    background-color: #000000;
    color: #ffffff;
  }

  a {
    text-decoration: none;
  }
`;

const CenterDiv = styled.div`
  width: 500px;
`;

const ButtonCompra = styled.button`
  display: block;
  margin-top: 15px;
  color: #ffffff;
  background-color: #666666;
  border: none;
  text-align: center;
  display: flex;
  font-size: 0.875rem;
  font-weight: 500;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  border-radius: 4px;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  padding: 6px 16px;
  cursor: pointer;
  transition: all 250ms ease-in-out;

  &:hover {
    -webkit-box-shadow: 2px 6px 8px 0px rgba(0, 0, 0, 0.36);
    box-shadow: 2px 6px 8px 0px rgba(0, 0, 0, 0.36);
  }
`;
