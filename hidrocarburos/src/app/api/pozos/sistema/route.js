import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request) {
  const { searchParams } = new URL(request.url);

    // Obtener parámetros de consulta
  const anio = searchParams.get("anio");
  const mes = searchParams.get("mes");
  const sistemaId = searchParams.get("sistemaId");
  
  // Construir el objeto where
  const where = {};
  if (anio) where.anio = Number(anio);
  if (mes) where.mes = Number(mes);
  if (sistemaId) where.sistemaId = Number(sistemaId);

  try {
  const pozoSistema = await prisma.pozoSistema.findMany({
    where,
    include: {
      sistema: { select: {nombreSistema: true}},
    },

  });

  return NextResponse.json(pozoSistema);
} catch (error) {
  console.error("Error al obtener recursos por pozo:", error);
  return NextResponse.json(
    { error: "Error al obtener los recursos" },
    { status: 500 }
  );
}

}