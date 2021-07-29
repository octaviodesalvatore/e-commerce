import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [item, setItem] = useState();
  let { productID } = useParams();

  useEffect(() => {
    const getItems = async () => {
      const items = await fetch("/JSON/products.json");
      const respuesta = await items.json();

      respuesta.forEach((element) => {
        if (element.id === productID) {
          setItem(element);
          return;
        }
      });
    };

    setTimeout(() => {
      getItems();
    }, 500);
  }, [productID]);
  return (
    <div>
      {item === undefined ? (
        ""
      ) : (
        <ItemDetail
          item={item}
          key={item.id}
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
