import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  
  // Obtener parámetros de consulta
  const anio = searchParams.get("anio");
  const mes = searchParams.get("mes");
  const areaId = searchParams.get("areaId");
  const fluidoId = searchParams.get("fluidoId");

  // Construir el objeto where
  const where = {};
  if (anio) where.anio = Number(anio);
  if (mes) where.mes = Number(mes);
  if (areaId) where.areaId = Number(areaId);
  if (fluidoId) where.fluidoId = Number(fluidoId);

  try {
    const produccionArea = await prisma.produccionArea.findMany({
      where,
      include: {
        area: { select: { nombreArea: true } },
        fluido: { select: { tipoFluido: true } },
      }
    });

    return NextResponse.json(produccionArea);
  } catch (error) {
    console.error("Error al obtener producción por área:", error);
    return NextResponse.json(
      { error: "Error al obtener la producción" },
      { status: 500 }
    );
  }
}
