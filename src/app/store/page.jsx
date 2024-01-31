import React from 'react'
import StoreCoffe from '../components/StoreCoffe'
import Footer from '../components/Footer'
import CoffeConditionsArray from '../components/CoffeConditionsArray'

const store = () => {
  return (
    <div className='mt-[65px] p-10'>
      <StoreCoffe/>
      <CoffeConditionsArray/>
      <Footer/>
    </div>
    
  )
}

export default store