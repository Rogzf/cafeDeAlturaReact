import React from "react";
import Image from "next/image";
import notaImg from "../components/assets/notaImg.png";
import  PedidoYTotal  from "../components/PedidoYTotal";
import { Button } from "../components/Button";
import Link from "next/link";
const pedido = () => {
  return (
    <div className="flex flex-col gap-6 mt-24">
      <div className="flex justify-center">
        <div className="size-16">
          <Image src={notaImg} alt={""} width={75} height={75} />
        </div>
      </div>

      <p className="flex justify-center text-2xl leading-7 font-medium text-[#2A5B45]">
        El pedido ha sido realizado con éxito
      </p>
      <div className="flex flex-col text-sm font-normal leading-4 items-center justify-center">
        <p>El pedido #12387 se encuentra en preparación.</p>
        <p>Lo recibirás dentro de las fechas acordadas en tu envío.</p>
        <p>Hemos enviado un ticket a tu correo electrónico.</p>
      </div>
      <PedidoYTotal />
<Link href="./store" className="flex justify-center">
  <Button intent={"default"} size={"medium"}>Volver a la tienda</Button>
</Link>
     
    </div>
  );
};

export default pedido;
