import React from "react";
import Image from "next/image";
const CardsConditions = ({titulo, texto, img}) => {
  return (
    <div
      
    >
      <div className=" flex  w-auto gap-6">
        <article className="flex flex-col p-6 gap-4 items-center justify-center text-center h-[232px] w-[316px] bg-[#FFF] rounded-[8px]">
        <Image
    src={img}
    alt=''
    width={40}
    height={40}
 />
          <p className="text-[18px] leading-6 text-[#2B2A2B] font-semibold">{titulo}</p>
          <p className="text-[14px] leading-4 text-[#111827] font-medium">{texto}</p>
        </article>
      </div>
    </div>
  );
};

export default CardsConditions;
