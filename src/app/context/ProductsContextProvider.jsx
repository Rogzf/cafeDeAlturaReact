"use client";
import React, { useState, createContext, useEffect, useReducer } from "react";
import CartReducer from "../../../utils/CartReducer";

export const ProductsContext = createContext(null);

const ProductsContextProvider = ({ children }) => {
  const [ProductsCoffe, setProductsCoffe] = useState(null);
  const [cart, dispatch] = useReducer(CartReducer, []);
  const cantidadDeProductos = cart.reduce((acc, currentProduct) => {
    return acc + currentProduct.quantity;
  }, 0);
  const subtotal = cart.reduce((acc, currproduct) => {
    return acc + currproduct.quantity * currproduct.price;
  }, 0);
  const [shippingValue, setshippingValue] = useState("gratis");
  const handleShippingValue = (value) => {
    setshippingValue(value);
  };
  const addExpressFee = () => {
    return shippingValue === "express" ? 9 : 0;
  };
  // const clearToCart=()=>{
  //   setCart([])
  // }

  useEffect(() => {
    fetch("https://cafe-de-altura.vercel.app/api/products")
      .then((response) => response.json())
      .then((data) => {
        const products = data.products;
        setProductsCoffe(products);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        ProductsCoffe,
        dispatch,
        cart,
        cantidadDeProductos,
        subtotal,
        shippingValue,
        handleShippingValue,
        addExpressFee,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
