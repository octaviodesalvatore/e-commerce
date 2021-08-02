import React, { useContext } from "react";
import context from "./Context";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import { FaTrash } from "react-icons/fa";
import { BsArrowReturnLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

function Cart() {
  const { cartItems, cleanCart, removeItem, totalPrice, cartCount } =
    useContext(context);

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
          <CleanButton onClick={cleanCart}>Vaciar Carrito</CleanButton>
        </>
      ) : (
        <>
          <h1>Su carrito se encuentra vacio</h1>
          <Link to="/productos">
            <ReturnButton>
              Regresar a productos
              <BsArrowReturnLeft />
            </ReturnButton>
          </Link>
        </>
      )}
    </DivContainer>
  );
}

export default Cart;

const DivContainer = styled.div`
  h1 {
    text-align: center;
    font-size: 48px;
    margin-top: 50px;
    margin-bottom: 50px;
  }
`;

const CardDiv = styled(Card)`
  background-color: #923333;
  text-align: center;
  margin: 10px;
  padding: 40px;
  margin: 0 auto;
  margin-top: 50px;
  max-width: 1000px;

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
  }

  Button:nth-child(5) {
    background-color: #fff;
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
  background-color: #000;
  color: #fff;
  padding: 8px 16px;
  border-radius: 4px;
  margin: 0 auto;
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
  background-color: #000;
  color: #fff;
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
  }
`;
