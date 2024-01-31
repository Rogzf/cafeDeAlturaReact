import React from 'react'
import Image from 'next/image'
// import HeroImg from './assets/Heroimage.png'
const HeroImage = ({img}) => {
  return (
    <div className='w-[588px]'>
      
      <Image
    src={img}
    alt=''
    width={588}
    height={390}
 />
      </div>
  )
}

export default HeroImage