import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request) {
    const pozos = await prisma.pozo.findMany()
    console.log(pozos);
    return NextResponse.json(pozos);  
  }
