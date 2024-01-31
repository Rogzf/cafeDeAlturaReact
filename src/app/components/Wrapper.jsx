import React from "react";
import HeroImage from "./HeroImage";
import HeroImg from './assets/Heroimage.png'
import { Button } from "./Button";
const Wrapper = () => {
  return (
    <div className="flex py-10 px-12 items-center gap-6 mt-[80px]">
      <div className="flex flex-col gap-4 w-[588px]">
        <p className="text-[#2A5B45] text-[18px] font-semibold leading-6	 ">
          De la planta a tu taza
        </p>
        <h1 className="text-[40px] font-semibold leading-[44px] text-[#000]">
          El mejor café del mundo, ahora en tu casa.
        </h1>
        <p className="text-[14px] font-normal leading-4 text-[#111827]">
          Trabajamos con agricultores de todo el mundo para seleccionar los
          mejores granos de café y que puedas viajar desde la comodidad de tu
          hogar.
        </p>
        <div className="flex gap-5">
            <Button size={"medium"} intent={"secondary"}>Descubrir orígenes</Button>
            <Button>Comprar café</Button>
        </div>
        
      </div>
      <div className="w-[588px] h-[390px]">
        <HeroImage img={HeroImg}/>
      </div>
      
    </div>
  );
};

export default Wrapper;
