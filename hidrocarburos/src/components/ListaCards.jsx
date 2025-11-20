"use client";
import { useState, useEffect } from "react";
import NewsCard from "./NewsCards";
import ButtonPaginacion from "./ButtonPaginacion/ButtonPaginacion";
import Link from "next/link";


const ListaCard = () => {
  const [newsData, setNewsData] = useState([]);

  const [paginaActual, setPaginaActual] = useState(1);
  const cardsPorPagina = 9;

  async function getNoticias() {
    try {
      const res = await fetch("/api/noticias");
      const data = await res.json();
      console.log(data);

      if (res.ok) {
        setNewsData(data);
      } else {
        console.error("Error fetching noticias:", data);
        setNewsData([]);
      }
    } catch (error) {
      console.error("Error al obtener noticias:", error);
      setNewsData([]);
    }
  }

  useEffect(() => {
    getNoticias();
  }, []);

  const indexUltimaCards = paginaActual * cardsPorPagina;
  const indexPrimerCards = indexUltimaCards - cardsPorPagina;
  const cardsActuales = newsData.slice(indexPrimerCards, indexUltimaCards);

  const paginate = (pageNumber) => {
    setPaginaActual(pageNumber);
  };

  return (
    <>
      <div className="flex flex-wrap justify-center ">
        {newsData.length === 0 ? (
          <p className="text-center font-bold text-rose-700">
            No hay Noticias disponibles.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cardsActuales.map((card) => (
              
              <Link href={`news/${card.id}`} key={card.id}>
              <NewsCard
                key={card.id}
                imagen={card.imagenUrl}
                title={card.titulo}
                date={card.createdAt.slice(0, 10)}
              />
            </Link>
            ))}
          </div>
        )}
      </div>

      {/* Paginación */}
      <div className="flex justify-end">
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