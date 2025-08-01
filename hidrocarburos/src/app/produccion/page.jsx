"use client";

import ProduccionGasRecurso from "@/components/graficas/ProduccionGasRecurso";
import ProduccionOilRecurso from "@/components/graficas/ProduccionOilRecurso";
import ProduccionGasEmpresa from "@/components/graficas/ProduccionGasEmpresa";
import ProduccionOilEmpresa from "@/components/graficas/ProduccionOilEmpresa";
import ProduccionGasArea from "@/components/graficas/ProduccionGasArea";
import ProduccionOilArea from "@/components/graficas/ProduccionOilArea";

export default function Produccion() {
  return (
    <div className="flex flex-col min-h-screen w-full items-center justify-center bg-gray-200 py-0">
      <h1 className="text-2xl font-bold ">
        Bienvenido a la página de Producción
      </h1>
      <div className="grid grid-rows-3 grid-cols-2 gap-x-10 gap-y-4 w-full p-2">
        <div className="w-full bg-blue-200">
          <ProduccionGasRecurso />
        </div>

        <div className="w-full bg-blue-200">
          <ProduccionOilRecurso />
        </div>

        <div className="w-full bg-blue-200">
          <ProduccionGasArea />
        </div>

        <div className="w-full bg-blue-200">
          <ProduccionOilArea />
        </div>
        <div className="w-full bg-blue-200">
          <ProduccionGasEmpresa />
        </div>
        <div className="w-full bg-blue-200">
          <ProduccionOilEmpresa />
        </div>

      </div>
    </div>
  );
}
