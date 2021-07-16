import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [item, setItem] = useState();

  useEffect(() => {
    const getItems = async () => {
      const items = await fetch("../JSON/products.json");
      const respuesta = await items.json();
      setItem(respuesta[0]);
    };
    setTimeout(() => {
      getItems();
    }, 2000);
  }, []);
  return (
    <div>
      {item === undefined ? (
        ""
      ) : (
        <ItemDetail
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
