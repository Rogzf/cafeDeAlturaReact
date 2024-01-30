"use client";
import React from "react";
import { useState, useEffect, useContext } from "react";
import { ProductsContext } from "../context/ProductsContextProvider";
import CardCoffe from "./CardCoffe";

const StoreCoffe = () => {
  const { ProductsCoffe } = useContext(ProductsContext);
  return (
    <div className="flex flex-col gap-6 justify-center">
      <h2 className="flex justify-center text-[24px] font-medium text-[#2A5B45]">
        Últimos orígenes
      </h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {ProductsCoffe?.map((cafe) => {
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
    </div>
  );
};

export default StoreCoffe;
