import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  
  // Obtener parámetros de consulta
  const anio = searchParams.get("anio");
  const mes = searchParams.get("mes");
  const empresaId = searchParams.get("empresaId");
  const fluidoId = searchParams.get("fluidoId");

  // Construir el objeto where
  const where = {};
  if (anio) where.anio = Number(anio);
  if (mes) where.mes = Number(mes);
  if (empresaId) where.empresaId = Number(empresaId);
  if (fluidoId) where.fluidoId = Number(fluidoId);

  try {
    const produccionEmpresa = await prisma.produccionEmpresa.findMany({
      where,
      include: {
        empresa: { select: { nombreEmpresa: true } },
        fluido: { select: { tipoFluido: true } },
      },
      orderBy: {
        anio: "desc",
        mes: "desc"
      }
    });

    return NextResponse.json(produccionEmpresa);
  } catch (error) {
    console.error("Error al obtener producción por empresa:", error);
    return NextResponse.json(
      { error: "Error al obtener la producción" },
      { status: 500 }
    );
  }
}
