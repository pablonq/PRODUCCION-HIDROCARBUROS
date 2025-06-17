-- CreateTable
CREATE TABLE "Empresa" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombreEmpresa" TEXT NOT NULL,
    "comentario" TEXT
);

-- CreateTable
CREATE TABLE "Area" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombreArea" TEXT NOT NULL,
    "cuencaId" INTEGER NOT NULL,
    "empresaId" INTEGER NOT NULL,
    "comentario" TEXT,
    CONSTRAINT "Area_cuencaId_fkey" FOREIGN KEY ("cuencaId") REFERENCES "Cuenca" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Area_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "Empresa" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Cuenca" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombreCuenca" TEXT NOT NULL,
    "comentario" TEXT
);

-- CreateTable
CREATE TABLE "Yacimiento" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombreYacimiento" TEXT NOT NULL,
    "areaId" INTEGER NOT NULL,
    CONSTRAINT "Yacimiento_areaId_fkey" FOREIGN KEY ("areaId") REFERENCES "Area" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Pozo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "sigla" TEXT NOT NULL,
    "nombrePozo" TEXT NOT NULL,
    "latitud" REAL,
    "longitud" REAL,
    "cota" REAL,
    "profundidad" REAL,
    "tiempoEfectivo" REAL,
    "vidaUtil" REAL,
    "observaciones" TEXT,
    "estadoPozoId" INTEGER NOT NULL,
    "tipoPozoId" INTEGER NOT NULL,
    "clasificacionPozoId" INTEGER NOT NULL,
    "tipoRecursoId" INTEGER NOT NULL,
    "sistemaExtraccionId" INTEGER NOT NULL,
    "yacimientoId" INTEGER NOT NULL,
    CONSTRAINT "Pozo_estadoPozoId_fkey" FOREIGN KEY ("estadoPozoId") REFERENCES "EstadoPozo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Pozo_tipoPozoId_fkey" FOREIGN KEY ("tipoPozoId") REFERENCES "TipoPozo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Pozo_clasificacionPozoId_fkey" FOREIGN KEY ("clasificacionPozoId") REFERENCES "ClasificacionPozo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Pozo_tipoRecursoId_fkey" FOREIGN KEY ("tipoRecursoId") REFERENCES "TipoRecurso" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Pozo_sistemaExtraccionId_fkey" FOREIGN KEY ("sistemaExtraccionId") REFERENCES "SistemaExtraccion" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Pozo_yacimientoId_fkey" FOREIGN KEY ("yacimientoId") REFERENCES "Yacimiento" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PozoFormacion" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "pozoId" INTEGER NOT NULL,
    "formacionId" INTEGER NOT NULL,
    CONSTRAINT "PozoFormacion_pozoId_fkey" FOREIGN KEY ("pozoId") REFERENCES "Pozo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PozoFormacion_formacionId_fkey" FOREIGN KEY ("formacionId") REFERENCES "FormacionProductiva" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "FormacionProductiva" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombreFormacion" TEXT NOT NULL,
    "comentario" TEXT
);

-- CreateTable
CREATE TABLE "ProduccionMensual" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "mes" INTEGER NOT NULL,
    "anio" INTEGER NOT NULL,
    "produccionPetroleo" REAL,
    "produccionGas" REAL,
    "produccionAgua" REAL,
    "inyeccionAgua" REAL,
    "inyeccionGas" REAL,
    "inyeccionCO2" REAL,
    "inyeccionOtros" REAL,
    "relacionGasPetroleo" REAL,
    "porcentajeAgua" REAL,
    "pozoId" INTEGER NOT NULL,
    "empresaId" INTEGER NOT NULL,
    CONSTRAINT "ProduccionMensual_pozoId_fkey" FOREIGN KEY ("pozoId") REFERENCES "Pozo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ProduccionMensual_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "Empresa" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "SistemaExtraccion" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombreSistema" TEXT NOT NULL,
    "comentario" TEXT
);

-- CreateTable
CREATE TABLE "EstadoPozo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombreEstado" TEXT NOT NULL,
    "comentario" TEXT
);

-- CreateTable
CREATE TABLE "TipoPozo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tipoPozo" TEXT NOT NULL,
    "comentario" TEXT
);

-- CreateTable
CREATE TABLE "ClasificacionPozo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "clasificacionPozo" TEXT NOT NULL,
    "subClasificacionPozo" TEXT,
    "comentario" TEXT
);

-- CreateTable
CREATE TABLE "TipoRecurso" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tipoRecurso" TEXT NOT NULL,
    "subTipoRecurso" TEXT,
    "comentario" TEXT
);

-- CreateTable
CREATE TABLE "ProduccionAnualEmpresa" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "anio" INTEGER NOT NULL,
    "produccionPetroleo" REAL,
    "produccionGas" REAL,
    "empresaId" INTEGER NOT NULL,
    "cuencaId" INTEGER NOT NULL,
    CONSTRAINT "ProduccionAnualEmpresa_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "Empresa" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ProduccionAnualEmpresa_cuencaId_fkey" FOREIGN KEY ("cuencaId") REFERENCES "Cuenca" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ProduccionAnualRecurso" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "anio" INTEGER NOT NULL,
    "produccionPetroleo" REAL,
    "produccionGas" REAL,
    "tipoRecursoId" INTEGER NOT NULL,
    "cuencaId" INTEGER NOT NULL,
    CONSTRAINT "ProduccionAnualRecurso_tipoRecursoId_fkey" FOREIGN KEY ("tipoRecursoId") REFERENCES "TipoRecurso" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ProduccionAnualRecurso_cuencaId_fkey" FOREIGN KEY ("cuencaId") REFERENCES "Cuenca" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Empresa_nombreEmpresa_key" ON "Empresa"("nombreEmpresa");

-- CreateIndex
CREATE INDEX "Empresa_nombreEmpresa_idx" ON "Empresa"("nombreEmpresa");

-- CreateIndex
CREATE INDEX "Area_cuencaId_idx" ON "Area"("cuencaId");

-- CreateIndex
CREATE INDEX "Area_empresaId_idx" ON "Area"("empresaId");

-- CreateIndex
CREATE INDEX "Yacimiento_areaId_idx" ON "Yacimiento"("areaId");

-- CreateIndex
CREATE INDEX "Pozo_yacimientoId_idx" ON "Pozo"("yacimientoId");

-- CreateIndex
CREATE INDEX "Pozo_latitud_longitud_idx" ON "Pozo"("latitud", "longitud");

-- CreateIndex
CREATE INDEX "Pozo_sistemaExtraccionId_idx" ON "Pozo"("sistemaExtraccionId");

-- CreateIndex
CREATE INDEX "Pozo_tipoRecursoId_idx" ON "Pozo"("tipoRecursoId");

-- CreateIndex
CREATE INDEX "Pozo_tipoPozoId_idx" ON "Pozo"("tipoPozoId");

-- CreateIndex
CREATE INDEX "ProduccionMensual_pozoId_idx" ON "ProduccionMensual"("pozoId");

-- CreateIndex
CREATE INDEX "ProduccionMensual_anio_mes_idx" ON "ProduccionMensual"("anio", "mes");

-- CreateIndex
CREATE INDEX "ProduccionMensual_empresaId_idx" ON "ProduccionMensual"("empresaId");

-- CreateIndex
CREATE UNIQUE INDEX "SistemaExtraccion_nombreSistema_key" ON "SistemaExtraccion"("nombreSistema");

-- CreateIndex
CREATE UNIQUE INDEX "EstadoPozo_nombreEstado_key" ON "EstadoPozo"("nombreEstado");

-- CreateIndex
CREATE UNIQUE INDEX "TipoPozo_tipoPozo_key" ON "TipoPozo"("tipoPozo");

-- CreateIndex
CREATE INDEX "ProduccionAnualEmpresa_anio_idx" ON "ProduccionAnualEmpresa"("anio");

-- CreateIndex
CREATE INDEX "ProduccionAnualRecurso_anio_idx" ON "ProduccionAnualRecurso"("anio");
