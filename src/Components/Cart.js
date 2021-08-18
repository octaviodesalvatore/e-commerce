import React, { useContext, useState } from "react";
import context from "./Context";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import { FaTrash } from "react-icons/fa";
import { BsArrowReturnLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import Backdrop from "@material-ui/core/Backdrop";
import Order from "./Order";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Confirm from "./Confirm";

function Cart() {
  const { cartItems, removeItem, totalPrice, cartCount } = useContext(context);

  const [confirmacion, setConfirmacion] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [openn, setOpenn] = React.useState(false);
  const [resumen, setResumen] = useState([]);
  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseConfirm = () => {
    setOpenn(false);
  };

  //Snackbars

  const [abierto, setAbierto] = React.useState(false);

  const manejarClick = () => {
    setAbierto(true);
  };

  const manejarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAbierto(false);
  };

  //

  return (
    <DivContainer>
      {cartItems.length > 0 ? (
        <>
          <h1>Carrito</h1>
          <>
            {cartItems.length > 0 &&
              cartItems.map((item, index) => {
                return (
                  <div key={index}>
                    <CardDiv>
                      <StyledDiv>
                        <h3>{item.item.name}</h3>

                        <img
                          src={item.item.image}
                          width="200"
                          height="100"
                          alt={item.item.name}
                        />

                        <p>
                          <b>Precio: </b>
                          {item.item.price} USD
                        </p>
                        <p>
                          <b>Cantidad: </b>
                          {item.qty}
                        </p>
                        <button
                          onClick={() => {
                            removeItem(index);
                            manejarClick();
                          }}
                        >
                          <FaTrash size={20} />
                        </button>
                      </StyledDiv>
                    </CardDiv>
                  </div>
                );
              })}
          </>
          <TotalDiv>
            <p>
              <b>Total: </b>
              {totalPrice} USD
            </p>
            <p>
              <b>Total de productos: </b>
              {cartCount}
            </p>
          </TotalDiv>

          <ButtonContainer>
            <CleanButton
              onClick={() => {
                setOpenn(true);
              }}
            >
              Vaciar Carrito
            </CleanButton>

            <StyledBackDrop open={openn}>
              <Confirm handleClose={handleCloseConfirm} />
            </StyledBackDrop>

            <CleanButton
              onClick={() => {
                setOpen(true);
              }}
            >
              <p>Continuar Compra</p>
            </CleanButton>

            <StyledBackDrop open={open}>
              <Order
                handleClose={handleClose}
                setConfirmacion={setConfirmacion}
                setResumen={setResumen}
              />
            </StyledBackDrop>
          </ButtonContainer>
        </>
      ) : (
        <>
          {confirmacion ? (
            <SuccesBuy>
              <h1>Compra exitosa</h1>
              <h3>Su numero de orden es: {confirmacion}</h3>
              <p>Recuerde guardar su numero de orden</p>
              <h2>Resumen de su compra:</h2>

              {resumen.length > 0 &&
                resumen.map((item, index) => {
                  return (
                    <div key={index}>
                      <CardDiv>
                        <StyledDiv>
                          <h3>{item.item.name}</h3>

                          <img
                            src={item.item.image}
                            width="200"
                            height="100"
                            alt={item.item.name}
                          />

                          <p>
                            <b>Precio: </b>
                            {item.item.price} USD
                          </p>
                          <p>
                            <b>Cantidad: </b>
                            {item.qty}
                          </p>
                        </StyledDiv>
                      </CardDiv>
                    </div>
                  );
                })}
              <Link to="/productos/todo">
                <ReturnButton>
                  Regresar a productos
                  <BsArrowReturnLeft />
                </ReturnButton>
              </Link>
            </SuccesBuy>
          ) : (
            <>
              <h1>Su carrito se encuentra vacio</h1>
              <Link to="/productos/todo">
                <ReturnButton>
                  Regresar a productos
                  <BsArrowReturnLeft />
                </ReturnButton>
              </Link>
            </>
          )}
        </>
      )}
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={abierto}
        autoHideDuration={1500}
        onClose={manejarClose}
        // message={"Producto agregado al carrito"}
      >
        <MuiAlert onClose={manejarClose} severity="error">
          Producto eliminado del carrito
        </MuiAlert>
      </Snackbar>
    </DivContainer>
  );
}

export default Cart;

const StyledBackDrop = styled(Backdrop)`
  z-index: 999 !important;
`;

const SuccesBuy = styled.div`
  text-align: center;

  h3 {
    font-size: 24px;
    color: ${(props) => props.theme.color};
    transition: all 0.5s ease;
  }

  p {
    margin-top: 10px;
    color: ${(props) => props.theme.color};
    transition: all 0.5s ease;
  }
`;

const DivContainer = styled.div`
  h1 {
    text-align: center;
    font-size: 48px;
    margin-top: 50px;
    margin-bottom: 50px;
    color: ${(props) => props.theme.color};
    transition: all 0.5s ease;
  }

  h2 {
    margin-top: 40px;
    font-size: 38px;
    color: ${(props) => props.theme.color};
    transition: all 0.5s ease;
  }
`;

const CardDiv = styled(Card)`
  text-align: center;
  margin: 10px;
  padding: 40px;
  margin: 0 auto;
  margin-top: 50px;
  max-width: 1000px;
  background-color: ${(props) => props.theme.backgroundCard} !important;
  transition: all 0.5s ease;

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

  img {
    object-fit: contain;
  }

  p {
    margin: 20px 0;
    color: ${(props) => props.theme.color};
  }
  h3 {
    color: ${(props) => props.theme.color};
    transition: all 0.5s ease;
  }

  Button:nth-child(5) {
    background-color: transparent;
    color: #e23838;
    border: none;
    cursor: pointer;
    padding: 8px;
    transition: all 50ms ease-in-out;

    &:hover {
      background-color: #f1f1f1;
      padding: 8px;
      border-radius: 50%;
    }
  }

  a {
    text-decoration: none;
  }
`;

const CleanButton = styled.button`
  border: none;
  font-size: 32px;
  background-color: ${(props) => props.theme.button};
  color: ${(props) => props.theme.buttonText};
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  display: block;
  margin-top: 50px;
  transition: all 200ms ease-in-out;
  margin-bottom: 50px;

  &:hover {
    background-color: #1a1919;
    color: #ffffff;
  }
`;

const ReturnButton = styled.button`
  border: none;
  font-size: 32px;
  background: ${(props) => props.theme.button};
  color: ${(props) => props.theme.buttonText};
  transition: all 0.5s ease;
  padding: 8px 16px;
  border-radius: 4px;
  margin: 0 auto;
  cursor: pointer;
  display: block;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  transition: all 200ms ease-in-out;

  &:hover {
    background-color: #1a1919;
    color: #ffffff;
  }
`;

const TotalDiv = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 50px;
  border-top: 1px solid grey;
  p {
    margin-top: 20px;
    display: inline;
    margin-right: 10px;
    font-size: 18px;
    color: ${(props) => props.theme.button};
    transition: all 0.5s ease;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;
