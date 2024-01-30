import React from "react";
import Coffe from "./assets/Coffe.png";
import Phone from "./assets/Phone.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./Button";
const Footer = () => {
  return (
    <div>
      <div className="bg-[#1F1815] text-[#FFF] text-[24px] font-normal leading-9 pt-7 pb-9 flex flex-col justify-center">
        <div className="flex gap items-center px-52">
          <Link href="/">cafedealtura.com</Link>
          <Image className="h-7" src={Coffe} alt="img" width={20} height={20} />
        </div>
        <div className=" flex justify-between px-52 ">
          <div className="flex flex-col text-[18px] font-semibold leading-6 gap-4">
            <p>Te ayudamos en</p>
            {/* AQUI TENGO UN ERROR DE HIDRATACION CORREGIR */}
            <div>
             <Button size={"medium"} intent={"grey"}>
              <div className="flex">
                <Image src={Phone} alt="" width={20} height={20} />
              <p>+34 919 49 05 18</p>
              </div>
              
              </Button> 
            </div>
            <div>
              <Button size={"medium"} intent={"grey"}>
              <div className="flex">
              <Image src={Phone} alt="" width={20} height={20} />
              <p>hola@cafedealtura.com</p>
              </div>
              </Button>

            </div>
          </div>

          <div className="flex flex-col text-[14px] font-semibold leading-4 gap-4">
            <Link href="/store">Tienda</Link>
            <Link href="/subscription">Suscripción </Link>
            <Link href="/companies">Para empresas</Link>
            <Link href="/information">Sobre nosotros</Link>
            <Link href="/contact">Contacto</Link>
          </div>
          <div className="flex flex-col text-[14px] font-semibold leading-4 gap-4">
            <Link href="/politicaPrivacidad">Política de privacidad</Link>
            <Link href="/politicaCookies">Política de cookies</Link>
            <Link href="/terminosYCondiciones">Términos y condiciones</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
