import React from "react";
import Forms from "./Forms";
import Image from "next/image";
import PhoneGrey from "./assets/PhoneGrey.png";
import Mail from "./assets/Mail.png"
const EntraEnContacto = () => {
  return (
    <div className="flex bg-[#E3DED7] justify-around">
    <div className="flex  justify-center items-center gap-6 w-[588px]">
      <div className="flex flex-col w-[588px] gap-8 justify-center">
        <div className="flex flex-col gap-3">
          <h3 className="text-[#111827)] text-[18px] font-semibold leading-6">
            Entra en contacto con nosotros
          </h3>
          <p className="text-[#6B7280] text-[14px] font-normal leading-4">
            Si tienes dudas, ponte en contacto con nosotros a través del
            formulario y te responderemos lo antes posible.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-[#6B7280] text-[14px] font-normal leading-4">
            TAmbién puedes ponerte en contacto con nostros en nuestra dirección
            o a través del teléfono de la tienda.
          </p>
          <div>
            <p className="text-[#6B7280] text-[14px] font-normal leading-4">
              742 Evergreen Terrace
            </p>
            <p className="text-[#6B7280] text-[14px] font-normal leading-4">
              Springfield, OR 12345
            </p>
          </div>

          <div>
            <div className="flex">
<Image src={PhoneGrey} alt="" width={20} height={20}/>
              <p className="text-[#6B7280] text-[14px] font-normal leading-4">
              +1 (555) 123-4567
            </p>
            </div>
            <div className="flex">
            <Image src={Mail} alt="" width={20} height={20}/>
              <p className="text-[#6B7280] text-[14px] font-normal leading-4">
              support@example.com
            </p>
            </div>
            
          </div>

          <p className="text-[#6B7280] text-[14px] font-normal leading-4">
            ¿Buscas un trabajo?{" "}
            <span className="text-[#111827] text-[14px] font-semibold leading-4 underline">
              Ver nuestras ofertas.
            </span>
          </p>
        </div>
      </div>
    </div>
      <Forms />
    </div>
  );
};

export default EntraEnContacto;
