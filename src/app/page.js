import Image from 'next/image'
import Wrapper from './components/Wrapper'
import CoffeConditionsArray from './components/CoffeConditionsArray'
import CardsNovedades from './components/CardsNovedades'
import PreguntasFrecuentes from './components/PreguntasFrecuentes'
import NuestroCoffeShop from './components/NuestroCoffeShop'
import EntraEnContacto from './components/EntraEnContacto'
import Footer from './components/Footer'
export default function Home() {
  return (
    <div>
      <Wrapper/>
<CoffeConditionsArray/>
<CardsNovedades/>
<PreguntasFrecuentes/>
<NuestroCoffeShop/>
<EntraEnContacto/>
<Footer/>
    </div>
  )
}
