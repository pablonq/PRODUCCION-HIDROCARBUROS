import next from "next";
import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";



export async function GET() {
  const produccion = await prisma.produccion.findMany({
    include: {
      empresa: {
        select: {
          nombreEmpresa: true,
        },
      },
      fluido: {
        select: {
          tipoFluido: true,
        },
      },
      area: {
        select: {
          nombreArea: true,
        },
      },
      tipoRecurso: {
        select: {
          tipoRecurso: true,
        },
      },
    }
  })
    
  
  return NextResponse.json(produccion);
}

export function POST() {
  return NextResponse.json("Enviando");
}