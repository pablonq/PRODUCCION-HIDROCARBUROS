import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";




export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const tipoRecursoId = searchParams.get("tipoRecursoId");
  const empresaId = searchParams.get("empresaId");
  const areaId = searchParams.get("areaId");
  const fluidoId = searchParams.get("fluidoId");

  const where = {};
  if (tipoRecursoId) where.tipoRecursoId = Number(tipoRecursoId);
  if (empresaId) where.empresaId = Number(empresaId);
  if (areaId) where.areaId = Number(areaId);
  if (fluidoId) where.fluidoId = Number(fluidoId);
  const produccion = await prisma.produccion.findMany({
    where,
    include: {
      empresa: { select: { nombreEmpresa: true } },
      fluido: { select: { tipoFluido: true } },
      area: { select: { nombreArea: true } },
      tipoRecurso: { select: { tipoRecurso: true, subTipoRecurso: true } },
    },
  });
    
  
  return NextResponse.json(produccion);
}

export function POST() {
  return NextResponse.json("Enviando");
}