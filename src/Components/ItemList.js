import React, { useState, useEffect } from "react";
import Item from "./Item";
import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";
import AsideMenu from "./AsideMenu";

function ItemList() {
  const [prod, setProd] = useState();

  useEffect(() => {
    const obtenerProductos = async () => {
      let productos = await fetch("../JSON/products.json");
      let respuesta = await productos.json();
      setProd(respuesta);
    };

    setTimeout(() => {
      obtenerProductos();
    }, 2000);
  }, []);
  return (
    <div>
      <StyledDiv>
        {prod === undefined ? (
          <CircularLoading style={{ color: "#000000" }} />
        ) : (
          <>
            <AsideMenu />
            <StyledMap>
              {prod.map((element) => {
                return (
                  <Item
                    name={element.name}
                    img={element.image}
                    key={element.id}
                    price={element.price}
                    stock={element.stock}
                    id={element.id}
                    item={element}
                  />
                );
              })}
            </StyledMap>
          </>
        )}
      </StyledDiv>
    </div>
  );
}

export default ItemList;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledMap = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

const CircularLoading = styled(CircularProgress)`
  position: absolute;
  top: 50%;
  left: 50%;
`;
