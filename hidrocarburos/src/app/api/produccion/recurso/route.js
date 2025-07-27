import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  // Obtener parámetros de consulta
  const anio = searchParams.get("anio");
  const mes = searchParams.get("mes");
  const tipoRecursoId = searchParams.get("tipoRecursoId");
  const fluidoId = searchParams.get("fluidoId");

  // Construir el objeto where
  const where = {};
  if (anio) where.anio = Number(anio);
  if (mes) where.mes = Number(mes);
  if (tipoRecursoId) where.tipoRecursoId = Number(tipoRecursoId);
  if (fluidoId) where.fluidoId = Number(fluidoId);

  try {
    const produccionRecurso = await prisma.produccionRecurso.findMany({
      where,
      include: {
        tipoRecurso: { select: { tipoRecurso: true, subTipoRecurso: true } },
        fluido: { select: { tipoFluido: true } },
      },
      
    });

    return NextResponse.json(produccionRecurso);
  } catch (error) {
    console.error("Error al obtener producción por recurso:", error);
    return NextResponse.json(
      { error: "Error al obtener la producción" },
      { status: 500 }
    );
  }
}
