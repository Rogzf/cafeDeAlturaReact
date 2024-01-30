"use client";

import React, { useState } from "react";
import Image from "next/image";
import ChevronUp from "./assets/Chevron up.png";

const CardsPreguntasFrecuentes = ({ duda, respuesta }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col w-[668px] h-auto bg-white rounded-[10px] p-6 gap-4">
      <div className={`flex justify-between`} onClick={() => handleClick()}>
        <p className="text-[18px] font-semibold leading-6 text-[#2B2A2B]">
          {duda}
        </p>
        <Image
          src={ChevronUp}
          alt=""
          className={`${
            isOpen === true
              ? "rotate-180 transition-all 1200"
              : "transition-all 1200"
          }`}
          width={20}
          height={20}
        />
      </div>
      {isOpen && (
        <div className="flex flex-col gap-4">
          <div className="bg-[#E3DED7] min-w-full h-[1px]"></div>
          <p className="flex text-[12px] font-normal leading-4 items-center">
            {respuesta}
          </p>
        </div>
      )}
    </div>
  );
};

export default CardsPreguntasFrecuentes;
