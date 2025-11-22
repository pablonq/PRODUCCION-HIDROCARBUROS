import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request, { params }) {
  
  // const news = await prisma.Noticias.findUnique({
  //   where: { id: Number(params.id) },
  // })
  return NextResponse.json("news");
}