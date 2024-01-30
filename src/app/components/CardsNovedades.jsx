"use client";
import React from "react";
import CardCoffe from "./CardCoffe";
import { useState, useEffect, useContext } from "react";
import { ProductsContext } from "../context/ProductsContextProvider";
import Image from "next/image";
import ArrowBlack from "./assets/ArrowBlack.png";
const CardsNovedades = () => {
  const { ProductsCoffe } = useContext(ProductsContext);

  return (
    <div className="flex flex-col p-10 gap-10 items-center">
      <h2 className="flex text-[#2A5B45] text-[24px] leading-7 font-medium">
        Novedades
      </h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {ProductsCoffe?.slice(0, 4).map((cafe) => {
          return (
            <CardCoffe
              key={cafe._id}
              logoCafe={cafe.img_url}
              nombreCafe={cafe.brand}
              precioCafe={cafe.price}
              cafeInf={cafe}
              available={cafe.available}
            />
          );
        })}
      </div>
      <div className="flex gap-4">
        <div className="underline text-[14px] leading-4 font-semibold text-[#000]">
          Ver todos
        </div>
        <Image className="w-6" src={ArrowBlack} alt="" width={24} height={24} />
      </div>
    </div>
  );
};

export default CardsNovedades;
