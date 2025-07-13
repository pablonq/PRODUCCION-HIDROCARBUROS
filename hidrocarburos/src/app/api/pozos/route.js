import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
  const pozos = await prisma.pozo.findMany({
    include: {
      tipoRecurso: {
        select: {
          tipoRecurso: true,

        },
      },
      fluido: {
        select: {
          tipoFluido: true,
        },
      },
    }

  });

  return NextResponse.json(pozos);
}

export function POST() {
  return NextResponse.json("Enviando");
}