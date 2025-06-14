const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // 1. Crear Empresa
  const empresa = await prisma.empresa.create({
    data: {
      nombreEmpresa: 'SHELL ARGENTINA S.A.',
      comentario: null,
    },
  });

  // 2. Crear Cuenca
  const cuenca = await prisma.cuenca.create({
    data: {
      nombreCuenca: 'NEUQUINA',
      comentario: null,
    },
  });

  // 3. Crear Area
  const area = await prisma.area.create({
    data: {
      nombreArea: 'BAJADA DE AÑELO',
      comentario: null,
      cuencaId: cuenca.id,
      empresaId: empresa.id,
    },
  });

  const area2 = await prisma.area.create({
    data: {
      nombreArea: 'COIRON AMARGO SUR OESTE',
      comentario: null,
      cuencaId: cuenca.id,
      empresaId: empresa.id,
    },
  });

  const area3 = await prisma.area.create({
    data: {
      nombreArea: 'CRUZ DE LORENA',
      comentario: null,
      cuencaId: cuenca.id,
      empresaId: empresa.id,
    },
  });

  const area4 = await prisma.area.create({
    data: {
      nombreArea: 'SIERRAS BLANCAS',
      comentario: null,
      cuencaId: cuenca.id,
      empresaId: empresa.id,
    },
  });

  // 4. Crear Yacimiento
  const yacimiento = await prisma.yacimiento.create({
    data: {
      nombreYacimiento: 'BAJADA DE AÑELO',
      areaId: area.id,
    },
  });
  const yacimiento2 = await prisma.yacimiento.create({
    data: {
      nombreYacimiento: 'COIRON AMARGO SUR OESTE',
      areaId: area2.id,
    },
  });

  const yacimiento3 = await prisma.yacimiento.create({
    data: {
      nombreYacimiento: 'CRUZ DE LORENA',
      areaId: area3.id,
    },
  });

  const yacimiento4 = await prisma.yacimiento.create({
    data: {
      nombreYacimiento: 'SIERRAS BLANCAS',
      areaId: area4.id,
    },
  });

  //5. TIPO DE RECURSO
  const tipoRecurso = await prisma.tipoRecurso.create({
    data: {
      tipoRecurso: 'CONVENCIONAL',
      subTipoRecurso: null,
      comentario: null,
    },
  });

  const tipoRecurso1 = await prisma.tipoRecurso.create({
    data: {
      tipoRecurso: 'NO CONVENCIONAL',
      subTipoRecurso: 'SHALE',
      comentario: null,
    },
  });

  const tipoRecurso2 = await prisma.tipoRecurso.create({
    data: {
      tipoRecurso: 'NO CONVENCIONAL',
      subTipoRecurso: 'TIGHT',
      comentario: null,
    },
  });

  const tipoRecurso3 = await prisma.tipoRecurso.create({
    data: {
      tipoRecurso: 'SIN RESERVORIO',
      subTipoRecurso: null,
      comentario: null,
    },
  });

  // 6. Crear ClasificacionPozo
  const clasificacionPozo = await prisma.clasificacionPozo.create({
    data: { 
      clasificacionPozo: 'EXPLORACION',
      subClasificacionPozo: 'EXPLORACION', 
      comentario: null },
  });

  const clasificacionPozo2 = await prisma.clasificacionPozo.create({
    data: { 
      clasificacionPozo: 'EXPLORACION',
      subClasificacionPozo: 'EXTENSION', 
      comentario: null },
  });
  
  const clasificacionPozo3 = await prisma.clasificacionPozo.create({
    data: { 
      clasificacionPozo: 'EXPLOTACION',
      subClasificacionPozo: 'DESARROLLO', 
      comentario: null },
  });

  const clasificacionPozo4 = await prisma.clasificacionPozo.create({
    data: { 
      clasificacionPozo: 'EXPLOTACION',
      subClasificacionPozo: 'AVANZADA', 
      comentario: null },
  });

  const clasificacionPozo5 = await prisma.clasificacionPozo.create({
    data: { 
      clasificacionPozo: 'SERVICIO',
      subClasificacionPozo: 'CONTROL', 
      comentario: null },
  });

  const clasificacionPozo6 = await prisma.clasificacionPozo.create({
    data: { 
      clasificacionPozo: 'SERVICIO',
      subClasificacionPozo: 'SUMIDERO', 
      comentario: null },
  });

  // 7. Crear TipoPozo

  const tipoPozo = await prisma.tipoPozo.create({
    data: { tipoPozo: 'ACU', comentario: 'Acuífero' },
  });

  const tipoPozo1 = await prisma.tipoPozo.create({
    data: { tipoPozo: 'GAS', comentario: 'Gasifero' },
  });

  const tipoPozo2 = await prisma.tipoPozo.create({
    data: { tipoPozo: 'PET', comentario: 'Petrolifero' },
  });

  const tipoPozo3 = await prisma.tipoPozo.create({
    data: { tipoPozo: 'IA', comentario: 'Inyector de agua' },
  });

  const tipoPozo4 = await prisma.tipoPozo.create({
    data: { tipoPozo: 'IG', comentario: 'Inyector de gas' },
  });

  const tipoPozo5 = await prisma.tipoPozo.create({
    data: { tipoPozo: 'SUM', comentario: 'Sumidero' },
  });

  const tipoPozo6 = await prisma.tipoPozo.create({
    data: { tipoPozo: 'OT', comentario: 'Otro tipo de pozo' },
  });

  // 8. Estado Pozo
  const estadoPozo = await prisma.estadoPozo.create({
    data: { nombreEstado: 'A', comentario: 'Abandonado' },
  });

  const estadoPozo1 = await prisma.estadoPozo.create({
    data: { nombreEstado: 'AA', comentario: 'A abandonar' },
  });

  const estadoPozo2 = await prisma.estadoPozo.create({
    data: { nombreEstado: 'AT', comentario: 'Abandono temporario' },
  });

  const estadoPozo3 = await prisma.estadoPozo.create({
    data: { nombreEstado: 'EEF', comentario: 'Extracción efectiva' },
  });

  const estadoPozo4 = await prisma.estadoPozo.create({
    data: { nombreEstado: 'ES', comentario: 'En estudio' },
  });

  const estadoPozo5 = await prisma.estadoPozo.create({
    data: { nombreEstado: 'EER', comentario: 'En espera de reparación' },
  });
  
  const estadoPozo6 = await prisma.estadoPozo.create({
    data: { nombreEstado: 'EIE', comentario: 'En inyección efectiva' },
    });

  const estadoPozo7 = await prisma.estadoPozo.create({
    data: { nombreEstado: 'ARAP', comentario: 'Parado Alta relación Agua/Petróleo' },
  });

  const estadoPozo8 = await prisma.estadoPozo.create({
    data: { nombreEstado: 'ARGP', comentario: 'Parado Alta relación Gas/Petróleo' },
  });

  const estadoPozo9 = await prisma.estadoPozo.create({
    data: { nombreEstado: 'PT', comentario: 'Parado transitoriamente' },
  });

  const estadoPozo10 = await prisma.estadoPozo.create({
    data: { nombreEstado: 'ER', comentario: 'En reparación' },
  });

  const estadoPozo11 = await prisma.estadoPozo.create({
    data: { nombreEstado: 'ERG', comentario: 'En Reserva de Gas' },
  });

  const estadoPozo12 = await prisma.estadoPozo.create({
    data: { nombreEstado: 'RRSA', comentario: 'En Reserva para Recuperación Secundaria / Asistida' },
  });

  const estadoPozo13 = await prisma.estadoPozo.create({
    data: { nombreEstado: 'MP', comentario: 'Mantenimiento de Presión' },
  });

  const estadoPozo14 = await prisma.estadoPozo.create({
    data: { nombreEstado: 'OCA', comentario: 'Otras Situación Activo' },
  });

  const estadoPozo15 = await prisma.estadoPozo.create({
    data: { nombreEstado: 'OCI', comentario: 'Otras Situación Inactivo' },
  });

  // 8. Crear SistemaExtraccion
  await prisma.sistemaExtraccion.createMany({
    data: [
      { nombreSistema: 'BM', comentario: 'Bombeo Mecánico' },
      { nombreSistema: 'BH', comentario: 'Bombeo Hidráulico' },
      { nombreSistema: 'BES', comentario: 'Electro Sumergible' },
      { nombreSistema: 'GL', comentario: 'Gas Lift' },
      { nombreSistema: 'BCP', comentario: 'Cavidad Progresiva' },
      { nombreSistema: 'PL', comentario: 'Plunger Lift' },
      { nombreSistema: 'JP', comentario: 'Jet Pump' },
      { nombreSistema: 'OTE', comentario: 'Otros Tipos de Extracción' },
      { nombreSistema: 'SN', comentario: 'Surgencia Natural' },
      { nombreSistema: 'PIST', comentario: 'Pistoneo (Swabing)' },
    ],
  });

  // 9. Crear FormacionProductiva y PozoFormacion
  await prisma.formacionProductiva.createMany({
  data: [
    { nombreFormacion: 'AGRI', comentario: 'Agrio' },
    { nombreFormacion: 'AVER', comentario: 'Arcillas Verdes' },
    { nombreFormacion: 'BACO', comentario: 'Bajada Colorada' },
    { nombreFormacion: 'BBAR', comentario: 'Bajo Barreral' },
    { nombreFormacion: 'BNEG', comentario: 'Barda Negra' },
    { nombreFormacion: 'BARR', comentario: 'Barrancas' },
    { nombreFormacion: 'BASA', comentario: 'Basamento' },
    { nombreFormacion: 'BRVE', comentario: 'Brecha Verde' },
    { nombreFormacion: 'CACH', comentario: 'Cacheuta' },
    { nombreFormacion: 'CSEC', comentario: 'Cañadon Seco' },
    { nombreFormacion: 'CAST', comentario: 'Castillo' },
    { nombreFormacion: 'CATR', comentario: 'Catriel' },
    { nombreFormacion: 'CENT', comentario: 'Centenario' },
    { nombreFormacion: 'CHCH', comentario: 'Chachao' },
    { nombreFormacion: 'CHAC', comentario: 'Chachil' },
    { nombreFormacion: 'CHLL', comentario: 'Challacó' },
    { nombreFormacion: 'CHYO', comentario: 'Choiyoi' },
    { nombreFormacion: 'CORI', comentario: 'Comodoro Rivadavia' },
    { nombreFormacion: 'CRIN', comentario: 'Conglomerado Rojo Inferior' },
    { nombreFormacion: 'DILA', comentario: 'Divisadero Largo' },
    { nombreFormacion: 'ELTR', comentario: 'El Trebol' },
    { nombreFormacion: 'FIMP', comentario: 'Formación Improductiva' },
    { nombreFormacion: 'GLAU', comentario: 'Glauconítico' },
    { nombreFormacion: 'GCHU', comentario: 'Grupo Chubut' },
    { nombreFormacion: 'GNEU', comentario: 'Grupo Neuquén' },
    { nombreFormacion: 'HUAM', comentario: 'Huamampampa' },
    { nombreFormacion: 'HUIT', comentario: 'Huitrín' },
    { nombreFormacion: 'ICLA', comentario: 'Icla' },
    { nombreFormacion: 'IQUI', comentario: 'Iquiri' },
    { nombreFormacion: 'LAJA', comentario: 'Lajas' },
    { nombreFormacion: 'LAMA', comentario: 'La Manga' },
    { nombreFormacion: 'LPIL', comentario: 'La Pilona' },
    { nombreFormacion: 'LABS', comentario: 'Lajas' },
    { nombreFormacion: 'LAPE', comentario: 'Las Peñas' },
    { nombreFormacion: 'LATI', comentario: 'Lati' },
    { nombreFormacion: 'LEMA', comentario: 'Le Maire' },
    { nombreFormacion: 'LOMO', comentario: 'Loma Montosa' },
    { nombreFormacion: 'LONC', comentario: 'Loncoché' },
    { nombreFormacion: 'LOTR', comentario: 'Lonco Trapial' },
    { nombreFormacion: 'LMOL', comentario: 'Los Molles' },
    { nombreFormacion: 'LOTE', comentario: 'Los Monos' },
    { nombreFormacion: 'MAGA', comentario: 'Magallanes' },
    { nombreFormacion: 'MGOR', comentario: 'Maiz Gordo' },
    { nombreFormacion: 'MAAM', comentario: 'Mata Amarilla' },
    { nombreFormacion: 'MESP', comentario: 'Meseta Espinosa' },
    { nombreFormacion: 'MELC', comentario: 'Mina El Carmen' },
    { nombreFormacion: 'MULI', comentario: 'Mulichinco' },
    { nombreFormacion: 'NEOC', comentario: 'Neocomiano' },
    { nombreFormacion: 'OLME', comentario: 'Olme' },
    { nombreFormacion: 'OTRO', comentario: 'Otros' },
    { nombreFormacion: 'PALC', comentario: 'Palermo Aike' },
    { nombreFormacion: 'PLAR', comentario: 'Palmar Largo' },
    { nombreFormacion: 'PAPA', comentario: 'Papagayo' },
    { nombreFormacion: 'PATA', comentario: 'Patagonia' },
    { nombreFormacion: 'PIRC', comentario: 'Pircala' },
    { nombreFormacion: 'PIRG', comentario: 'Pirgua' },
    { nombreFormacion: 'POTR', comentario: 'Potrerillos' },
    { nombreFormacion: 'POD1', comentario: 'Pozo D-129' },
    { nombreFormacion: 'PREC', comentario: 'Precuyo' },
    { nombreFormacion: 'PBAR', comentario: 'Punta Bardas' },
    { nombreFormacion: 'PROS', comentario: 'Punta Rosada' },
    { nombreFormacion: 'QDSA', comentario: 'Quebrada Del Sapo' },
    { nombreFormacion: 'QTUC', comentario: 'Quintuco' },
    { nombreFormacion: 'RAYO', comentario: 'Rayoso' },
    { nombreFormacion: 'RBCO', comentario: 'Rio Blanco' },
    { nombreFormacion: 'RCOL', comentario: 'Río Colorado' },
    { nombreFormacion: 'RLIM', comentario: 'Río Limay' },
    { nombreFormacion: 'RNEU', comentario: 'Rio Neuquén' },
    { nombreFormacion: 'SALA', comentario: 'Salamanca' },
    { nombreFormacion: 'SROS', comentario: 'Santa Rosa' },
    { nombreFormacion: 'STEL', comentario: 'San Telmo' },
    { nombreFormacion: 'SBLA', comentario: 'Sierras Blancas' },
    { nombreFormacion: 'SPRI', comentario: 'Springhill' },
    { nombreFormacion: 'TARI', comentario: 'Tarija' },
    { nombreFormacion: 'TOBI', comentario: 'Tobifera' },
    { nombreFormacion: 'TORD', comentario: 'Tordillo' },
    { nombreFormacion: 'TRAN', comentario: 'Tranquitas' },
    { nombreFormacion: 'TUPA', comentario: 'Tupambi' },
    { nombreFormacion: 'VMUT', comentario: 'Vaca Muerta' },
    { nombreFormacion: 'VCLA', comentario: 'Victor Claro' },
    { nombreFormacion: 'VOSC', comentario: 'Victor Oscuro' },
    { nombreFormacion: 'VILL', comentario: 'Villavicencio' },
    { nombreFormacion: 'VUME', comentario: 'Vulcanitas Medanito' },
    { nombreFormacion: 'YACO', comentario: 'Yacoraite' },
  ],
});


// 6. Crear Pozo
await prisma.pozo.createMany({
  data: [
    { sigla: 'SHE.Nq.BAñ-1001(h)', 
      nombrePozo: 'BAn-1001(h)', 
      latitud: -38.2318625, 
      longitud: -69.0250680555556, 
      cota: 278.3, 
      profundidad: 4706, 
      tiempoEfectivo: 0, 
      vidaUtil: 982.13, 
      observaciones: 'Parado Transitorio', 
      estadoPozoId: estadoPozo9.id, 
      tipoPozoId: tipoPozo1.id, 
      clasificacionPozoId: clasificacionPozo3.id, 
      tipoRecursoId: tipoRecurso1.id, 
      sistemaExtraccionId: 9, 
      yacimientoId: yacimiento.id },
          { sigla: 'SHE.Nq.CASO-10(h)', 
      nombrePozo: 'CASO-10(h)', 
      latitud: -38.390844, 
      longitud: -68.463044, 
      cota: 509.96, 
      profundidad: 6100, 
      tiempoEfectivo: 23, 
      vidaUtil: 518.11, 
      observaciones: 'En Extraccion Efectiva', 
      estadoPozoId: estadoPozo3.id, 
      tipoPozoId: tipoPozo2.id, 
      clasificacionPozoId: clasificacionPozo3.id, 
      tipoRecursoId: tipoRecurso1.id, 
      sistemaExtraccionId: 9, 
      yacimientoId: yacimiento2.id },

      { sigla: 'SHE.Nq.CASO-16(h)v', 
      nombrePozo: 'CASO-16(h)v', 
      latitud: -38.3870095874503, 
      longitud: -68.496745133684, 
      cota: 511.03, 
      profundidad: 6433, 
      tiempoEfectivo: 30.46, 
      vidaUtil: 53.86, 
      observaciones: 'En Extraccion Efectiva', 
      estadoPozoId: estadoPozo3.id, 
      tipoPozoId: tipoPozo2.id, 
      clasificacionPozoId: clasificacionPozo3.id, 
      tipoRecursoId: tipoRecurso1.id, 
      sistemaExtraccionId: 9, 
      yacimientoId: yacimiento3.id },
      { sigla: 'SHE.Nq.SB-1012(h)', 
      nombrePozo: 'SB-1012(h)', 
      latitud: -38.4947181, 
      longitud: -68.4751463888889, 
      cota: 393.8, 
      profundidad: 6450, 
      tiempoEfectivo: 31, 
      vidaUtil: 1466.60, 
      observaciones: 'En Extraccion Efectiva', 
      estadoPozoId: estadoPozo3.id, 
      tipoPozoId: tipoPozo2.id, 
      clasificacionPozoId: clasificacionPozo3.id, 
      tipoRecursoId: tipoRecurso1.id, 
      sistemaExtraccionId: 1, 
      yacimientoId: yacimiento4.id },
  ]
});

  await prisma.pozoFormacion.createMany({
    data: [{
      pozoId: 1,
      formacionId: 79,
    },
    {
      pozoId: 2,
      formacionId: 79,
    },
    {
      pozoId: 3,
      formacionId: 79,
    },
    {
      pozoId: 4,
      formacionId: 79,
    },
  ]
  });


  // 8. Crear ProduccionMensual
  await prisma.produccionMensual.createMany({
    data:[
      {mes: 1,
      anio: 2025,
      produccionPetroleo: 0,
      produccionGas: 0,
      produccionAgua: 0,
      inyeccionAgua: 0,
      inyeccionGas: 0,
      inyeccionCO2: 0,
      inyeccionOtros: 0,
      relacionGasPetroleo: 0,
      porcentajeAgua: 0,
      pozoId: 1,
      empresaId: empresa.id,
    },
    {mes: 1,
      anio: 2025,
      produccionPetroleo: 509.13,
      produccionGas: 15.06,
      produccionAgua: 240.57,
      inyeccionAgua: 0,
      inyeccionGas: 0,
      inyeccionCO2: 0,
      inyeccionOtros: 0,
      relacionGasPetroleo: 0.029579871545578,
      porcentajeAgua: 0.32088835534214,
      pozoId: 2,
      empresaId: empresa.id,
    },
    {mes: 1,
      anio: 2025,
      produccionPetroleo: 2699.51,
      produccionGas: 184.69,
      produccionAgua: 379.32,
      inyeccionAgua: 0,
      inyeccionGas: 0,
      inyeccionCO2: 0,
      inyeccionOtros: 0,
      relacionGasPetroleo: 0.068416119962512,
      porcentajeAgua: 0.12320264516066,
      pozoId: 3,
      empresaId: empresa.id,
    },
    {mes: 1,
      anio: 2025,
      produccionPetroleo: 357.23,
      produccionGas: 42.82,
      produccionAgua: 0,
      inyeccionAgua: 0,
      inyeccionGas: 0,
      inyeccionCO2: 0,
      inyeccionOtros: 0,
      relacionGasPetroleo: 0.11986675251239,
      porcentajeAgua: 0,
      pozoId: 4,
      empresaId: empresa.id,
    },
  ]
  });

  console.log('Seed completado');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });