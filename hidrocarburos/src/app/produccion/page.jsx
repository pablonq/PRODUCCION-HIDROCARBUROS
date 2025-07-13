"use client";
import { useEffect, useState } from "react";


export default function Produccion() {


  const [produccion, setProduccion] = useState([]);
  
  async function loadProduccion() {
    try {
      const response = await fetch('/api/produccion');
      const data = await response.json();
      console.log("Producción cargada:", data);

      setProduccion(data);
    } catch (error) {
      console.error('Error al cargar la produccion:', error);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      await loadProduccion();
    };
      
    fetchData();
  }, []);


  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Bienvenido a la página de Producción</h1>
      <ul className="w-full max-w-3xl bg-white rounded shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Listado de Producción</h2>
        {produccion.length === 0 ? (
          <li className="text-gray-500">No hay datos disponibles.</li>
        ) : (
          produccion.map((item, idx) => (
            <li key={idx} className="border-b py-2">
              <span className="font-bold text-orange-900">{item.cantidad}</span>{" "}
              <span className="text-gray-700">| {item.empresa.nombreEmpresa} | </span>
              <span className="text-gray-700">{item.fluido.tipoFluido} | {item.area.nombreArea} | {item.tipoRecurso.tipoRecurso}</span>
 
            </li>
          ))
        )}
      </ul>


    </div>
  );
}