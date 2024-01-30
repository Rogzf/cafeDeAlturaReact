import React from "react";
import notaImg from "./assets/notaImg.png";
import ilustracion from "./assets/illustration.png";
import ilustracion2 from "./assets/Illustration (1).png";
import CardsConditions from "./CardsConditions";
import fondecafe from "/public/fondecafe.jpeg"
import Image from "next/image";
const CoffeConditionsArray = () => {
  const arrayCondiciones = [
    {
      id: 1,
      titulo: "Recibe tu pedido sin preocuparte",
      texto:
        "Tienes cosas más importantes en la cabeza, por eso con nuestra suscripción de café, nunca te quedarás sin tu taza de la mañana. ",
      img: notaImg,
    },
    {
      id: 2,
      titulo: "Recibe Envío en 24/48h",
      texto: "Pide tu café antes de las 12h y lo recibirás al día siguiente.",
      img: ilustracion,
    },
    {
      id: 3,
      titulo: "Descuentos y beneficios",
      texto:
        "Cada dos meses, te regalamos una bolsa de un nuevo origen sorpresa, para que lo descubras junto a nosotros.",
      img: ilustracion2,
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center px-32 py-12 gap-6 border bg-center bg-cover bg-[url('../../public/fondecafe.jpeg')]">
      <h2 className="font-medium text-2xl eading-7   text-[#FFF]">Café con las mejores condiciones</h2>
      <div className="flex items-center justify-center gap-6">
        {arrayCondiciones.map((novedades) => {
          return (
            <CardsConditions
              key={novedades.id}
              titulo={novedades.titulo}
              texto={novedades.texto}
              img={novedades.img}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CoffeConditionsArray;
