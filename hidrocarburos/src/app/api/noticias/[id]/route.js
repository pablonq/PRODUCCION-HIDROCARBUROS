export async function GET(request, { params }) {
  
  const news = await prisma.noticias.findUnique({
    where: { id: Number(params.id) },
  })
  return NextResponse.json(news);
}