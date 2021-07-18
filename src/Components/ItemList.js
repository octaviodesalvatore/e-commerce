import React, { useState, useEffect } from "react";
import Item from "./Item";
import styled from "styled-components";
import LinearProgress from "@material-ui/core/LinearProgress";

function ItemList() {
  const [prod, setProd] = useState();
  useEffect(() => {
    const obtenerProductos = async () => {
      let productos = await fetch("../JSON/products.json");
      let respuesta = await productos.json();
      // console.log(respuesta);
      setProd(respuesta);
      //   console.log("Hola", respuesta);
    };
    setTimeout(() => {
      obtenerProductos();
    }, 2000);
    // console.log(prod);
  }, []);
  return (
    <StyledDiv>
      {prod === undefined ? (
        <LinearLoading color="primary" />
      ) : (
        prod.map((element) => {
          return (
            <Item
              name={element.name}
              img={element.image}
              key={element.id}
              price={element.price}
              stock={element.stock}
              id={element.id}
            />
          );
        })
      )}
    </StyledDiv>
  );
}

export default ItemList;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const LinearLoading = styled(LinearProgress)`
  height: 70px;
  width: 800px;
`;
