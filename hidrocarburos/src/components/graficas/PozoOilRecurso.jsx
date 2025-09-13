
import {useEffect} from "react";

export default function PozoOilRecurso() {
  async function loadPozoOilConv(){
    try{
      const response = await fetch("/api/pozos/recurso?fluidoId=1&tipoRecursoId=1");
      const data = await response.json();
      console.log(data);
      
      
    } catch (error) {
      console.error('Error fetching pozo sistema data:', error);
    }
  }

  async function loadPozoOilShale(){
    try{
      const response = await fetch("/api/pozos/recurso?fluidoId=1&tipoRecursoId=2");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching pozo sistema data:', error);
    }

  }

  async function loadPozoOilTight(){
    try{
      const response = await fetch("/api/pozos/recurso?fluidoId=1&tipoRecursoId=3");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching pozo sistema data:', error);
    }
  }

  useEffect(() => {
      const fetchData = async () => {
        await loadPozoOilConv();
        await loadPozoOilShale();
        await loadPozoOilTight();
      };
  
      fetchData();
    }, []);
  return (
    <>
      <h1 className="text-2xl font-bold ">
        Bienvenido a la página de Pozo Oil Recurso
      </h1>
      
    </>
  );
}