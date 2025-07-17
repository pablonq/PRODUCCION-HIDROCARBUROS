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
    <div className="">
      <h1 className="text-2xl font-bold mb-4 text-orange-800">Bienvenido a la página de Pozos</h1>
      <div class="grid [grid-template-columns:repeat(2,minmax(0,1fr))_0.5fr] [grid-template-rows:repeat(2,minmax(0,1fr))] gap-[10px]">
        <div class="col-start-3 col-end-4 row-start-1 row-end-3 bg-red-200">div1</div>
        <div class="col-start-2 col-end-3 row-start-1 row-end-2 bg-blue-200">div2</div>
        <div class="col-start-2 col-end-3 row-start-2 row-end-3 bg-green-200">div3</div>
        <div class="col-start-1 col-end-2 row-start-2 row-end-3 bg-yellow-200">div4</div>
        <div class="col-start-1 col-end-2 row-start-1 row-end-2 bg-purple-200">div5</div>
      </div>

    </div>
    
  );
}