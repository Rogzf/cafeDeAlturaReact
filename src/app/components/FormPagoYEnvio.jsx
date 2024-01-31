"use client";
import React from "react";
import Image from "next/image";
import TotalCart from "./TotalCart";

const FormPagoYEnvio = () => {
  return (
    <div className="flex flex-col gap-6">
      <p className="flex justify-center items-center text-2xl leading-7 font-medium text-[#2A5B45]">Checkout</p>
    <div className="flex justify-around">
    <div className="flex flex-col gap-6 w-[792px]">
      <p className="text-lg leading-6 font-semibold">
        Seleccionar método de pago
      </p>
      <div className="flex">
        <input type="radio" name="pago" />
        <div>
          <label
            type="text"
            name="tarjetaDeDebito"
            className="text-sm leading-4 font-semibold"
          >
            Tarjeta de débito
          </label>
          <p className="text-sm leading-4 font-normal">
            Opción estándar sin seguimiento
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-[3px] w-[279px]">
        <article className="flex flex-col">
          <label
            type="text"
            name="titular"
            className="text-xs leading-4 font-normal"
          >
            Titular
          </label>
          <input
            type="text"
            name="titular"
            placeholder="Nombre del titular"
            className="border"
          />
        </article>
        <article className="flex flex-col">
          <label
            type="number"
            name="numeroDeTarjeta"
            className="text-xs leading-4 font-normal"
          >
            Número de la tarjeta
          </label>
          <input
            type="number"
            name="numeroDeTarjeta"
            placeholder="1234 1234 1234 1234"
            className="border"
          />
        </article>

        <article className="flex justify-between">
          <div className="flex flex-col w-[128px]">
            <label
              type="number"
              name="FechaDeCaducidad"
              className="text-xs leading-4 font-normal"
            >
              Fecha de caducidad
            </label>
            <input
              type="number"
              name="FechaDeCaducidad"
              placeholder="MM / YY"
              className="border"
            />
          </div>
          <div className="flex flex-col w-[128px]">
            <label
              type="number"
              name="CVC"
              className="text-xs leading-4 font-normal"
            >
              CVC
            </label>
            <input
              type="number"
              name="CVC"
              placeholder="123"
              className="border"
            />
          </div>{" "}
        </article>
      </div>

      <div className="bg-black h-1"></div>

      <div className="flex gap-4">
        <input type="radio" name="pago" />
        <article>
          <p className="text-sm leading-4 font-semibold">
            Transferencia bancaria a la cuenta ES12 1234 1234 123457890
          </p>
          <p className="text-sm leading-4 font-normal">
            Será necesario recibir el comprobante de la transferencia para
            preparar tu pedido
          </p>
        </article>
      </div>

      <div className="bg-black"></div>

      <div className="flex gap-4">
        <input type="radio" name="pago" />
        <article className="flex gap-4 items-center">
          <p className="text-sm leading-4 font-semibold">Bizum</p>
          {/* <Image/> */} tengo q poner aqui la imagen del bizum
        </article>
      </div>

      <p className="text-lg leading-6 font-semibold">Dirección de envío</p>
      <div className="flex flex-col gap-2 w-[521px]">
        <div className="flex flex-col gap-[3px]">
          <label
            type="text"
            name="nombre"
            className="text-xs leading-4 font-normal"
          >
            Nombre{" "}
          </label>
          <input type="text" name="nombre" className="border" />
        </div>
        <div className="flex flex-col gap-[3px]">
          <label
            type="text"
            name="apellidos"
            className="text-xs leading-4 font-normal"
          >
            Apellidos
          </label>
          <input type="text" name="apellidos" className="border" />
        </div>
        <div className="flex flex-col gap-[3px]">
          <label
            type="number"
            name="telefono"
            className="text-xs leading-4 font-normal"
          >
            Teléfono
          </label>
          <input type="number" name="telefono" className="border" />
        </div>
        <div className="flex flex-col gap-[3px]">
          <label
            type="text"
            name="e-mail"
            className="text-xs leading-4 font-normal"
          >
            Email
          </label>
          <input type="text" name="e-mail" className="border" />
        </div>
        <div className="flex flex-col gap-[3px]">
          <label
            type="text"
            name="pais"
            className="text-xs leading-4 font-normal"
          >
            País
          </label>
          <select name="pais" id="" className="border">
            <option value="">Selecionar</option>
            <option value="España">España</option>
            <option value="Francia">Francia</option>
            <option value="Venezuela">Venezuela</option>
          </select>
        </div>
        <div className="flex gap-6">
          <article className="flex flex-col w-[249px]">
            <label
              type="text"
              name="poblacion"
              className="text-xs leading-4 font-normal"
            >
              Población
            </label>
            <input type="text" name="poblacion" className="border" />
          </article>
          <article className="flex flex-col w-[249px]">
            <label
              type="text"
              name="CP"
              className="text-xs leading-4 font-normal"
            >
              CP
            </label>
            <input type="text" placeholder="123" className="border" />
          </article>
        </div>
        <div className="flex gap-[3px] justify-between">
          <article className="flex flex-col">
            <label
              type="text"
              name="Calle"
              className="text-xs leading-4 font-normal"
            >
              Calle
            </label>
            <input type="text" name="Calle" className="border w-[112px]" />
          </article>
          <article className="flex flex-col">
            <label
              type="text"
              name="Nº"
              className="text-xs leading-4 font-normal"
            >
              Nº
            </label>
            <input type="text" name="Nº" className="border w-[112px]" />
          </article>
          <article className="flex flex-col">
            <label
              type="text"
              name="Piso"
              className="text-xs leading-4 font-normal"
            >
              Piso
            </label>
            <input type="text" name="Piso" className="border w-[112px]" />
          </article>
          <article className="flex flex-col">
            <label
              type="text"
              name="Puerta"
              className="text-xs leading-4 font-normal"
            >
              Puerta
            </label>
            <input type="text" name="Puerta" className="border w-[112px]" />
          </article>
        </div>
      </div>
    </div>
    <TotalCart checkout={true}/>
    </div>
    </div>
  );
};

export default FormPagoYEnvio;
