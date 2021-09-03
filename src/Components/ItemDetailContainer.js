import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getFirestore } from "../firebase";
import CircularProgress from "@material-ui/core/CircularProgress";
import styled from "styled-components";

function ItemDetailContainer() {
  const [item, setItem] = useState();

  let { productID } = useParams();

  useEffect(() => {
    const getCategory = async () => {
      const firestore = getFirestore();
      const collection = await firestore.collection("productos");
      let query = await collection.where("id", "==", productID);

      query.get().then((querySnapshot) => {
        setItem(querySnapshot.docs[0].data());
      });
    };

    getCategory();
  }, [productID]);

  return (
    <div>
      {item === undefined ? (
        <CircularLoading />
      ) : (
        <ItemDetail
          item={item}
          key={item.id}
          condition={item.condition}
          name={item.name}
          price={item.price}
          image={item.image}
          stock={item.stock}
          description={item.description}
        />
      )}
    </div>
  );
}

export default ItemDetailContainer;

const CircularLoading = styled(CircularProgress)`
  position: absolute;
  top: 50%;
  left: 50%;
  color: ${(props) => props.theme.color}!important;
`;
