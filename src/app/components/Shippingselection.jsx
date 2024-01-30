'use client'
import React,{useContext} from "react";
import { ProductsContext } from "../context/ProductsContextProvider";

const Shippingselection = () => {

  const {shippingValue,handleShippingValue} = useContext(ProductsContext)
    
    
  return (
    <div className="flex flex-col gap-6">
      <p className="text-lg font-semibold leading-6">Seleccionar envío</p>
      <div className="flex gap-4 items-center">
        <input type="radio" name="envio" value="gratis" className="accent-[#2A5B45]" checked={shippingValue === 'gratis'}
        onChange={() => handleShippingValue('gratis')} />
        <div className="w-full">
          <label type="text" name="envio" className="text-sm font-semibold leading-4">
            Envío 5-7 días
          </label>
          <p className="text-sm font-normal leading-4">Opción estándar sin seguimiento</p>
        </div>
        <p className="text-lg font-semibold leading-6">GRATIS</p>
      </div>
<div className="bg-[#E3DED7] min-w-full h-[1px]"></div>
      <div className="flex gap-4 items-center">
        <input type="radio" name="envio" value="express" className="accent-[#2A5B45]" checked={shippingValue === 'express'}
        onChange={() => handleShippingValue('express')}/>
        <div className="w-full">
          <label type="text" name="envio" className="text-sm font-semibold leading-4">
            Envío urgente 24h{" "}
          </label>
          <p className="text-sm font-normal leading-4">
            Recibe tu pedido en las siguientes 24h (Para pedidos realizados
            antes de las 13:00).
          </p>
        </div>
        <p className="text-lg font-semibold leading-6">9,00€</p>
        
      </div>
    </div>
  );
};

export default Shippingselection;
