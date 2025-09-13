import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request) {
  const { searchParams } = new URL(request.url);

    // Obtener parámetros de consulta
  const anio = searchParams.get("anio");
  const mes = searchParams.get("mes");
  const fluidoId = searchParams.get("fluidoId");
  const tipoRecursoId = searchParams.get("tipoRecursoId");
  
  // Construir el objeto where
  const where = {};
  if (anio) where.anio = Number(anio);
  if (mes) where.mes = Number(mes);
  if (tipoRecursoId) where.tipoRecursoId = Number(tipoRecursoId);
  if (fluidoId) where.fluidoId = Number(fluidoId);

  try {
  const pozoRecurso = await prisma.pozoRecurso.findMany({
    where,
    include: {
      tipoRecurso: { select: { tipoRecurso: true, subTipoRecurso: true } },
      fluido: { select: {tipoFluido: true}},
    },

  });

  return NextResponse.json(pozoRecurso);
} catch (error) {
  console.error("Error al obtener recursos por pozo:", error);
  return NextResponse.json(
    { error: "Error al obtener los recursos" },
    { status: 500 }
  );
}

}