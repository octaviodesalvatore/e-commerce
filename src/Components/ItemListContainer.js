import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import styled from "styled-components";
import { getFirestore } from "../firebase";
import { useParams } from "react-router";

function ItemListContainer() {
  const [producto, setProducto] = useState([]);
  const [condition, setCondition] = useState("");
  const { categoryID } = useParams();
  const [llamada, setLlamada] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const firestore = getFirestore();
      const collection = await firestore.collection("productos");
      let query = await collection.get();

      let newArray = [];
      query.forEach((element) => {
        newArray.push(element.data());
      });
      setLlamada(newArray);
    };

    getProducts();
  }, []);

  useEffect(() => {
    let newArray = [];
    llamada.forEach((element) => {
      if (categoryID === "todo") {
        if (condition === "") {
          newArray.push(element);
        } else if (condition === element.condition) {
          newArray.push(element);
        }
      } else {
        if (element.category === categoryID && condition === "") {
          newArray.push(element);
        }
        if (
          element.category === categoryID &&
          condition === element.condition
        ) {
          newArray.push(element);
        }
      }
    });
    setProducto(newArray);
    // if (categoryID === "todo") {
    //   newArray.push(element.data());
    // } else if (element.data().category === categoryID) {
    //   newArray.push(element.data());
    // }
  }, [categoryID, condition, llamada]);

  const changeCondition = (condition) => {
    setCondition(condition);
  };

  // useEffect(() => {
  //   const getCategory = async () => {
  //     const firestore = getFirestore();
  //     const collection = await firestore.collection("productos");
  //     let query = await collection.get();

  //     let newArray = [];
  //     query.forEach((element) => {
  //       if (categoryID === "todo") {
  //         newArray.push(element.data());
  //       } else if (element.data().category === categoryID) {
  //         newArray.push(element.data());
  //       }
  //     });
  //     setProducto(newArray);
  //   };
  //   getCategory();
  // }, [categoryID]);

  return (
    <DivContainer>
      <Title>
        {categoryID === "todo" ? "Todos nuestros productos" : categoryID}
      </Title>
      <StyledDiv>
        <ItemList producto={producto} changeCondition={changeCondition} />
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
  color: ${(props) => props.theme.color};
`;

const StyledDiv = styled.div`
  display: flex;
  margin-bottom: 50px;
`;
