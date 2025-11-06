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