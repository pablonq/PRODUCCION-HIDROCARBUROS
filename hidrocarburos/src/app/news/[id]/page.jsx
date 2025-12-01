

import Comentarios from '@/components/Comentario';
import { prisma } from '@/libs/prisma';
import { headers } from "next/headers";

async function GetNews(id) {
  const hdr = await headers(); // <-- await aquí
  const host = hdr.get("x-forwarded-host") ?? hdr.get("host") ?? "localhost:3000";
  const proto = hdr.get("x-forwarded-proto") ?? "http";
  const base = `${proto}://${host}`;

  const res = await fetch(`${base}/api/noticias/${id}`, { cache: 'no-store' });
  const data = await res.json();

  return data;
}

export default async function NewsPage({ params }) {

  const { id } = await params;
  //forma de consultar sin pasar por la api, ya que en este caso es un componente servidor
  // const news = await prisma.noticias.findUnique({
  //   where: { id: Number(id) },
  // })

  const comentarios = await prisma.comentario.findMany({
    where: { noticiaId: Number(id) },
    orderBy: { createdAt: "desc" }
  });

  const news = await GetNews(id);

  return (
    <div>
      <h1>Noticia:</h1>
      <img src={news.imagenUrl} alt={news.titulo} width={400} height={300} />
      <p>{news.titulo}</p>
      <p>{news.contenido}</p>

      {/* componente cliente que maneja comentarios y form */}
      <Comentarios initialComments={comentarios} id={id} />
    </div>
  );
}