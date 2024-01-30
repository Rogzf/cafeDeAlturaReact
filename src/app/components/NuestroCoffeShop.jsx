import React from 'react'
import Image from 'next/image'
import ArrowBlack from "./assets/ArrowBlack.png"
import HeroImage from './HeroImage'
import Heroimg2 from "./assets/Heroimg2.png"
const NuestroCoffeShop = () => {
  return (
    <div className='flex items-center justify-between py-[44px] px-[45px]'>
        <div className='flex flex-col gap-4 w-[457px]'>
<h2 className='text-[24px] font-semibold leading-6 text-[#2A5B45]'>Pruébalo en nuestro coffee shop</h2>
<div className='text-[14px] font-normal leading-4 text-[#111827]'>Visita nuestra cafetería en el centro de la ciudad para probar los granos de café antes de hacer tu pedido y llévate un descuento</div>
<div className='flex gap-4 items-center'>
    <p className='text-[14px] font-semibold leading-4 underline'>Cómo llegar</p>
<Image className='w-[24px]'
src={ArrowBlack}
alt=""
width={24}
height={24}
/>
</div>
</div>
<HeroImage img={Heroimg2}/>
    </div>
  )
}

export default NuestroCoffeShop