import React from 'react'
import ItemsCart from '../components/ItemsCart'
import Shippingselection from '../components/Shippingselection'
import FormPagoYEnvio from '../components/FormPagoYEnvio'

const Checkout = () => {
  return (
    <div className='mt-[65px] p-10'>
        <FormPagoYEnvio/>
    </div>
  )
}

export default Checkout