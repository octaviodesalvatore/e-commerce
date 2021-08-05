import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";
import CircularProgress from "@material-ui/core/CircularProgress";
import styled from "styled-components";
import AsideMenu from "./AsideMenu";
import { getFirestore } from "../firebase";

function Category() {
  const [itemsCategory, setItemsCategory] = useState([]);
  const { categoryID } = useParams();

  //   console.log(categoryID);

  useEffect(() => {
    const getCategory = async () => {
      const firestore = getFirestore();
      const collection = await firestore.collection("productos");
      let query = await collection.get();

      let newArray = [];
      query.forEach((element) => {
        if (element.data().category === categoryID) {
          newArray.push(element.data());
        }
      });
      setItemsCategory(newArray);
    };

    getCategory();
  }, [categoryID]);

  return (
    <Stylediv>
      {itemsCategory.length === 0 ? (
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
                    item={element}
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

  @media (max-width: 1326px) {
    max-width: 600px;
  }
`;

const DivContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const DivMap = styled.div`
  display: flex;
  flex-wrap: wrap;

  align-items: flex-start;
`;
