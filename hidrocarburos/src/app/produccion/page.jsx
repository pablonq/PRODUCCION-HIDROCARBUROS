"use client";

import ProduccionGasRecurso from "@/components/graficas/ProduccionGasRecurso";
import ProduccionOilRecurso from "@/components/graficas/ProduccionOilRecurso";
import ProduccionGasEmpresa from "@/components/graficas/ProduccionGasEmpresa";
import ProduccionOilEmpresa from "@/components/graficas/ProduccionOilEmpresa";

export default function Produccion() {
  return (
    <div className="flex flex-col min-h-screen w-full items-center justify-center bg-gray-200 py-0">
      <h1 className="text-2xl font-bold ">
        Bienvenido a la página de Producción
      </h1>
      <div className="grid grid-rows-2 grid-cols-2 gap-x-10 gap-y-4 w-full p-2">
        <div className="w-full bg-blue-200">
          <ProduccionGasRecurso />
        </div>

        <div className="w-full bg-blue-200">
          <ProduccionOilRecurso />
        </div>

        <div className="w-full bg-blue-200">
          
        </div>

        <div className="w-full bg-blue-200">
          
        </div>
      </div>
    </div>
  );
}
