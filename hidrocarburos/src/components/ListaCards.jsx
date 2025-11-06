'use client';
import { useState, useEffect } from "react";
import NewsCard from "./NewsCards";
 


// import ButtonPaginacion from "../ButtonPaginacion/ButtonPaginacion";

const ListaCard = () => {
  const [newsData, setNewsData] = useState([]);

  const [paginaActual, setPaginaActual] = useState(1);
  const cardsPorPagina = 9;


  async function getNoticias() {
    const res = await fetch("/api/noticias");
    const data = await res.json();


    if (res.ok) {
      setNewsData(data);
    }
  }


  useEffect(() => {
    getNoticias();

  }, []);

  // const handleView = (restauranteId) => {
  //   navigate(`detalleRestaurante/${restauranteId}`); 
  // };

  const indexUltimaCards = paginaActual * cardsPorPagina;
  const indexPrimerCards = indexUltimaCards - cardsPorPagina;
  const cardsActuales = newsData.slice(indexPrimerCards, indexUltimaCards);

  const paginate = (pageNumber) => {
    setPaginaActual(pageNumber);
  };
  return (
    <>
      <div className="flex flex-wrap  justify-center ">
        {newsData.length === 0 ? (
          <p className="text-center font-bold text-rose-700">
            No hay Noticias disponibles.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsData.map((cards) => (
          <NewsCard key={cards.id} imagen={cards.imageUrl} title={cards.title} date={cards.date} />
        ))}
      </div>
        )}
        
      </div>
      {/* Paginación */}
      <div className=" flex justify-end">
        <div className="flex mt-4">
          {Array.from(
            { length: Math.ceil(newsData.length / cardsPorPagina) },
            (_, index) => (
              <ButtonPaginacion
                key={index + 1}
                page={index + 1}
                isActive={paginaActual === index + 1}
                onClick={paginate}
              />
            )
          )}
        </div>
      </div>

    </>
  );
};

export default ListaCard;