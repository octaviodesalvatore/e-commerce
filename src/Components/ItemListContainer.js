import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import styled from "styled-components";
import { getFirestore } from "../firebase";
import { useParams } from "react-router";

function ItemListContainer() {
  const [producto, setProducto] = useState([]);
  const [condition, setCondition] = useState("");
  const { categoryID } = useParams();

  useEffect(() => {
    const getProducts = async () => {
      const firestore = getFirestore();
      const collection = await firestore.collection("productos");
      let query;
      if (categoryID === "all" && condition === "") {
        query = await collection.where("category", "!=", "all");
      }
      if (categoryID === "all" && condition !== "") {
        query = await collection.where("condition", "==", condition);
      }
      if (categoryID !== "all" && condition === "") {
        query = await collection.where("category", "==", categoryID);
      }
      if (categoryID !== "all" && condition !== "") {
        query = await collection
          .where("category", "==", categoryID)
          .where("condition", "==", condition);
      }

      query.get().then((querySnapshot) => {
        if (querySnapshot.size !== 0) {
          setProducto(querySnapshot.docs.map((doc) => doc.data()));
        }
      });
    };
    getProducts();
  }, [categoryID, condition]);

  const changeCondition = (condition) => {
    setCondition(condition);
  };

  return (
    <DivContainer>
      <Title>{categoryID === "all" ? "All Our Products" : categoryID}</Title>
      <StyledDiv>
        <ItemList producto={producto} changeCondition={changeCondition} />
      </StyledDiv>
    </DivContainer>
  );
}

export default ItemListContainer;

const DivContainer = styled.div`
  margin: 0 auto;
  max-width: 1400px;

  @media (max-width: 1326px) {
    max-width: 600px;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 48px;
  margin-top: 50px;
  margin-bottom: 50px;
  text-transform: capitalize;
  color: ${(props) => props.theme.color};
`;

const StyledDiv = styled.div`
  display: flex;
  margin-bottom: 50px;
`;
