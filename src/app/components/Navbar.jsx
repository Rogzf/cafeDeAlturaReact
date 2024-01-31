'use client'
import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import Coffe from "./assets/Coffe.png";
import Phone from "./assets/Phone.png";
import { Button } from "./Button";
import Cart from "./Cart";
import {ProductsContext} from "../context/ProductsContextProvider";

const Navbar = () => {

const {cart, cantidadDeProductos} =useContext(ProductsContext)



  return (
    <div className="flex w-full h-16 bg-[#2B2A2B] text-white mb-12 items-center justify-between px-10 py-3 fixed top-0">
      <Link href="/" className="flex justify-center items-center gap-3">
        <p>cafedealtura.com</p>

        <Image
          className="h-6 w-5"
          src={Coffe}
          alt="img"
          width={20}
          height={20}
        />
      </Link>
      <div className="flex gap-4">
        <Link
          className="flex p-2 hover:bg-[#3f3e3f] items-center justify-center rounded-[10px]"
          href="/store"
        >
          Tienda
        </Link>
        <Link
          className="flex p-2 hover:bg-[#3f3e3f] items-center justify-center rounded-[10px]"
          href="/subscription"
        >
          Suscripción{" "}
        </Link>
        <Link
          className="flex p-2 hover:bg-[#3f3e3f] items-center justify-center rounded-[10px]"
          href="/companies"
        >
          Para empresas
        </Link>
        <Link
          className="flex p-2 hover:bg-[#3f3e3f] items-center justify-center rounded-[10px]"
          href="/information"
        >
          Sobre nosotros
        </Link>
        <Link
          className="flex p-2 hover:bg-[#3f3e3f] items-center justify-center rounded-[10px]"
          href="/contact"
        >
          Contacto
        </Link>
      </div>

      <div className="flex gap-2">
        <Link href="/phoneContact" className="flex w-auto items-center">
          <Image className="h-7" src={Phone} alt="" />
          <p className="text-sm items-center flex">+34 919 49 05 18</p>
        </Link>
        <Link href="/logIng" className="justify-center flex items-center m-1">
          <Button size={"small"} intent={"grey"}>
            Iniciar sesión
          </Button>
        </Link>
      </div>
      <div className="flex gap-2">

      <Cart />
      {cart.length>0&&(
        <div className="flex bg-[#3F3E3F] text-xs size-6 rounded-[200px] items-center justify-center">{cantidadDeProductos}</div>
      )}
      </div>
    </div>
  );
};

export default Navbar;
