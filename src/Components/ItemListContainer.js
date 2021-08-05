import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import styled from "styled-components";
import { getFirestore } from "../firebase";
import { useParams } from "react-router";

function ItemListContainer(props) {
  const [producto, setProducto] = useState([]);
  const { productID } = useParams();

  useEffect(() => {
    const firestore = getFirestore();
    const collection = firestore.collection("productos");

    if (!productID) {
      const query = collection.get();
      query
        .then((snapshot) => {
          const documentos = snapshot.docs;
          const items = documentos.map((doc) => {
            return { id: doc.id, ...doc.data() };
          });
          setProducto(items);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      let query = collection.where("categoryID", "==", productID);
      query = query.get();
      query
        .then((snapshot) => {
          const documentos = snapshot.docs;
          const items = documentos.map((doc) => {
            return { id: doc.id, ...doc.data() };
          });
          setProducto(items);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [productID]);

  return (
    <DivContainer>
      <Title>{props.message}</Title>
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
