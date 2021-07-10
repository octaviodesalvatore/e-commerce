import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { styled } from "@material-ui/core/styles";

function ItemCount() {
  const [valor, setValor] = useState(1);
  const maxStock = 7;

  return (
    <div>
      <ContainerDiv maxWidth="sm">
        <p>Nombre del Producto</p>
        <img
          src="https://phantom-marca.unidadeditorial.es/87576883cb1600dc51725fff7268d4cf/f/jpg/assets/multimedia/imagenes/2019/06/02/15594978459321.jpg"
          width="500"
          height="300"
          alt="Product Karambit"
        />
        <div>
          <p>Stock Disponible {maxStock}</p>
          <Button
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
          <StyledButton
            variant="contained"
            onClick={() => {
              if (valor < maxStock) {
                setValor(valor + 1);
              }
            }}
          >
            +
          </StyledButton>
        </div>
        <Button variant="contained">Agregar al Carrito</Button>
      </ContainerDiv>
    </div>
  );
}

export default ItemCount;

const StyledButton = styled(Button)({
  background: "#923123",
  color: "white",
  marginBottom: "20px",
});

const ContainerDiv = styled(Container)({
  textAlign: "center",
});
