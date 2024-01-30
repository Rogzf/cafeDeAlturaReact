import React from 'react'
import StoreCoffe from '../components/StoreCoffe'
import Footer from '../components/Footer'
import CoffeConditionsArray from '../components/CoffeConditionsArray'

const store = () => {
  return (
    <div>
      <StoreCoffe/>
      <CoffeConditionsArray/>
      <Footer/>
    </div>
    
  )
}

export default store