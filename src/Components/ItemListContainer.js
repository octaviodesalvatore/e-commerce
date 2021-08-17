import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import styled from "styled-components";
import { getFirestore } from "../firebase";
import { useParams } from "react-router";

function ItemListContainer(props) {
  const [producto, setProducto] = useState([]);

  const { categoryID } = useParams();

  useEffect(() => {
    const getCategory = async () => {
      const firestore = getFirestore();
      const collection = await firestore.collection("productos");
      let query = await collection.get();

      let newArray = [];
      query.forEach((element) => {
        if (categoryID === "todo") {
          newArray.push(element.data());
        } else if (element.data().category === categoryID) {
          newArray.push(element.data());
        }
      });
      setProducto(newArray);
    };

    getCategory();
  }, [categoryID]);

  return (
    <DivContainer>
      <Title>
        {categoryID === "todo" ? "Todos nuestros productos" : categoryID}
      </Title>
      <StyledDiv>
        <ItemList producto={producto} />
      </StyledDiv>
    </DivContainer>
  );
}

export default ItemListContainer;

const DivContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;

  @media (max-width: 1326px) {
    max-width: 600px;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 48px;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const StyledDiv = styled.div`
  display: flex;
  margin-bottom: 50px;
`;
