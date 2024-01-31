"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { ProductsContext } from "../context/ProductsContextProvider";

const PedidoYTotal = () => {
  const { cart, subtotal, shippingValue } = useContext(ProductsContext);

  return (
    <div className="flex flex-col gap-6 bg-[#F7F5F3] p-6">
      <p className="text-lg font-semibold leading-6">Tu pedido</p>

      {cart.map((elemento) => {
        return (
          <div key={elemento.id} className="flex flex-col gap-6 pb-2 w-auto">
            <div className="flex gap-4 justify-between items-center">
              <div className="flex items-center gap-6">
                <Image
                  src={elemento.imgCoffee}
                  alt=""
                  width={150}
                  height={150}
                />
                <div className="w-auto">
                  <div className="text-sm font-semibold leading-4">
                    {elemento.name}
                  </div>
                  <p>Paquete de café, 250 gr</p>
                </div>
              </div>
              <div className="text-lg font-semibold leading-6">
                {(elemento.price * elemento.quantity).toFixed(2)}€
              </div>
            </div>
          </div>
        );
      })}
      <div className="flex flex-col gap-4">
        <div className="bg-[#E3DED7] min-w-full h-[1px]"></div>
        <div className="flex justify-between">
          <p className="text-sm font-normal leading-4">SUBTOTAL</p>
          <p className="text-sm font-semibold leading-4">
            {subtotal.toFixed(2)}
          </p>
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
            {(subtotal + (shippingValue === "express" ? 9.0 : 0)).toFixed(2)}€
          </p>
        </div>
        <div className=" flex justify-end text-xs font-normal leading-4">
          Incluye
          {(
            (subtotal + (shippingValue === "express" ? 9.0 : 0)).toFixed(2) *
            0.21
          ).toFixed(2)}{" "}
          de IVA
        </div>
      </div>
    </div>
  );
};

export default PedidoYTotal;
