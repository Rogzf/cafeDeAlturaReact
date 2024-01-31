"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "./Button";
const Forms = () => {
  const {
    register,
    handleSubmit,
    trigger,
    reset,
    formState: { errors },
  } = useForm();
  
  const onSubmit = (data) => {
    let formulario = JSON.parse(localStorage.getItem("infFormulario")) || [];
    formulario.push(data);
    localStorage.setItem("infFormulario", JSON.stringify(formulario));

    alert("Formulario enviado..!");
    reset();
  };

  return (
    <form
      className={`flex flex-col bg-white w-[588px] gap-6 pt-8 pr-8 pb-8 pl-12`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-1">
        <label for="nombre">Nombre completo</label>
        <input
          className="border-opacity-5 border-[1px] border-solid rounded-[6px] h-[34px] py-[9px] px-[13px]"
          type="text"
          name="nombre"
          {...register("nombre", {
            required: {
              value: true,
              message: "Este campo es requerido",
            },
          })}
          onBlur={() => trigger("nombre")}
        />
        {errors.nombre && (
          <span className="text-[12px] text-red-600">
            {errors.nombre.message}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label for="text">Email</label>
        <input
          className="border-opacity-5 border-[1px] border-solid rounded-[6px] h-[34px] py-[9px] px-[13px]"
          type="texto"
          {...register("email", {
            required: {
              value: true,
              message: "este campo es requerido",
            },
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g,
              message: "Correo no valido",
            },
          })}
          onBlur={() => trigger("email")}
        />
        {errors.email && (
          <span className="text-[12px] text-red-600">
            {errors.email.message}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label for="Teléfono">Teléfono</label>
        <div className="flex  w-full border-solid border-[1px] border-[#D1D5DB] focus-within:border-[#3F8F6B] focus-within:border-[3px] rounded-[6px]">
          <select className="border-none focus:outline-none rounded-[6px] ">
            <option value="tlf">US </option>
            <option value="tlf">SPAIN</option>
            <option value="tlf">VZLA</option>
          </select>
          <input
            className="w-full border-none focus:outline-none rounded-[6px] h-[34px] py-[9px] px-[13px]"
            type="text"
            placeholder="+1 (555) 987-6543"
            {...register("number", {
              required: {
                value: true,
                message: "este campo es requerido",
              },
              pattern: {
                value: /^[+]?[0-9()-]*$/g,
                message: "Numero no valido",
              },
            })}
            onBlur={() => trigger("number")}
          />
        </div>
        {errors.number && (
          <span className="text-[12px] text-red-600">
            {errors.number.message}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label for="mensaje"></label>
        <textarea
          className="border-opacity-5 border-[1px] border-solid rounded-[6px] h-[122px] py-[9px] px-[13px]"
          type="text"
          name="mensaje"
          placeholder="¿En qué podemos ayudarte?"
          {...register("mensaje", {
            required: {
              value: false,
              message: "este campo es requerido",
            },
          })}
          onBlur={() => trigger("mensaje")}
        ></textarea>
        {errors.mensaje && (
          <span className="text-[12px] text-red-600">
            {errors.mensaje.message}
          </span>
        )}
      </div>
      <div className="flex justify-center gap-3 items-center">
        <input
          className="accent-[#2A5B45]"
          type="checkbox"
          name="condicion"
          {...register("condicion", {
            required: {
              value: true,
              message: "este campo es requerido",
            },
          })}
          onBlur={() => trigger("condicion")}
        ></input>

        <label className="text-[14px] font-normal leading-4" name="terminos">
          Acepto la{" "}
          <span className="text-[14px] font-semibold leading-4 underline">
            Política de Privacidad
          </span>{" "}
          y los{" "}
          <span className="text-[14px] font-semibold leading-4 underline">
            Términos y condiciones.
          </span>
        </label>
      </div>

      {errors.condicion && (
        <span className="text-[12px] text-red-600">
          {errors.condicion.message}
        </span>
      )}
      <Button size={"large"} intent={"default"}>
        Enviar
      </Button>
    </form>
  );
};

export default Forms;
