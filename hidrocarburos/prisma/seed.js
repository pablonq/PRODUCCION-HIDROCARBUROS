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
  await prisma.produccionEmpresa.createMany({
    data: [
      // PETROLEO EMPRESA 1
      { cantidad: 2000, mes: 1, anio: 2025, observaciones: null, fluidoId:1, empresaId: 1},
      { cantidad: 2500, mes: 2, anio: 2025, observaciones: null, fluidoId:1, empresaId: 1},
      { cantidad: 3000, mes: 3, anio: 2025, observaciones: null, fluidoId:1, empresaId: 1},
      { cantidad: 3500, mes: 4, anio: 2025, observaciones: null, fluidoId:1, empresaId: 1},
      // PETROLEO EMPRESA 2
      { cantidad: 2800, mes: 1, anio: 2025, observaciones: null, fluidoId:1, empresaId: 2},
      { cantidad: 6500, mes: 2, anio: 2025, observaciones: null, fluidoId:1, empresaId: 2},
      { cantidad: 4500, mes: 3, anio: 2025, observaciones: null, fluidoId:1, empresaId: 2},
      { cantidad: 6500, mes: 4, anio: 2025, observaciones: null, fluidoId:1, empresaId: 2},
      // PETROLEO EMPRESA 3
      { cantidad: 6900, mes: 1, anio: 2025, observaciones: null, fluidoId:1, empresaId: 3},
      { cantidad: 4500, mes: 2, anio: 2025, observaciones: null, fluidoId:1, empresaId: 3},
      { cantidad: 8000, mes: 3, anio: 2025, observaciones: null, fluidoId:1, empresaId: 3},
      { cantidad: 2500, mes: 4, anio: 2025, observaciones: null, fluidoId:1, empresaId: 3},
      // GAS EMPRESA 1
      { cantidad: 2000, mes: 1, anio: 2025, observaciones: null, fluidoId:2, empresaId: 1},
      { cantidad: 2500, mes: 2, anio: 2025, observaciones: null, fluidoId:2, empresaId: 1},
      { cantidad: 3000, mes: 3, anio: 2025, observaciones: null, fluidoId:2, empresaId: 1},
      { cantidad: 3500, mes: 4, anio: 2025, observaciones: null, fluidoId:2, empresaId: 1},
      // GAS EMPRESA 2
      { cantidad: 2800, mes: 1, anio: 2025, observaciones: null, fluidoId:2, empresaId: 2},
      { cantidad: 6500, mes: 2, anio: 2025, observaciones: null, fluidoId:2, empresaId: 2},
      { cantidad: 4500, mes: 3, anio: 2025, observaciones: null, fluidoId:2, empresaId: 2},
      { cantidad: 6500, mes: 4, anio: 2025, observaciones: null, fluidoId:2, empresaId: 2},
      // GAS EMPRESA 3
      { cantidad: 6900, mes: 1, anio: 2025, observaciones: null, fluidoId:2, empresaId: 3},
      { cantidad: 4500, mes: 2, anio: 2025, observaciones: null, fluidoId:2, empresaId: 3},
      { cantidad: 8000, mes: 3, anio: 2025, observaciones: null, fluidoId:2, empresaId: 3},
      { cantidad: 2500, mes: 4, anio: 2025, observaciones: null, fluidoId:2, empresaId: 3},
      // PETROLEO ANUAL EMPRESA 1
      { cantidad: 11000, mes: null, anio: 2024, observaciones: null, fluidoId:1, empresaId: 1},
      { cantidad: 12500, mes: null, anio: 2023, observaciones: null, fluidoId:1, empresaId: 1},
      { cantidad: 13000, mes: null, anio: 2022, observaciones: null, fluidoId:1, empresaId: 1},
      { cantidad: 13500, mes: null, anio: 2021, observaciones: null, fluidoId:1, empresaId: 1},
      { cantidad: 12800, mes: null, anio: 2020, observaciones: null, fluidoId:1, empresaId: 1},
      { cantidad: 16500, mes: null, anio: 2019, observaciones: null, fluidoId:1, empresaId: 1},
      { cantidad: 14500, mes: null, anio: 2018, observaciones: null, fluidoId:1, empresaId: 1},
      { cantidad: 16500, mes: null, anio: 2017, observaciones: null, fluidoId:1, empresaId: 1},
      { cantidad: 16900, mes: null, anio: 2016, observaciones: null, fluidoId:1, empresaId: 1},
      { cantidad: 14500, mes: null, anio: 2015, observaciones: null, fluidoId:1, empresaId: 1},
      { cantidad: 18000, mes: null, anio: 2014, observaciones: null, fluidoId:1, empresaId: 1},
      { cantidad: 12500, mes: null, anio: 2013, observaciones: null, fluidoId:1, empresaId: 1},
      { cantidad: 12000, mes: null, anio: 2012, observaciones: null, fluidoId:1, empresaId: 1},
      { cantidad: 12500, mes: null, anio: 2011, observaciones: null, fluidoId:1, empresaId: 1},
      { cantidad: 13000, mes: null, anio: 2010, observaciones: null, fluidoId:1, empresaId: 1},
      // PETROLEO ANUAL EMPRESA 2
      { cantidad: 13500, mes: null, anio: 2024, observaciones: null, fluidoId:1, empresaId: 2},
      { cantidad: 12800, mes: null, anio: 2023, observaciones: null, fluidoId:1, empresaId: 2},
      { cantidad: 16500, mes: null, anio: 2022, observaciones: null, fluidoId:1, empresaId: 2},
      { cantidad: 14500, mes: null, anio: 2021, observaciones: null, fluidoId:1, empresaId: 2},
      { cantidad: 16500, mes: null, anio: 2020, observaciones: null, fluidoId:1, empresaId: 2},
      { cantidad: 16900, mes: null, anio: 2019, observaciones: null, fluidoId:1, empresaId: 2},
      { cantidad: 14500, mes: null, anio: 2018, observaciones: null, fluidoId:1, empresaId: 2},
      { cantidad: 18000, mes: null, anio: 2017, observaciones: null, fluidoId:1, empresaId: 2},
      { cantidad: 12500, mes: null, anio: 2016, observaciones: null, fluidoId:1, empresaId: 2},
      { cantidad: 12000, mes: null, anio: 2015, observaciones: null, fluidoId:1, empresaId: 2},
      { cantidad: 12500, mes: null, anio: 2014, observaciones: null, fluidoId:1, empresaId: 2},
      { cantidad: 13000, mes: null, anio: 2013, observaciones: null, fluidoId:1, empresaId: 2},
      { cantidad: 13500, mes: null, anio: 2012, observaciones: null, fluidoId:1, empresaId: 2},
      { cantidad: 13000, mes: null, anio: 2011, observaciones: null, fluidoId:1, empresaId: 2},
      { cantidad: 13500, mes: null, anio: 2010, observaciones: null, fluidoId:1, empresaId: 2},

      //PETROLEO ANUAL EMPRESA 3
      { cantidad: 12600, mes: null, anio: 2024, observaciones: null, fluidoId:1, empresaId: 3},
      { cantidad: 12200, mes: null, anio: 2023, observaciones: null, fluidoId:1, empresaId: 3},
      { cantidad: 11900, mes: null, anio: 2022, observaciones: null, fluidoId:1, empresaId: 3},
      { cantidad: 13700, mes: null, anio: 2021, observaciones: null, fluidoId:1, empresaId: 3},
      { cantidad: 12600, mes: null, anio: 2020, observaciones: null, fluidoId:1, empresaId: 3},
      { cantidad: 16100, mes: null, anio: 2019, observaciones: null, fluidoId:1, empresaId: 3},
      { cantidad: 14000, mes: null, anio: 2018, observaciones: null, fluidoId:1, empresaId: 3},
      { cantidad: 16900, mes: null, anio: 2017, observaciones: null, fluidoId:1, empresaId: 3},
      { cantidad: 16100, mes: null, anio: 2016, observaciones: null, fluidoId:1, empresaId: 3},
      { cantidad: 14300, mes: null, anio: 2015, observaciones: null, fluidoId:1, empresaId: 3},
      { cantidad: 18200, mes: null, anio: 2014, observaciones: null, fluidoId:1, empresaId: 3},
      { cantidad: 12100, mes: null, anio: 2013, observaciones: null, fluidoId:1, empresaId: 3},
      { cantidad: 12700, mes: null, anio: 2012, observaciones: null, fluidoId:1, empresaId: 3},
      { cantidad: 12900, mes: null, anio: 2011, observaciones: null, fluidoId:1, empresaId: 3},
      { cantidad: 13100, mes: null, anio: 2010, observaciones: null, fluidoId:1, empresaId: 3},
      //GAS ANUAL EMPRESA 1
      { cantidad: 122700, mes: null, anio: 2024, observaciones: null, fluidoId:2, empresaId: 1},
      { cantidad: 212900, mes: null, anio: 2023, observaciones: null, fluidoId:2, empresaId: 1},
      { cantidad: 213100, mes: null, anio: 2022, observaciones: null, fluidoId:2, empresaId: 1},
      { cantidad: 213600, mes: null, anio: 2021, observaciones: null, fluidoId:2, empresaId: 1},
      { cantidad: 222100, mes: null, anio: 2020, observaciones: null, fluidoId:2, empresaId: 1},
      { cantidad: 226700, mes: null, anio: 2019, observaciones: null, fluidoId:2, empresaId: 1},
      { cantidad: 114200, mes: null, anio: 2018, observaciones: null, fluidoId:2, empresaId: 1},
      { cantidad: 226800, mes: null, anio: 2017, observaciones: null, fluidoId:2, empresaId: 1},
      { cantidad: 126700, mes: null, anio: 2016, observaciones: null, fluidoId:2, empresaId: 1},
      { cantidad: 214100, mes: null, anio: 2015, observaciones: null, fluidoId:2, empresaId: 1},
      { cantidad: 228600, mes: null, anio: 2014, observaciones: null, fluidoId:2, empresaId: 1},
      { cantidad: 212000, mes: null, anio: 2013, observaciones: null, fluidoId:2, empresaId: 1},
      { cantidad: 222000, mes: null, anio: 2012, observaciones: null, fluidoId:2, empresaId: 1},
      { cantidad: 112000, mes: null, anio: 2011, observaciones: null, fluidoId:2, empresaId: 1},
      { cantidad: 112000, mes: null, anio: 2010, observaciones: null, fluidoId:2, empresaId: 1},
      //GAS ANUAL EMPRESA 2
      { cantidad: 122700, mes: null, anio: 2024, observaciones: null, fluidoId:2, empresaId: 2},
      { cantidad: 212900, mes: null, anio: 2023, observaciones: null, fluidoId:2, empresaId: 2},
      { cantidad: 213100, mes: null, anio: 2022, observaciones: null, fluidoId:2, empresaId: 2},
      { cantidad: 213600, mes: null, anio: 2021, observaciones: null, fluidoId:2, empresaId: 2},
      { cantidad: 222100, mes: null, anio: 2020, observaciones: null, fluidoId:2, empresaId: 2},
      { cantidad: 226700, mes: null, anio: 2019, observaciones: null, fluidoId:2, empresaId: 2},
      { cantidad: 114200, mes: null, anio: 2018, observaciones: null, fluidoId:2, empresaId: 2},
      { cantidad: 226800, mes: null, anio: 2017, observaciones: null, fluidoId:2, empresaId: 2},
      { cantidad: 126700, mes: null, anio: 2016, observaciones: null, fluidoId:2, empresaId: 2},
      { cantidad: 214100, mes: null, anio: 2015, observaciones: null, fluidoId:2, empresaId: 2},
      { cantidad: 228600, mes: null, anio: 2014, observaciones: null, fluidoId:2, empresaId: 2},
      { cantidad: 212000, mes: null, anio: 2013, observaciones: null, fluidoId:2, empresaId: 2},
      { cantidad: 222000, mes: null, anio: 2012, observaciones: null, fluidoId:2, empresaId: 2},
      { cantidad: 112000, mes: null, anio: 2011, observaciones: null, fluidoId:2, empresaId: 2},
      { cantidad: 112000, mes: null, anio: 2010, observaciones: null, fluidoId:2, empresaId: 2},
      //GAS ANUAL EMPRESA 3
      { cantidad: 122700, mes: null, anio: 2024, observaciones: null, fluidoId:2, empresaId: 3},
      { cantidad: 212900, mes: null, anio: 2023, observaciones: null, fluidoId:2, empresaId: 3},
      { cantidad: 213100, mes: null, anio: 2022, observaciones: null, fluidoId:2, empresaId: 3},
      { cantidad: 213600, mes: null, anio: 2021, observaciones: null, fluidoId:2, empresaId: 3},
      { cantidad: 222100, mes: null, anio: 2020, observaciones: null, fluidoId:2, empresaId: 3},
      { cantidad: 226700, mes: null, anio: 2019, observaciones: null, fluidoId:2, empresaId: 3},
      { cantidad: 114200, mes: null, anio: 2018, observaciones: null, fluidoId:2, empresaId: 3},
      { cantidad: 226800, mes: null, anio: 2017, observaciones: null, fluidoId:2, empresaId: 3},
      { cantidad: 126700, mes: null, anio: 2016, observaciones: null, fluidoId:2, empresaId: 3},
      { cantidad: 214100, mes: null, anio: 2015, observaciones: null, fluidoId:2, empresaId: 3},
      { cantidad: 228600, mes: null, anio: 2014, observaciones: null, fluidoId:2, empresaId: 3},
      { cantidad: 212000, mes: null, anio: 2013, observaciones: null, fluidoId:2, empresaId: 3},
      { cantidad: 222000, mes: null, anio: 2012, observaciones: null, fluidoId:2, empresaId: 3},
      { cantidad: 112000, mes: null, anio: 2011, observaciones: null, fluidoId:2, empresaId: 3},
      { cantidad: 112000, mes: null, anio: 2010, observaciones: null, fluidoId:2, empresaId: 3},
      
    ]
  });

  await prisma.produccionRecurso.createMany({
    data: [
      //PETROLEO MENSUAL CONVENCIONAL
      {cantidad: 122700, mes: 1, anio: 2025, observaciones: null, fluidoId:1, tipoRecursoId: 1},
      {cantidad: 212900, mes: 2, anio: 2025, observaciones: null, fluidoId:1, tipoRecursoId: 1},
      {cantidad: 213100, mes: 3, anio: 2025, observaciones: null, fluidoId:1, tipoRecursoId: 1},
      {cantidad: 213600, mes: 4, anio: 2025, observaciones: null, fluidoId:1, tipoRecursoId: 1},
      {cantidad: 222100, mes: 5, anio: 2025, observaciones: null, fluidoId:1, tipoRecursoId: 1},
      {cantidad: 226700, mes: 6, anio: 2025, observaciones: null, fluidoId:1, tipoRecursoId: 1},
      {cantidad: 114200, mes: 7, anio: 2025, observaciones: null, fluidoId:1, tipoRecursoId: 1},
      //PETROLEO MENSUAL SHALE
      {cantidad: 226800, mes: 1, anio: 2025, observaciones: null, fluidoId:1, tipoRecursoId: 2},
      {cantidad: 126700, mes: 2, anio: 2025, observaciones: null, fluidoId:1, tipoRecursoId: 2},
      {cantidad: 214100, mes: 3, anio: 2025, observaciones: null, fluidoId:1, tipoRecursoId: 2},
      {cantidad: 228600, mes: 4, anio: 2025, observaciones: null, fluidoId:1, tipoRecursoId: 2},
      {cantidad: 212000, mes: 5, anio: 2025, observaciones: null, fluidoId:1, tipoRecursoId: 2},
      {cantidad: 222000, mes: 6, anio: 2025, observaciones: null, fluidoId:1, tipoRecursoId: 2},
      {cantidad: 112000, mes: 7, anio: 2025, observaciones: null, fluidoId:1, tipoRecursoId: 2},
      //PETROLEO MENSUAL TIGHT
      {cantidad: 112000, mes: 1, anio: 2025, observaciones: null, fluidoId:1, tipoRecursoId: 3},
      {cantidad: 212000, mes: 2, anio: 2025, observaciones: null, fluidoId:1, tipoRecursoId: 3},
      {cantidad: 222000, mes: 3, anio: 2025, observaciones: null, fluidoId:1, tipoRecursoId: 3},
      {cantidad: 112000, mes: 4, anio: 2025, observaciones: null, fluidoId:1, tipoRecursoId: 3},
      {cantidad: 212000, mes: 5, anio: 2025, observaciones: null, fluidoId:1, tipoRecursoId: 3},
      {cantidad: 222000, mes: 6, anio: 2025, observaciones: null, fluidoId:1, tipoRecursoId: 3},
      {cantidad: 112000, mes: 7, anio: 2025, observaciones: null, fluidoId:1, tipoRecursoId: 3},
      //GAS MENSUAL CONVENCIONAL
      {cantidad: 112000, mes: 1, anio: 2025, observaciones: null, fluidoId:2, tipoRecursoId: 1},
      {cantidad: 212000, mes: 2, anio: 2025, observaciones: null, fluidoId:2, tipoRecursoId: 1},
      {cantidad: 222000, mes: 3, anio: 2025, observaciones: null, fluidoId:2, tipoRecursoId: 1},
      {cantidad: 112000, mes: 4, anio: 2025, observaciones: null, fluidoId:2, tipoRecursoId: 1},
      {cantidad: 212000, mes: 5, anio: 2025, observaciones: null, fluidoId:2, tipoRecursoId: 1},
      {cantidad: 222000, mes: 6, anio: 2025, observaciones: null, fluidoId:2, tipoRecursoId: 1},
      {cantidad: 112000, mes: 7, anio: 2025, observaciones: null, fluidoId:2, tipoRecursoId: 1},
      //GAS MENSUAL SHALE
      {cantidad: 112000, mes: 1, anio: 2025, observaciones: null, fluidoId:2, tipoRecursoId: 2},
      {cantidad: 212000, mes: 2, anio: 2025, observaciones: null, fluidoId:2, tipoRecursoId: 2},
      {cantidad: 222000, mes: 3, anio: 2025, observaciones: null, fluidoId:2, tipoRecursoId: 2},
      {cantidad: 112000, mes: 4, anio: 2025, observaciones: null, fluidoId:2, tipoRecursoId: 2},
      {cantidad: 212000, mes: 5, anio: 2025, observaciones: null, fluidoId:2, tipoRecursoId: 2},
      {cantidad: 222000, mes: 6, anio: 2025, observaciones: null, fluidoId:2, tipoRecursoId: 2},
      {cantidad: 112000, mes: 7, anio: 2025, observaciones: null, fluidoId:2, tipoRecursoId: 2},
      //GAS MENSUAL TIGHT
      {cantidad: 112000, mes: 1, anio: 2025, observaciones: null, fluidoId:2, tipoRecursoId: 3},
      {cantidad: 212000, mes: 2, anio: 2025, observaciones: null, fluidoId:2, tipoRecursoId: 3},
      {cantidad: 222000, mes: 3, anio: 2025, observaciones: null, fluidoId:2, tipoRecursoId: 3},
      {cantidad: 112000, mes: 4, anio: 2025, observaciones: null, fluidoId:2, tipoRecursoId: 3},
      {cantidad: 212000, mes: 5, anio: 2025, observaciones: null, fluidoId:2, tipoRecursoId: 3},
      {cantidad: 222000, mes: 6, anio: 2025, observaciones: null, fluidoId:2, tipoRecursoId: 3},
      {cantidad: 112000, mes: 7, anio: 2025, observaciones: null, fluidoId:2, tipoRecursoId: 3},
      //PETROLEO ANUAL CONVENCIONAL
      {cantidad: 112000, mes: null, anio: 2024, observaciones: null, fluidoId:1, tipoRecursoId: 1},
      {cantidad: 212000, mes: null, anio: 2023, observaciones: null, fluidoId:1, tipoRecursoId: 1},
      {cantidad: 222000, mes: null, anio: 2022, observaciones: null, fluidoId:1, tipoRecursoId: 1},
      {cantidad: 112000, mes: null, anio: 2021, observaciones: null, fluidoId:1, tipoRecursoId: 1},
      {cantidad: 212000, mes: null, anio: 2020, observaciones: null, fluidoId:1, tipoRecursoId: 1},
      {cantidad: 222000, mes: null, anio: 2019, observaciones: null, fluidoId:1, tipoRecursoId: 1},
      {cantidad: 112000, mes: null, anio: 2018, observaciones: null, fluidoId:1, tipoRecursoId: 1},
      {cantidad: 212000, mes: null, anio: 2017, observaciones: null, fluidoId:1, tipoRecursoId: 1},
      {cantidad: 222000, mes: null, anio: 2016, observaciones: null, fluidoId:1, tipoRecursoId: 1},
      {cantidad: 112000, mes: null, anio: 2015, observaciones: null, fluidoId:1, tipoRecursoId: 1},
      {cantidad: 212000, mes: null, anio: 2014, observaciones: null, fluidoId:1, tipoRecursoId: 1},
      {cantidad: 222000, mes: null, anio: 2013, observaciones: null, fluidoId:1, tipoRecursoId: 1},
      {cantidad: 112000, mes: null, anio: 2012, observaciones: null, fluidoId:1, tipoRecursoId: 1},
      {cantidad: 212000, mes: null, anio: 2011, observaciones: null, fluidoId:1, tipoRecursoId: 1},
      {cantidad: 222000, mes: null, anio: 2010, observaciones: null, fluidoId:1, tipoRecursoId: 1},
      //PETROLEO ANUAL SHALE
      {cantidad: 112000, mes: null, anio: 2024, observaciones: null, fluidoId:1, tipoRecursoId: 2},
      {cantidad: 212000, mes: null, anio: 2023, observaciones: null, fluidoId:1, tipoRecursoId: 2},
      {cantidad: 222000, mes: null, anio: 2022, observaciones: null, fluidoId:1, tipoRecursoId: 2},
      {cantidad: 112000, mes: null, anio: 2021, observaciones: null, fluidoId:1, tipoRecursoId: 2},
      {cantidad: 212000, mes: null, anio: 2020, observaciones: null, fluidoId:1, tipoRecursoId: 2},
      {cantidad: 222000, mes: null, anio: 2019, observaciones: null, fluidoId:1, tipoRecursoId: 2},
      {cantidad: 112000, mes: null, anio: 2018, observaciones: null, fluidoId:1, tipoRecursoId: 2},
      {cantidad: 212000, mes: null, anio: 2017, observaciones: null, fluidoId:1, tipoRecursoId: 2},
      {cantidad: 222000, mes: null, anio: 2016, observaciones: null, fluidoId:1, tipoRecursoId: 2},
      {cantidad: 112000, mes: null, anio: 2015, observaciones: null, fluidoId:1, tipoRecursoId: 2},
      {cantidad: 212000, mes: null, anio: 2014, observaciones: null, fluidoId:1, tipoRecursoId: 2},
      {cantidad: 222000, mes: null, anio: 2013, observaciones: null, fluidoId:1, tipoRecursoId: 2},
      {cantidad: 112000, mes: null, anio: 2012, observaciones: null, fluidoId:1, tipoRecursoId: 2},
      {cantidad: 212000, mes: null, anio: 2011, observaciones: null, fluidoId:1, tipoRecursoId: 2},
      {cantidad: 222000, mes: null, anio: 2010, observaciones: null, fluidoId:1, tipoRecursoId: 2},
      //PETROLEO ANUAL TIGHT
      {cantidad: 112000, mes: null, anio: 2024, observaciones: null, fluidoId:1, tipoRecursoId: 3},
      {cantidad: 212000, mes: null, anio: 2023, observaciones: null, fluidoId:1, tipoRecursoId: 3},
      {cantidad: 222000, mes: null, anio: 2022, observaciones: null, fluidoId:1, tipoRecursoId: 3},
      {cantidad: 112000, mes: null, anio: 2021, observaciones: null, fluidoId:1, tipoRecursoId: 3},
      {cantidad: 212000, mes: null, anio: 2020, observaciones: null, fluidoId:1, tipoRecursoId: 3},
      {cantidad: 222000, mes: null, anio: 2019, observaciones: null, fluidoId:1, tipoRecursoId: 3},
      {cantidad: 112000, mes: null, anio: 2018, observaciones: null, fluidoId:1, tipoRecursoId: 3},
      {cantidad: 212000, mes: null, anio: 2017, observaciones: null, fluidoId:1, tipoRecursoId: 3},
      {cantidad: 222000, mes: null, anio: 2016, observaciones: null, fluidoId:1, tipoRecursoId: 3},
      {cantidad: 112000, mes: null, anio: 2015, observaciones: null, fluidoId:1, tipoRecursoId: 3},
      {cantidad: 212000, mes: null, anio: 2014, observaciones: null, fluidoId:1, tipoRecursoId: 3},
      {cantidad: 222000, mes: null, anio: 2013, observaciones: null, fluidoId:1, tipoRecursoId: 3},
      {cantidad: 112000, mes: null, anio: 2012, observaciones: null, fluidoId:1, tipoRecursoId: 3},
      {cantidad: 212000, mes: null, anio: 2011, observaciones: null, fluidoId:1, tipoRecursoId: 3},
      {cantidad: 222000, mes: null, anio: 2010, observaciones: null, fluidoId:1, tipoRecursoId: 3},
      //GAS ANUAL CONVENCIONAL
      {cantidad: 112000, mes: null, anio: 2024, observaciones: null, fluidoId:2, tipoRecursoId: 1},
      {cantidad: 212000, mes: null, anio: 2023, observaciones: null, fluidoId:2, tipoRecursoId: 1},
      {cantidad: 222000, mes: null, anio: 2022, observaciones: null, fluidoId:2, tipoRecursoId: 1},
      {cantidad: 112000, mes: null, anio: 2021, observaciones: null, fluidoId:2, tipoRecursoId: 1},
      {cantidad: 212000, mes: null, anio: 2020, observaciones: null, fluidoId:2, tipoRecursoId: 1},
      {cantidad: 222000, mes: null, anio: 2019, observaciones: null, fluidoId:2, tipoRecursoId: 1},
      {cantidad: 112000, mes: null, anio: 2018, observaciones: null, fluidoId:2, tipoRecursoId: 1},
      {cantidad: 212000, mes: null, anio: 2017, observaciones: null, fluidoId:2, tipoRecursoId: 1},
      {cantidad: 222000, mes: null, anio: 2016, observaciones: null, fluidoId:2, tipoRecursoId: 1},
      {cantidad: 112000, mes: null, anio: 2015, observaciones: null, fluidoId:2, tipoRecursoId: 1},
      {cantidad: 212000, mes: null, anio: 2014, observaciones: null, fluidoId:2, tipoRecursoId: 1},
      {cantidad: 222000, mes: null, anio: 2013, observaciones: null, fluidoId:2, tipoRecursoId: 1},
      {cantidad: 112000, mes: null, anio: 2012, observaciones: null, fluidoId:2, tipoRecursoId: 1},
      {cantidad: 212000, mes: null, anio: 2011, observaciones: null, fluidoId:2, tipoRecursoId: 1},
      {cantidad: 222000, mes: null, anio: 2010, observaciones: null, fluidoId:2, tipoRecursoId: 1},
      //GAS ANUAL SHALE
      {cantidad: 112000, mes: null, anio: 2024, observaciones: null, fluidoId:2, tipoRecursoId: 2},
      {cantidad: 212000, mes: null, anio: 2023, observaciones: null, fluidoId:2, tipoRecursoId: 2},
      {cantidad: 222000, mes: null, anio: 2022, observaciones: null, fluidoId:2, tipoRecursoId: 2},
      {cantidad: 112000, mes: null, anio: 2021, observaciones: null, fluidoId:2, tipoRecursoId: 2},
      {cantidad: 212000, mes: null, anio: 2020, observaciones: null, fluidoId:2, tipoRecursoId: 2},
      {cantidad: 222000, mes: null, anio: 2019, observaciones: null, fluidoId:2, tipoRecursoId: 2},
      {cantidad: 112000, mes: null, anio: 2018, observaciones: null, fluidoId:2, tipoRecursoId: 2},
      {cantidad: 212000, mes: null, anio: 2017, observaciones: null, fluidoId:2, tipoRecursoId: 2},
      {cantidad: 222000, mes: null, anio: 2016, observaciones: null, fluidoId:2, tipoRecursoId: 2},
      {cantidad: 112000, mes: null, anio: 2015, observaciones: null, fluidoId:2, tipoRecursoId: 2},
      {cantidad: 212000, mes: null, anio: 2014, observaciones: null, fluidoId:2, tipoRecursoId: 2},
      {cantidad: 222000, mes: null, anio: 2013, observaciones: null, fluidoId:2, tipoRecursoId: 2},
      {cantidad: 112000, mes: null, anio: 2012, observaciones: null, fluidoId:2, tipoRecursoId: 2},
      {cantidad: 212000, mes: null, anio: 2011, observaciones: null, fluidoId:2, tipoRecursoId: 2},
      {cantidad: 222000, mes: null, anio: 2010, observaciones: null, fluidoId:2, tipoRecursoId: 2},
      //GAS ANUAL TIGHT
      {cantidad: 112000, mes: null, anio: 2024, observaciones: null, fluidoId:2, tipoRecursoId: 3},
      {cantidad: 212000, mes: null, anio: 2023, observaciones: null, fluidoId:2, tipoRecursoId: 3},
      {cantidad: 222000, mes: null, anio: 2022, observaciones: null, fluidoId:2, tipoRecursoId: 3},
      {cantidad: 112000, mes: null, anio: 2021, observaciones: null, fluidoId:2, tipoRecursoId: 3},
      {cantidad: 212000, mes: null, anio: 2020, observaciones: null, fluidoId:2, tipoRecursoId: 3},
      {cantidad: 222000, mes: null, anio: 2019, observaciones: null, fluidoId:2, tipoRecursoId: 3},
      {cantidad: 112000, mes: null, anio: 2018, observaciones: null, fluidoId:2, tipoRecursoId: 3},
      {cantidad: 212000, mes: null, anio: 2017, observaciones: null, fluidoId:2, tipoRecursoId: 3},
      {cantidad: 222000, mes: null, anio: 2016, observaciones: null, fluidoId:2, tipoRecursoId: 3},
      {cantidad: 112000, mes: null, anio: 2015, observaciones: null, fluidoId:2, tipoRecursoId: 3},
      {cantidad: 212000, mes: null, anio: 2014, observaciones: null, fluidoId:2, tipoRecursoId: 3},
      {cantidad: 222000, mes: null, anio: 2013, observaciones: null, fluidoId:2, tipoRecursoId: 3},
      {cantidad: 112000, mes: null, anio: 2012, observaciones: null, fluidoId:2, tipoRecursoId: 3},
      {cantidad: 212000, mes: null, anio: 2011, observaciones: null, fluidoId:2, tipoRecursoId: 3},
      {cantidad: 222000, mes: null, anio: 2010, observaciones: null, fluidoId:2, tipoRecursoId: 3},
    ]
  });

  await prisma.produccionArea.createMany({
    data: [
      //PETROLEO MENSUAL AREA 1
      {cantidad:3500, mes: 1, anio: 2025, observaciones: null, fluidoId:1, areaId: 1},
      {cantidad:4600, mes: 2, anio: 2025, observaciones: null, fluidoId:1, areaId: 1},
      {cantidad:5700, mes: 3, anio: 2025, observaciones: null, fluidoId:1, areaId: 1},
      {cantidad:6800, mes: 4, anio: 2025, observaciones: null, fluidoId:1, areaId: 1},
      {cantidad:7900, mes: 5, anio: 2025, observaciones: null, fluidoId:1, areaId: 1},
      {cantidad:8000, mes: 6, anio: 2025, observaciones: null, fluidoId:1, areaId: 1},
      {cantidad:9100, mes: 7, anio: 2025, observaciones: null, fluidoId:1, areaId: 1},
      //PETROLEO MENSUAL AREA 2
      {cantidad:6200, mes: 1, anio: 2025, observaciones: null, fluidoId:1, areaId: 2},
      {cantidad:1300, mes: 2, anio: 2025, observaciones: null, fluidoId:1, areaId: 2},
      {cantidad:2400, mes: 3, anio: 2025, observaciones: null, fluidoId:1, areaId: 2},
      {cantidad:3500, mes: 4, anio: 2025, observaciones: null, fluidoId:1, areaId: 2},
      {cantidad:4600, mes: 5, anio: 2025, observaciones: null, fluidoId:1, areaId: 2},
      {cantidad:5700, mes: 6, anio: 2025, observaciones: null, fluidoId:1, areaId: 2},
      {cantidad:6800, mes: 7, anio: 2025, observaciones: null, fluidoId:1, areaId: 2},
      //PETROLEO MENSUAL AREA 3
      {cantidad:3200, mes: 1, anio: 2025, observaciones: null, fluidoId:1, areaId: 3},
      {cantidad:4300, mes: 2, anio: 2025, observaciones: null, fluidoId:1, areaId: 3},
      {cantidad:5400, mes: 3, anio: 2025, observaciones: null, fluidoId:1, areaId: 3},
      {cantidad:6500, mes: 4, anio: 2025, observaciones: null, fluidoId:1, areaId: 3},
      {cantidad:7600, mes: 5, anio: 2025, observaciones: null, fluidoId:1, areaId: 3},
      {cantidad:8700, mes: 6, anio: 2025, observaciones: null, fluidoId:1, areaId: 3},
      {cantidad:9800, mes: 7, anio: 2025, observaciones: null, fluidoId:1, areaId: 3},
      //GAS MENSUAL AREA 1
      {cantidad:10200, mes: 1, anio: 2025, observaciones: null, fluidoId:2, areaId: 1},
      {cantidad:11200, mes: 2, anio: 2025, observaciones: null, fluidoId:2, areaId: 1},
      {cantidad:12200, mes: 3, anio: 2025, observaciones: null, fluidoId:2, areaId: 1},
      {cantidad:13200, mes: 4, anio: 2025, observaciones: null, fluidoId:2, areaId: 1},
      {cantidad:14200, mes: 5, anio: 2025, observaciones: null, fluidoId:2, areaId: 1},
      {cantidad:15200, mes: 6, anio: 2025, observaciones: null, fluidoId:2, areaId: 1},
      {cantidad:16200, mes: 7, anio: 2025, observaciones: null, fluidoId:2, areaId: 1},
      //GAS MENSUAL AREA 2
      {cantidad:17200, mes: 1, anio: 2025, observaciones: null, fluidoId:2, areaId: 2},
      {cantidad:18200, mes: 2, anio: 2025, observaciones: null, fluidoId:2, areaId: 2},
      {cantidad:19200, mes: 3, anio: 2025, observaciones: null, fluidoId:2, areaId: 2},
      {cantidad:20200, mes: 4, anio: 2025, observaciones: null, fluidoId:2, areaId: 2},
      {cantidad:21200, mes: 5, anio: 2025, observaciones: null, fluidoId:2, areaId: 2},
      {cantidad:22200, mes: 6, anio: 2025, observaciones: null, fluidoId:2, areaId: 2},
      {cantidad:23200, mes: 7, anio: 2025, observaciones: null, fluidoId:2, areaId: 2},
      //GAS MENSUAL AREA 3
      {cantidad:24200, mes: 1, anio: 2025, observaciones: null, fluidoId:2, areaId: 3},
      {cantidad:25200, mes: 2, anio: 2025, observaciones: null, fluidoId:2, areaId: 3},
      {cantidad:26200, mes: 3, anio: 2025, observaciones: null, fluidoId:2, areaId: 3},
      {cantidad:27200, mes: 4, anio: 2025, observaciones: null, fluidoId:2, areaId: 3},
      {cantidad:28200, mes: 5, anio: 2025, observaciones: null, fluidoId:2, areaId: 3},
      {cantidad:29200, mes: 6, anio: 2025, observaciones: null, fluidoId:2, areaId: 3},
      {cantidad:30200, mes: 7, anio: 2025, observaciones: null, fluidoId:2, areaId: 3},
      //GAS ANUAL AREA 1
      {cantidad:10200, mes: null, anio: 2024, observaciones: null, fluidoId:2, areaId: 1},
      {cantidad: 112000, mes: null, anio: 2023, observaciones: null, fluidoId:2, areaId: 1},
      {cantidad: 212000, mes: null, anio: 2022, observaciones: null, fluidoId:2, areaId: 1},
      {cantidad: 222000, mes: null, anio: 2021, observaciones: null, fluidoId:2, areaId: 1},
      {cantidad: 112000, mes: null, anio: 2020, observaciones: null, fluidoId:2, areaId: 1},
      {cantidad: 212000, mes: null, anio: 2019, observaciones: null, fluidoId:2, areaId: 1},
      {cantidad: 222000, mes: null, anio: 2018, observaciones: null, fluidoId:2, areaId: 1},
      {cantidad: 212000, mes: null, anio: 2017, observaciones: null, fluidoId:2, areaId: 1},
      {cantidad: 222000, mes: null, anio: 2016, observaciones: null, fluidoId:2, areaId: 1},
      {cantidad: 112000, mes: null, anio: 2015, observaciones: null, fluidoId:2, areaId: 1},
      {cantidad: 212000, mes: null, anio: 2014, observaciones: null, fluidoId:2, areaId: 1},
      {cantidad: 222000, mes: null, anio: 2013, observaciones: null, fluidoId:2, areaId: 1},
      {cantidad: 112000, mes: null, anio: 2012, observaciones: null, fluidoId:2, areaId: 1},
      {cantidad: 212000, mes: null, anio: 2011, observaciones: null, fluidoId:2, areaId: 1},
      {cantidad: 222000, mes: null, anio: 2010, observaciones: null, fluidoId:2, areaId: 1},
      //GAS ANUAL AREA 2
      {cantidad:10200, mes: null, anio: 2024, observaciones: null, fluidoId:2, areaId: 2},
      {cantidad: 112000, mes: null, anio: 2023, observaciones: null, fluidoId:2, areaId: 2},
      {cantidad: 212000, mes: null, anio: 2022, observaciones: null, fluidoId:2, areaId: 2},
      {cantidad: 222000, mes: null, anio: 2021, observaciones: null, fluidoId:2, areaId: 2},
      {cantidad: 112000, mes: null, anio: 2020, observaciones: null, fluidoId:2, areaId: 2},
      {cantidad: 212000, mes: null, anio: 2019, observaciones: null, fluidoId:2, areaId: 2},
      {cantidad: 222000, mes: null, anio: 2018, observaciones: null, fluidoId:2, areaId: 2},
      {cantidad: 212000, mes: null, anio: 2017, observaciones: null, fluidoId:2, areaId: 2},
      {cantidad: 222000, mes: null, anio: 2016, observaciones: null, fluidoId:2, areaId: 2},
      {cantidad: 112000, mes: null, anio: 2015, observaciones: null, fluidoId:2, areaId: 2},
      {cantidad: 212000, mes: null, anio: 2014, observaciones: null, fluidoId:2, areaId: 2},
      {cantidad: 222000, mes: null, anio: 2013, observaciones: null, fluidoId:2, areaId: 2},
      {cantidad: 112000, mes: null, anio: 2012, observaciones: null, fluidoId:2, areaId: 2},
      {cantidad: 212000, mes: null, anio: 2011, observaciones: null, fluidoId:2, areaId: 2},
      {cantidad: 222000, mes: null, anio: 2010, observaciones: null, fluidoId:2, areaId: 2},
      //GAS ANUAL AREA 3
      {cantidad:10200, mes: null, anio: 2024, observaciones: null, fluidoId:2, areaId: 3},
      {cantidad: 112000, mes: null, anio: 2023, observaciones: null, fluidoId:2, areaId: 3},
      {cantidad: 212000, mes: null, anio: 2022, observaciones: null, fluidoId:2, areaId: 3},
      {cantidad: 222000, mes: null, anio: 2021, observaciones: null, fluidoId:2, areaId: 3},
      {cantidad: 112000, mes: null, anio: 2020, observaciones: null, fluidoId:2, areaId: 3},
      {cantidad: 212000, mes: null, anio: 2019, observaciones: null, fluidoId:2, areaId: 3},
      {cantidad: 222000, mes: null, anio: 2018, observaciones: null, fluidoId:2, areaId: 3},
      {cantidad: 212000, mes: null, anio: 2017, observaciones: null, fluidoId:2, areaId: 3},
      {cantidad: 222000, mes: null, anio: 2016, observaciones: null, fluidoId:2, areaId: 3},
      {cantidad: 112000, mes: null, anio: 2015, observaciones: null, fluidoId:2, areaId: 3},
      {cantidad: 212000, mes: null, anio: 2014, observaciones: null, fluidoId:2, areaId: 3},
      {cantidad: 222000, mes: null, anio: 2013, observaciones: null, fluidoId:2, areaId: 3},
      {cantidad: 112000, mes: null, anio: 2012, observaciones: null, fluidoId:2, areaId: 3},
      {cantidad: 212000, mes: null, anio: 2011, observaciones: null, fluidoId:2, areaId: 3},
      {cantidad: 222000, mes: null, anio: 2010, observaciones: null, fluidoId:2, areaId: 3},
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