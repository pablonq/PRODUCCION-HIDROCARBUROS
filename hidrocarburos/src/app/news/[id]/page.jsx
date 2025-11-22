async function GetNews(id) {
  const res = await fetch(`/api/noticias/${id}`);
  const data = await res.json();
  return data;
}

export default async function NewsPage({ params }) {

  console.log(params.id);
  const id = params.id;
  const news = await GetNews(id);
  console.log(news);


  return (
    <div>
      <h1>Noticia ID: </h1>
      {/* Renderiza los detalles de la noticia aquí */}
    </div>
  );
}