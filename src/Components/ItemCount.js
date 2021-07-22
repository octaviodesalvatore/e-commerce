import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

function ItemCount(props) {
  const [valor, setValor] = useState(1);

  return (
    <div>
      <p>
        <b>Stock disponible: </b>
        {props.stock}
      </p>
      <StyledDiv>
        <Button
          size="small"
          variant="contained"
          onClick={() => {
            if (valor > 1) {
              setValor(valor - 1);
            }
          }}
        >
          -
        </Button>
        <p>{valor}</p>
        <Button
          size="small"
          variant="contained"
          onClick={() => {
            if (valor < props.stock) {
              setValor(valor + 1);
            }
          }}
        >
          +
        </Button>
      </StyledDiv>
    </div>
  );
}

export default ItemCount;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    padding: 15px 15px;
  }

  Button {
    background-color: #504e4e;
    color: #ffffff;
    color: "white";
    font-size: 18px;
  }
  Button:nth-child(1) {
    background-color: #ffffff;
    color: #000000;
  }
`;
