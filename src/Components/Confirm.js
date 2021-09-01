import React, { useContext } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import styled from "styled-components";
import context from "../context";
import Button from "@material-ui/core/Button";

function Confirm({ handleClose }) {
  const { cleanCart } = useContext(context);
  return (
    <MainContainer>
      <SpanClose onClick={handleClose}>
        <RiCloseCircleLine size={30} fill={"#000000"} />
      </SpanClose>
      <p>Are you sure you want to delete your cart?</p>
      <ButtonContainer>
        <Button variant="outlined" color="primary" onClick={cleanCart}>
          Yes
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
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 400px;
  height: 200px;
  background-color: #f3f3f3;
  border-radius: 0.5rem;
  -webkit-box-shadow: 1px 6px 10px 3px rgba(0, 0, 0, 0.69);
  box-shadow: 1px 6px 10px 3px rgba(0, 0, 0, 0.69);

  p {
    color: #000000;
    font-size: 24px;
    text-align: center;
    margin-top: 40px;
    margin-bottom: 20px;
    max-width: 320px;
  }
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
