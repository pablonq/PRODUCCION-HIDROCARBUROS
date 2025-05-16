-- CreateTable
CREATE TABLE "Empresa" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Cuenca" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Area" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "cuencaId" INTEGER NOT NULL,
    "empresaId" INTEGER NOT NULL,
    CONSTRAINT "Area_cuencaId_fkey" FOREIGN KEY ("cuencaId") REFERENCES "Cuenca" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Area_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "Empresa" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Yacimiento" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "areaId" INTEGER NOT NULL,
    CONSTRAINT "Yacimiento_areaId_fkey" FOREIGN KEY ("areaId") REFERENCES "Area" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Pozo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "sigla" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "yacimientoId" INTEGER NOT NULL,
    "latitud" REAL NOT NULL,
    "longitud" REAL NOT NULL,
    "cota" REAL,
    "profundidad" REAL,
    "estadoId" INTEGER NOT NULL,
    "tipoId" INTEGER NOT NULL,
    "clasificacionId" INTEGER NOT NULL,
    "tipoRecursoId" INTEGER NOT NULL,
    "sistemaExtraccionId" INTEGER NOT NULL,
    "tiempoEfectivo" REAL,
    "vidaUtil" REAL,
    "observaciones" TEXT,
    CONSTRAINT "Pozo_yacimientoId_fkey" FOREIGN KEY ("yacimientoId") REFERENCES "Yacimiento" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Pozo_estadoId_fkey" FOREIGN KEY ("estadoId") REFERENCES "EstadoPozo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Pozo_tipoId_fkey" FOREIGN KEY ("tipoId") REFERENCES "TipoPozo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Pozo_clasificacionId_fkey" FOREIGN KEY ("clasificacionId") REFERENCES "ClasificacionPozo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Pozo_tipoRecursoId_fkey" FOREIGN KEY ("tipoRecursoId") REFERENCES "TipoRecurso" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Pozo_sistemaExtraccionId_fkey" FOREIGN KEY ("sistemaExtraccionId") REFERENCES "SistemaExtraccion" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "FormacionProductiva" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "pozoId" INTEGER NOT NULL,
    CONSTRAINT "FormacionProductiva_pozoId_fkey" FOREIGN KEY ("pozoId") REFERENCES "Pozo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ProduccionMensual" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "pozoId" INTEGER NOT NULL,
    "mes" INTEGER NOT NULL,
    "anio" INTEGER NOT NULL,
    "produccionPetroleo" REAL NOT NULL,
    "produccionGas" REAL NOT NULL,
    "produccionAgua" REAL NOT NULL,
    "inyeccionAgua" REAL NOT NULL,
    "inyeccionGas" REAL NOT NULL,
    "inyeccionCO2" REAL NOT NULL,
    "inyeccionOtros" REAL NOT NULL,
    "relacionGasPetroleo" REAL NOT NULL,
    "porcentajeAgua" REAL NOT NULL,
    "tiempoEfectivo" REAL NOT NULL,
    CONSTRAINT "ProduccionMensual_pozoId_fkey" FOREIGN KEY ("pozoId") REFERENCES "Pozo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "SistemaExtraccion" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "EstadoPozo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "TipoPozo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ClasificacionPozo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "clasificacion" TEXT NOT NULL,
    "subClasificacion" TEXT
);

-- CreateTable
CREATE TABLE "TipoRecurso" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tipo" TEXT NOT NULL,
    "subTipo" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Empresa_nombre_key" ON "Empresa"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "Cuenca_nombre_key" ON "Cuenca"("nombre");

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
CREATE INDEX "ProduccionMensual_pozoId_idx" ON "ProduccionMensual"("pozoId");

-- CreateIndex
CREATE INDEX "ProduccionMensual_anio_mes_idx" ON "ProduccionMensual"("anio", "mes");

-- CreateIndex
CREATE UNIQUE INDEX "SistemaExtraccion_nombre_key" ON "SistemaExtraccion"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "EstadoPozo_nombre_key" ON "EstadoPozo"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "TipoPozo_nombre_key" ON "TipoPozo"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "ClasificacionPozo_clasificacion_key" ON "ClasificacionPozo"("clasificacion");

-- CreateIndex
CREATE UNIQUE INDEX "TipoRecurso_tipo_key" ON "TipoRecurso"("tipo");
