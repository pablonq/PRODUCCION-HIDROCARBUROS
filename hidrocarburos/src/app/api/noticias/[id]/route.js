import { NextResponse } from 'next/server';
import { prisma } from '@/libs/prisma';

export async function GET(request, { params }) {

  const { id } = await params; // el objeto params puede ser un valor asíncrono y debes resolverlo (await)
  //  antes de acceder a sus propiedades. Solución: esperar params y extraer id antes de usarlo
  
  const news = await prisma.noticias.findUnique({
    where: { id: Number(id) },
  })
  
  return NextResponse.json(news);
}