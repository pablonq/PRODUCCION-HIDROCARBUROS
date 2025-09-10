

import { useEffect } from "react";

export default function PozoGasRecurso() {
  async function loadPozoRecursoGas(){
    try{
      const response = await fetch("/api/pozos/recurso?fluidoId=2");
      const data = await response.json();
      console.log(data);
      
      
    } catch (error) {
      console.error('Error fetching pozo sistema data:', error);
    }
  }
  useEffect(() => {
      const fetchData = async () => {
        await loadPozoRecursoGas();
      };
  
      fetchData();
    }, []);

  return (
    <>
      <h1 className="text-2xl font-bold ">
        Bienvenido a la página de Pozo Gas Recurso
      </h1>
      <div className="w-full p-2">
        {/* Aquí puedes agregar más contenido o componentes específicos para la página de Pozo Gas Recurso */}
      </div>
    </>
  );
}