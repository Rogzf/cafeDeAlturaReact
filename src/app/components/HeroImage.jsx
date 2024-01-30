import React from 'react'
import Image from 'next/image'
// import HeroImg from './assets/Heroimage.png'
const HeroImage = ({img}) => {
  return (
    <Image
    src={img}
    alt=''
    width={588}
    height={390}
 />
  )
}

export default HeroImage