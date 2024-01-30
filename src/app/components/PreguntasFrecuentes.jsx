import React from "react";
import CardsPreguntasFrecuentes from "./CardsPreguntasFrecuentes";
import Image from "next/image";
import Arrow from "./assets/Arrow.png";
const PreguntasFrecuentes = () => {
  const ArrayPreguntas = [
    {
      id: 1,
      dudas: "¿Cómo hago el pedido?",
      respuesta:
        "Selecciona el café que desees probar y completa el proceso de compra. Si lo prefieres, te preguntaremos cada cuánto quieres que te lo mandemos a casa y así nunca te quedarás sin café.",
    },
    {
      id: 2,
      dudas: "¿Por qué los precios son tan bajos?",
      respuesta:
        "Viajamos constantemente para encontrar los mejores granos y a los agricultores más exigentes. Si podemos ofrecerte estos precios es porque tratamos directamente con los productores de café, sin intermediarios. Así obtenemos el mejor precio para ti y la persona que está detrás de los granos de café recibe el mayor beneficio posible. ",
    },
    {
      id: 3,
      dudas: "¿Es posible enviar café a mi oficina?",
      respuesta:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto aliquid, numquam earum tenetur quos qui quisquam itaque doloremque animi quibusdam, provident ratione facilis, ab ea nobis distinctio debitis odit. Dolorem!",
    },
  ];

  return (
    <div className="flex flex-col bg-[#2A5B45] justify-center items-center gap-6 py-[38px] px-[386px]">
      <p className="text-[#FFF] font-medium text-[24px] leading-7">
        Preguntas frecuentes
      </p>
      <div className="flex flex-col gap-4">
        {ArrayPreguntas.map((pregunta, index) => {
          return (
            <CardsPreguntasFrecuentes
              key={index}
              duda={pregunta.dudas}
              respuesta={pregunta.respuesta}
            />
          );
        })}
      </div>
      <div className="flex gap-4">
        <p className="text-[#FFF] text-[14px] font-semibold leading-4 underline">
          Resolvemos tus dudas
        </p>
        <Image className="w-6" src={Arrow} alt="" width={24} height={24} />
      </div>
    </div>
  );
};

export default PreguntasFrecuentes;
