import React, { useState, useEffect } from "react";
import { Provider } from "./Context";

const CustomProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  const [cartItems, setCartItems] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const getTotalPrice = () => {
      let total = cartItems.reduce((accumulator, current) => {
        return current.item.price * current.qty + accumulator;
      }, 0);
      setTotalPrice(total);
    };
    getTotalPrice();
  }, [cartItems]);

  const cleanCart = () => {
    setCartCount(0);
    setCartItems([]);
  };

  const removeItem = (index) => {
    setCartCount(cartCount - cartItems[index].qty);
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  const addItem = (item, qty) => {
    if (cartItems.some((product) => product.item.id === item.id)) {
      const copy = [...cartItems];
      const repeteadIndex = cartItems.findIndex(
        (product) => product.item.id === item.id
      );
      if (copy[repeteadIndex].item.stock >= copy[repeteadIndex].qty + qty) {
        copy[repeteadIndex].qty = copy[repeteadIndex].qty + qty;
        setCartCount((estadoPrevio) => estadoPrevio + qty);
      } else {
        setCartCount(cartCount + (item.stock - copy[repeteadIndex].qty));
        copy[repeteadIndex].qty = item.stock;
      }
      setCartItems(copy);
    } else {
      setCartItems([...cartItems, { item: { ...item }, qty: qty }]);
      setCartCount((estadoPrevio) => estadoPrevio + qty);
    }
  };

  return (
    <Provider
      value={{
        cartCount,
        setCartCount,
        cartItems,
        addItem,
        cleanCart,
        removeItem,
        totalPrice,
      }}
    >
      {children}
    </Provider>
  );
};

export default CustomProvider;
