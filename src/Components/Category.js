import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";
import CircularProgress from "@material-ui/core/CircularProgress";
import styled from "styled-components";
import AsideMenu from "./AsideMenu";

function Category() {
  const [itemsCategory, setItemsCategory] = useState();
  const { categoryID } = useParams();
  //   console.log(categoryID);

  useEffect(() => {
    const obtenerCategoria = async () => {
      let categoria = await fetch("../JSON/products.json");
      let respuesta = await categoria.json();

      let arrayFiltrado = respuesta.filter(
        (product) => product.category === categoryID
      );
      setItemsCategory(arrayFiltrado);

      // let newArray = [];
      // respuesta.forEach((element) => {
      //   if (element.category === categoryID) {
      //     newArray = [...newArray, element];
      //   }
      //   setItemsCategory(newArray);
      // }
      // );

      // };
    };

    obtenerCategoria();
    // console.log(itemsCategory);
  }, [categoryID]);

  return (
    <Stylediv>
      {itemsCategory === undefined ? (
        <CircularLoading color="primary" />
      ) : (
        <>
          <TitleCategory>{categoryID}</TitleCategory>
          <DivContainer>
            <AsideMenu />
            <DivMap>
              {itemsCategory.map((element) => {
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
              })}
            </DivMap>
          </DivContainer>
        </>
      )}
    </Stylediv>
  );
}

export default Category;

const TitleCategory = styled.h1`
  text-align: center;
  font-size: 48px;
  text-transform: capitalize;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const CircularLoading = styled(CircularProgress)`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const Stylediv = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`;

const DivContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const DivMap = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-width: 1200px;

  align-items: flex-start;
`;
