"use client";
import { useEffect, useState } from "react";

/*export const metadata = {
  title: "Cuenca Neuquina - Pozos",
  description: "Gestión de pozos de hidrocarburos en la Cuenca Neuquina",
};*/

export default function Pozos() {
  const [pozos, setPozos] = useState([]);
  const [error, setError] = useState("");

  async function loadPozos() {
    try {
      const response = await fetch('/api/pozos');
      if (!response.ok) {
        throw new Error("Error al cargar los pozos");
      }
      const data = await response.json();
      console.log("Pozos cargados:", data);
      setPozos(data);
    } catch (error) {
      setError(error.message);
    }
    
  }

  useEffect(() => {
    const fetchData = async () => {
    await loadPozos();
        };
      fetchData();
      
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4 text-orange-800">Bienvenido a la página de Pozos</h1>
      <p className="text-lg text-blue-800 mb-6">Aquí puedes gestionar todos los pozos de hidrocarburos.</p>
      {error && <div className="text-red-600 mb-4">{error}</div>}
      <div className="w-full max-w-3xl bg-white rounded shadow p-6">
        <h2 className="text-xl font-semibold mb-4 text-orange-700">Listado de Pozos</h2>
        <ul className="space-y-2">
          {pozos.length === 0 && !error && (
            <li className="text-gray-500">No hay datos disponibles.</li>
          )}
          {pozos.map((pozo, idx) => (
            <li key={idx} className="border-b py-2">
              <span className="font-bold text-orange-900">{pozo.cantidad}</span>{" "}
              <span className="text-gray-700">| {pozo.fluido.tipoFluido} | </span>
              <span className="text-gray-700">{pozo.tipoRecurso.tipoRecurso} | </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}