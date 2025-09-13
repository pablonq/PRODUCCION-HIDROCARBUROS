

import { useEffect } from "react";

export default function PozoGasRecurso() {
  async function loadPozoGasConv(){
    try{
      const response = await fetch("/api/pozos/recurso?fluidoId=2&tipoRecursoId=1");
      const data = await response.json();
      console.log(data);
      
      
    } catch (error) {
      console.error('Error fetching pozo sistema data:', error);
    }
  }

  async function loadPozoGasShale(){
    try{
      const response = await fetch("/api/pozos/recurso?fluidoId=2&tipoRecursoId=2");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching pozo sistema data:', error);
    }
  }

  async function loadPozoGasTight(){
    try{
      const response = await fetch("/api/pozos/recurso?fluidoId=2&tipoRecursoId=3");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching pozo sistema data:', error);
    }
  }

  useEffect(() => {
      const fetchData = async () => {
        await loadPozoGasConv();
        await loadPozoGasShale();
        await loadPozoGasTight();
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