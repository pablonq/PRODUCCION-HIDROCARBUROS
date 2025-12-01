import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Aquí iría la lógica para obtener las noticias desde la base de datos
    const noticias = await prisma.noticias.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(noticias);
  } catch (error) {
    console.error("Error al obtener noticias:", error);
    return NextResponse.json(
      { error: "Error al obtener las noticias" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const { autor, contenido, noticiaId } = await request.json();
    // Aquí iría la lógica para crear una nueva noticia en la base de datos
    const nuevoComentario = await prisma.comentario.create({
      data: {
        autor,
        contenido,
        noticiaId: Number(noticiaId),
      },
    });
    return NextResponse.json(nuevoComentario, { status: 201 });
  } catch (error) {
    console.error("Error al crear comentario:", error);
    return NextResponse.json(
      { error: "Error al crear el comentario" },
      { status: 500 }
    );
  }
}