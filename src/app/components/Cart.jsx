"use client";
import React from "react";
import Default from "./assets/Default.png";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import ItemsCart from "./ItemsCart";

const Cart = () => {
  const [isCartShop, setIsCartShop] = useState(false);
  
  

  return (
    <div>
    <div className="w-6">

      <Image onClick={()=>setIsCartShop(!isCartShop)} src={Default} alt="" width={24} height={24} />
    </div>
      
        
      {isCartShop && (

        <div className=" flex flex-col fixed top-16 right-0 p-5 bg-[#F7F5F3] text-black rounded-b-xl">
        <ItemsCart/>
          
<div className="flex justify-around mt-5">
 <Link href="/cesta" className="bg-[#E3DED7] border w-fit rounded-lg px-[5px]">
            Ir a Cesta
          </Link>

<button className="bg-[#E3DED7] rounded-lg border px-[5px]">Eliminar Productos</button>
</div>
         
          
        </div>
       
      )}
    
      
    </div>
  );
};

export default Cart;
