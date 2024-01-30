"use client";
import React, { useContext } from "react";
import { Button } from "./Button";
import Link from "next/link";
import { ProductsContext } from "../context/ProductsContextProvider";
const TotalCart = ({ checkout }) => {
  const { subtotal, shippingValue } = useContext(ProductsContext);

  return (
    <div className="flex flex-col bg-[#F7F5F3] p-6 gap-4 w-96 h-min ">
      <p className="text-lg font-semibold leading-6">Total del carrito</p>
      <div className="bg-[#E3DED7] min-w-full h-[1px]"></div>
      <div className="flex justify-between">
        <p className="text-sm font-normal leading-4">SUBTOTAL</p>
        <p className="text-sm font-semibold leading-4">{subtotal.toFixed(2)}</p>
      </div>

      <div className="flex justify-between">
        <p className="text-sm font-normal leading-4">ENVÍO</p>
        <p className="text-sm font-semibold leading-4">
          {shippingValue === "express" ? "9,00€" : "GRATIS"}
        </p>
      </div>
      <div className="bg-[#E3DED7] min-w-full h-[1px]"></div>
      <div className="flex justify-between">
        <p className="text-sm font-semibold leading-4">TOTAL</p>
        <p className="text-sm font-semibold leading-4">
          ${(subtotal + (shippingValue === "express" ? 9.0 : 0)).toFixed(2)}€
        </p>
      </div>
      <div className=" flex justify-end text-xs font-normal leading-4">
        Incluye $
        {(
          (subtotal + (shippingValue === "express" ? 9.0 : 0)).toFixed(2) * 0.21
        ).toFixed(2)}{" "}
        de IVA
      </div>

      {!checkout && <div className="flex justify-between">
        <Link href={"/checkout"}>
          <Button size={"medium"} intent={"default"}>
            Ir a checkout
          </Button>
        </Link>
        <Link href={"/store"}>
          <Button size={"medium"} intent={"transparent"}>
            Seguir comprando
          </Button>
        </Link>
      </div>}

      {checkout && <div className="flex justify-between">
        <Link href={"/pedido"}>
          <Button size={"medium"} intent={"default"}>
          Pagar y realizar pedido
          </Button>
        </Link>
      </div>}
    </div>
  );
};

export default TotalCart;
