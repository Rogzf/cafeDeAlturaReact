'use client'
import React, { useContext } from "react";
import Image from "next/image";
import { ProductsContext } from "../context/ProductsContextProvider";

const ItemsCart = () => {

  const { cart, dispatch } = useContext(ProductsContext);

  const handleAddToCart = (product) => {
    dispatch({
      action: "INCREMENT_QUANTITY",
      product: product,
    });
  };

  const handleDecrementQuantity= (product) =>{
    dispatch({
      action: "DECREMENT_QUANTITY",
      product: product,
    });
  }
// style={{ maxHeight: "300px", overflowY: "auto", border: "1px solid #ccc" }}
  return (
    <div >
      {cart.map((elemento) => {
  
        return (
          <div key={elemento.id} className="flex flex-col gap-3 pb-2 w-auto">
            <div className="flex gap-4 justify-between items-center">
              <div className="flex gap-2 items-center">
                <button onClick={()=>handleAddToCart(elemento)}>+</button>
                <div className="flex justify-center bg-slate-400 w-5 rounded-xl text-black">
                  {elemento.quantity}
                </div>
                <button onClick={()=>handleDecrementQuantity(elemento)}>-</button>
              </div>

              <Image src={elemento.imgCoffee} alt="" width={150} height={150} />
              <div className="w-auto">
                <div className="text-sm font-semibold leading-4">{elemento.name}</div>
                <p>Paquete de café, 250 gr</p>
              </div>
              <div className="text-lg font-semibold leading-6">{(elemento.price*elemento.quantity).toFixed(2)}€</div>
            </div>
            <div className="bg-[#E3DED7] min-w-full h-[1px]"></div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemsCart;
