import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import context from "./Context";
import { useParams } from "react-router-dom";

function ItemCount({ valor, stock, setValor }) {
  // const [valor, setValor] = useState(0);
  const { cartItems } = useContext(context);
  const { productID } = useParams();
  // console.log(productID);
  // console.log(cartItems);

  const getQty = () => {
    const product = cartItems.find((product) => product.item.id === productID);
    return product ? product.qty : 0;
  };

  // console.log("hola", getQty());

  return (
    <div>
      <p>
        <b>Stock disponible: </b>
        {stock - valor - getQty()}
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
            if (valor + getQty() < stock) {
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
