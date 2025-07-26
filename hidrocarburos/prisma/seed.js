const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // 1. Crear Empresa
  const empresa = await prisma.empresa.createMany({
    data:[
      {nombreEmpresa: 'SHELL ARGENTINA S.A.',comentario: null},
      {nombreEmpresa: 'YPF S.A.', comentario: null},
      {nombreEmpresa: 'TOTAL ENERGIES ARGENTINA', comentario: null},
      {nombreEmpresa: 'PAN AMERICAN ENERGY LLC', comentario: null}
    ]
  });

  // 2. Crear Cuenca
  const cuenca = await prisma.cuenca.create({
    data: {
      nombreCuenca: 'NEUQUINA',
      comentario: null,
    },
  });

  // 3. Crear Area
  const area = await prisma.area.createMany({
    data:[
      {nombreArea: 'BAJADA DE AÑELO', comentario: null, cuencaId: 1, empresaId: 1},
      {nombreArea: 'COIRON AMARGO SUR OESTE', comentario: null, cuencaId: 1, empresaId: 1},
      {nombreArea: 'CRUZ DE LORENA', comentario: null, cuencaId: 1, empresaId: 1},
      {nombreArea: 'SIERRAS BLANCAS', comentario: null, cuencaId: 1, empresaId: 1}
  ]
  });

  //5. TIPO DE RECURSO
  const tipoRecurso = await prisma.tipoRecurso.createMany({
    data:[
    {tipoRecurso: 'CONVENCIONAL', subTipoRecurso: null, comentario: null},
    {tipoRecurso: 'NO CONVENCIONAL', subTipoRecurso: 'SHALE', comentario: null},
    {tipoRecurso: 'NO CONVENCIONAL', subTipoRecurso: 'TIGHT', comentario: null},
    {tipoRecurso: 'SIN RESERVORIO', subTipoRecurso: null, comentario: null},
  ]
  });

  const fluido = await prisma.fluido.createMany({
    data: [
      { tipoFluido: 'PETROLEO', comentario: null },
      { tipoFluido: 'GAS', comentario: null },
      { tipoFluido: 'AGUA', comentario: null }
    ]
  });
// 6. Crear Pozo
await prisma.pozo.createMany({
  data: [
    { cantidad: 100,
      mes: 1,
      anio: 2025,
      observaciones: null, 
      tipoRecursoId: 2, 
      fluidoId: 2,
    },
      { cantidad: 200,
      mes: 2,
      anio: 2025,
      observaciones: null,
      tipoRecursoId:2,
      fluidoId: 2,
      
    },
    { cantidad: 300,
      mes: 3,
      anio: 2025,
      observaciones: null,
      tipoRecursoId: 2,
      fluidoId: 2,
      
    },
    { cantidad: 400,
      mes: 4,
      anio: 2025,
      observaciones: null,
      tipoRecursoId: 2,
      fluidoId: 2,
      
    }
  ]
});
  // 7. Crear Produccion
  await prisma.produccion.createMany({
    data: [
      { cantidad: 2000, mes: 1, anio: 2025, observaciones: null, fluidoId:1, areaId: 1, empresaId: 1, tipoRecursoId: 2},
      { cantidad: 2500, mes: 2, anio: 2025, observaciones: null, fluidoId:1, areaId: 1, empresaId: 1, tipoRecursoId: 2},
      { cantidad: 3000, mes: 3, anio: 2025, observaciones: null, fluidoId:1, areaId: 1, empresaId: 1, tipoRecursoId: 2},
      { cantidad: 3500, mes: 4, anio: 2025, observaciones: null, fluidoId:1, areaId: 1, empresaId: 1, tipoRecursoId: 2},
      { cantidad: 2800, mes: 1, anio: 2025, observaciones: null, fluidoId:1, areaId: 1, empresaId: 1, tipoRecursoId: 3},
      { cantidad: 6500, mes: 2, anio: 2025, observaciones: null, fluidoId:1, areaId: 1, empresaId: 1, tipoRecursoId: 3},
      { cantidad: 4500, mes: 3, anio: 2025, observaciones: null, fluidoId:1, areaId: 1, empresaId: 1, tipoRecursoId: 3},
      { cantidad: 6500, mes: 4, anio: 2025, observaciones: null, fluidoId:1, areaId: 1, empresaId: 1, tipoRecursoId: 3},
      { cantidad: 6900, mes: 1, anio: 2025, observaciones: null, fluidoId:1, areaId: 1, empresaId: 1, tipoRecursoId: 1},
      { cantidad: 4500, mes: 2, anio: 2025, observaciones: null, fluidoId:1, areaId: 1, empresaId: 1, tipoRecursoId: 1},
      { cantidad: 8000, mes: 3, anio: 2025, observaciones: null, fluidoId:1, areaId: 1, empresaId: 1, tipoRecursoId: 1},
      { cantidad: 2500, mes: 4, anio: 2025, observaciones: null, fluidoId:1, areaId: 1, empresaId: 1, tipoRecursoId: 1},
            { cantidad: 2000, mes: 1, anio: 2025, observaciones: null, fluidoId:2, areaId: 1, empresaId: 1, tipoRecursoId: 2},
      { cantidad: 2500, mes: 2, anio: 2025, observaciones: null, fluidoId:2, areaId: 1, empresaId: 1, tipoRecursoId: 2},
      { cantidad: 3000, mes: 3, anio: 2025, observaciones: null, fluidoId:2, areaId: 1, empresaId: 1, tipoRecursoId: 2},
      { cantidad: 3500, mes: 4, anio: 2025, observaciones: null, fluidoId:2, areaId: 1, empresaId: 1, tipoRecursoId: 2},
      { cantidad: 2800, mes: 1, anio: 2025, observaciones: null, fluidoId:2, areaId: 1, empresaId: 1, tipoRecursoId: 3},
      { cantidad: 6500, mes: 2, anio: 2025, observaciones: null, fluidoId:2, areaId: 1, empresaId: 1, tipoRecursoId: 3},
      { cantidad: 4500, mes: 3, anio: 2025, observaciones: null, fluidoId:2, areaId: 1, empresaId: 1, tipoRecursoId: 3},
      { cantidad: 6500, mes: 4, anio: 2025, observaciones: null, fluidoId:2, areaId: 1, empresaId: 1, tipoRecursoId: 3},
      { cantidad: 6900, mes: 1, anio: 2025, observaciones: null, fluidoId:2, areaId: 1, empresaId: 1, tipoRecursoId: 1},
      { cantidad: 4500, mes: 2, anio: 2025, observaciones: null, fluidoId:2, areaId: 1, empresaId: 1, tipoRecursoId: 1},
      { cantidad: 8000, mes: 3, anio: 2025, observaciones: null, fluidoId:2, areaId: 1, empresaId: 1, tipoRecursoId: 1},
      { cantidad: 2500, mes: 4, anio: 2025, observaciones: null, fluidoId:2, areaId: 1, empresaId: 1, tipoRecursoId: 1},
      
      { cantidad: 2000, mes: 1, anio: 2024, observaciones: null, fluidoId:1, areaId: 1, empresaId: 1, tipoRecursoId: 2},
      { cantidad: 2500, mes: 2, anio: 2024, observaciones: null, fluidoId:1, areaId: 1, empresaId: 1, tipoRecursoId: 2},
      { cantidad: 3000, mes: 3, anio: 2024, observaciones: null, fluidoId:1, areaId: 1, empresaId: 1, tipoRecursoId: 2},
      { cantidad: 3500, mes: 4, anio: 2024, observaciones: null, fluidoId:1, areaId: 1, empresaId: 1, tipoRecursoId: 2},
      { cantidad: 2800, mes: 1, anio: 2024, observaciones: null, fluidoId:1, areaId: 1, empresaId: 1, tipoRecursoId: 3},
      { cantidad: 6500, mes: 2, anio: 2024, observaciones: null, fluidoId:1, areaId: 1, empresaId: 1, tipoRecursoId: 3},
      { cantidad: 4500, mes: 3, anio: 2024, observaciones: null, fluidoId:1, areaId: 1, empresaId: 1, tipoRecursoId: 3},
      { cantidad: 6500, mes: 4, anio: 2024, observaciones: null, fluidoId:1, areaId: 1, empresaId: 1, tipoRecursoId: 3},
      { cantidad: 6900, mes: 1, anio: 2024, observaciones: null, fluidoId:1, areaId: 1, empresaId: 1, tipoRecursoId: 1},
      { cantidad: 4500, mes: 2, anio: 2024, observaciones: null, fluidoId:1, areaId: 1, empresaId: 1, tipoRecursoId: 1},
      { cantidad: 8000, mes: 3, anio: 2024, observaciones: null, fluidoId:1, areaId: 1, empresaId: 1, tipoRecursoId: 1},
      { cantidad: 2500, mes: 4, anio: 2024, observaciones: null, fluidoId:1, areaId: 1, empresaId: 1, tipoRecursoId: 1},
            { cantidad: 2000, mes: 1, anio: 2024, observaciones: null, fluidoId:2, areaId: 1, empresaId: 1, tipoRecursoId: 2},
      { cantidad: 2500, mes: 2, anio: 2024, observaciones: null, fluidoId:2, areaId: 1, empresaId: 1, tipoRecursoId: 2},
      { cantidad: 3000, mes: 3, anio: 2024, observaciones: null, fluidoId:2, areaId: 1, empresaId: 1, tipoRecursoId: 2},
      { cantidad: 3500, mes: 4, anio: 2024, observaciones: null, fluidoId:2, areaId: 1, empresaId: 1, tipoRecursoId: 2},
      { cantidad: 2800, mes: 1, anio: 2024, observaciones: null, fluidoId:2, areaId: 1, empresaId: 1, tipoRecursoId: 3},
      { cantidad: 6500, mes: 2, anio: 2024, observaciones: null, fluidoId:2, areaId: 1, empresaId: 1, tipoRecursoId: 3},
      { cantidad: 4500, mes: 3, anio: 2024, observaciones: null, fluidoId:2, areaId: 1, empresaId: 1, tipoRecursoId: 3},
      { cantidad: 6500, mes: 4, anio: 2024, observaciones: null, fluidoId:2, areaId: 1, empresaId: 1, tipoRecursoId: 3},
      { cantidad: 6900, mes: 1, anio: 2024, observaciones: null, fluidoId:2, areaId: 1, empresaId: 1, tipoRecursoId: 1},
      { cantidad: 4500, mes: 2, anio: 2024, observaciones: null, fluidoId:2, areaId: 1, empresaId: 1, tipoRecursoId: 1},
      { cantidad: 8000, mes: 3, anio: 2024, observaciones: null, fluidoId:2, areaId: 1, empresaId: 1, tipoRecursoId: 1},
      { cantidad: 2500, mes: 4, anio: 2024, observaciones: null, fluidoId:2, areaId: 1, empresaId: 1, tipoRecursoId: 1},

      { cantidad: 2600, mes: 1, anio: 2023, observaciones: null, fluidoId:1, areaId: 1, empresaId: 1, tipoRecursoId: 2},
      { cantidad: 2200, mes: 2, anio: 2023, observaciones: null, fluidoId:1, areaId: 1, empresaId: 1, tipoRecursoId: 2},
      { cantidad: 3900, mes: 3, anio: 2023, observaciones: null, fluidoId:1, areaId: 1, empresaId: 1, tipoRecursoId: 2},
      { cantidad: 3700, mes: 4, anio: 2023, observaciones: null, fluidoId:1, areaId: 1, empresaId: 1, tipoRecursoId: 2},
      { cantidad: 2600, mes: 1, anio: 2023, observaciones: null, fluidoId:1, areaId: 1, empresaId: 1, tipoRecursoId: 3},
      { cantidad: 6100, mes: 2, anio: 2023, observaciones: null, fluidoId:1, areaId: 1, empresaId: 1, tipoRecursoId: 3},
      { cantidad: 4000, mes: 3, anio: 2023, observaciones: null, fluidoId:1, areaId: 1, empresaId: 1, tipoRecursoId: 3},
      { cantidad: 6900, mes: 4, anio: 2023, observaciones: null, fluidoId:1, areaId: 1, empresaId: 1, tipoRecursoId: 3},
      { cantidad: 6100, mes: 1, anio: 2023, observaciones: null, fluidoId:1, areaId: 1, empresaId: 1, tipoRecursoId: 1},
      { cantidad: 4300, mes: 2, anio: 2023, observaciones: null, fluidoId:1, areaId: 1, empresaId: 1, tipoRecursoId: 1},
      { cantidad: 8200, mes: 3, anio: 2023, observaciones: null, fluidoId:1, areaId: 1, empresaId: 1, tipoRecursoId: 1},
      { cantidad: 2100, mes: 4, anio: 2023, observaciones: null, fluidoId:1, areaId: 1, empresaId: 1, tipoRecursoId: 1},
            { cantidad: 2700, mes: 1, anio: 2023, observaciones: null, fluidoId:2, areaId: 1, empresaId: 1, tipoRecursoId: 2},
      { cantidad: 2900, mes: 2, anio: 2023, observaciones: null, fluidoId:2, areaId: 1, empresaId: 1, tipoRecursoId: 2},
      { cantidad: 3100, mes: 3, anio: 2023, observaciones: null, fluidoId:2, areaId: 1, empresaId: 1, tipoRecursoId: 2},
      { cantidad: 3600, mes: 4, anio: 2023, observaciones: null, fluidoId:2, areaId: 1, empresaId: 1, tipoRecursoId: 2},
      { cantidad: 2100, mes: 1, anio: 2023, observaciones: null, fluidoId:2, areaId: 1, empresaId: 1, tipoRecursoId: 3},
      { cantidad: 6700, mes: 2, anio: 2023, observaciones: null, fluidoId:2, areaId: 1, empresaId: 1, tipoRecursoId: 3},
      { cantidad: 4200, mes: 3, anio: 2023, observaciones: null, fluidoId:2, areaId: 1, empresaId: 1, tipoRecursoId: 3},
      { cantidad: 6800, mes: 4, anio: 2023, observaciones: null, fluidoId:2, areaId: 1, empresaId: 1, tipoRecursoId: 3},
      { cantidad: 6700, mes: 1, anio: 2023, observaciones: null, fluidoId:2, areaId: 1, empresaId: 1, tipoRecursoId: 1},
      { cantidad: 4100, mes: 2, anio: 2023, observaciones: null, fluidoId:2, areaId: 1, empresaId: 1, tipoRecursoId: 1},
      { cantidad: 8600, mes: 3, anio: 2023, observaciones: null, fluidoId:2, areaId: 1, empresaId: 1, tipoRecursoId: 1},
      { cantidad: 2000, mes: 4, anio: 2023, observaciones: null, fluidoId:2, areaId: 1, empresaId: 1, tipoRecursoId: 1}
    ]
  });
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });