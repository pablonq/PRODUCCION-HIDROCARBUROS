"use client";
import PozoGasRecurso from "@/components/graficas/PozoGasRecurso";
import PozoOilRecurso from "@/components/graficas/PozoOilRecurso";
import PozosSistema from "@/components/graficas/PozosSistema";




// export const metadata = {
//   title: "Cuenca Neuquina - Pozos",
//   description: "Gestión de pozos de hidrocarburos en la Cuenca Neuquina",
// };

export default function Pozos() {
  

  return (
    <div className="flex flex-col min-h-screen w-full items-center justify-center bg-gray-200 py-0">
      <h1 className="text-2xl font-bold ">
        Bienvenido a la página de poxos
      </h1>
      <div className="w-full p-2">
        {/* Primera fila: Cuadro 1 y Cuadro 2 */}
        <div className="flex flex-row gap-x-10 mb-4">
          <div className="w-full bg-blue-200">
            <PozoGasRecurso />
          </div>
        </div>
        <div className="w-full bg-blue-200">
          <PozoOilRecurso />
        </div>
      </div>
      {/* Segunda fila: Cuadro 3 ocupa todo el ancho */}
      <div className="w-screen flex justify-center">
        <div className="w-full bg-blue-200">
          <PozosSistema />
        </div>
      </div>
    </div>
  );
}