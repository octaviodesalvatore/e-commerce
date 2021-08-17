import React, { useContext } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import styled from "styled-components";
import context from "./Context";
import Button from "@material-ui/core/Button";

function Confirm({ handleClose }) {
  const { cleanCart } = useContext(context);
  return (
    <MainContainer>
      <SpanClose onClick={handleClose}>
        <RiCloseCircleLine size={30} fill={"#fff"} />
      </SpanClose>
      <p>Estas seguro que quieres eliminar tu carrito</p>
      <ButtonContainer>
        <Button variant="outlined" color="primary" onClick={cleanCart}>
          Si
        </Button>
        <Button variant="outlined" color="secondary" onClick={handleClose}>
          No
        </Button>
      </ButtonContainer>
    </MainContainer>
  );
}

export default Confirm;

const MainContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  width: 400px;
  height: 400px;
  background-color: #201e1e;
  border-radius: 0.5rem;
  -webkit-box-shadow: 1px 6px 10px 3px rgba(0, 0, 0, 0.69);
  box-shadow: 1px 6px 10px 3px rgba(0, 0, 0, 0.69);

  p {
    color: #fff;
    font-size: 24px;
    text-align: center;
  }
  /* Button:nth-child(1) {
    background-color: #ffffff;
    color: #000000;
    padding: 8px 16px;
  }

  Button:nth-child(2) {
    background-color: #000000;
    color: #ffffff;
    padding: 8px 16px;
  } */
`;

const SpanClose = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  display: inline-block;

  Button {
    margin: 5px;
  }
`;
