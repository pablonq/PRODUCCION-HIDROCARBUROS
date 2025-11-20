async function GetNews(id) {
  const res = await fetch(`/api/noticias/${id}`);
  const data = await res.json();
  return data;
}

export default async function NewsPage({ params }) {

  const news = await GetNews(params.id);
  console.log(params.id);


  return (
    <div>
      <h1>Noticia ID: {news.id}</h1>
      {/* Renderiza los detalles de la noticia aquí */}
    </div>
  );
}