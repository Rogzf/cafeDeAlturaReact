"use client";

import { useContext } from "react";
import ItemsCart from "../components/ItemsCart";
import Shippingselection from "../components/Shippingselection";
import TotalCart from "../components/TotalCart";
import { ProductsContext } from "../context/ProductsContextProvider";

const Cesta = () => {
  const { cantidadDeProductos } = useContext(ProductsContext);

  return (
    <div className="mt-20 gap-6">
      <h1 className="flex justify-center items-center text-2xl leading-7 font-medium text-[#2A5B45]">
        Cesta({cantidadDeProductos})
      </h1>
      <div className=" flex  gap-6 p-2 justify-between">
        <div className="flex flex-col">
          <p className="text-lg font-semibold leading-6">Productos</p>
          <ItemsCart />
          <Shippingselection />
        </div>

        <TotalCart />

        {/* <div className="bg-[#E3DED7] min-w-full h-[1px]">hola</div> */}
      </div>
    </div>
  );
};

export default Cesta;
