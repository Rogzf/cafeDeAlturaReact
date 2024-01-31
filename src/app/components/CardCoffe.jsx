"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { Button } from "./Button";
import { ProductsContext } from "../context/ProductsContextProvider";

const CardCoffe = ({
  logoCafe,
  nombreCafe,
  precioCafe,
  cafeInf,
  available,
}) => {
  const { dispatch } = useContext(ProductsContext);

  const handleAddToCart = (product) => {
    dispatch({
      action: "ADD_ITEM",
      product: product,
    });
  };

  return (
    <div
      className={`flex flex-col gap-6 items-center text-center border border-[#E3DED7] rounded-[10px] group/cardCoffe hover:bg-[#E3DED7] p-6 ${
        available ? "opacity-100" : "opacity-40 -z-10"
      }`}
    >
      <div className="w-56 h-56">
        <Image src={logoCafe} alt="" width={224} height={224} />
      </div>
      <div>
        <p className="text-[14px] leading-4 font-semibold text-[#000]">
          {nombreCafe}
        </p>
        <p className="text-[14px] font-normal leading-4">
          {precioCafe.toFixed(2)}€
        </p>
      </div>
      <div onClick={() => handleAddToCart(cafeInf)}>
        <Button size={"small"} intent={available ? "primary" : "agotado"}>
          {available ? "Añadir" : "Agotado"}
        </Button>
      </div>
    </div>
  );
};

export default CardCoffe;
