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
CREATE TABLE "Pozo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cantidad" INTEGER NOT NULL,
    "mes" INTEGER NOT NULL,
    "anio" INTEGER NOT NULL,
    "observaciones" TEXT,
    "tipoRecursoId" INTEGER NOT NULL,
    "fluidoId" INTEGER NOT NULL,
    CONSTRAINT "Pozo_tipoRecursoId_fkey" FOREIGN KEY ("tipoRecursoId") REFERENCES "TipoRecurso" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Pozo_fluidoId_fkey" FOREIGN KEY ("fluidoId") REFERENCES "Fluido" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Produccion" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cantidad" INTEGER NOT NULL,
    "mes" INTEGER NOT NULL,
    "anio" INTEGER NOT NULL,
    "observaciones" TEXT,
    "fluidoId" INTEGER NOT NULL,
    "areaId" INTEGER NOT NULL,
    "empresaId" INTEGER NOT NULL,
    "tipoRecursoId" INTEGER NOT NULL,
    CONSTRAINT "Produccion_fluidoId_fkey" FOREIGN KEY ("fluidoId") REFERENCES "Fluido" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Produccion_areaId_fkey" FOREIGN KEY ("areaId") REFERENCES "Area" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Produccion_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "Empresa" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Produccion_tipoRecursoId_fkey" FOREIGN KEY ("tipoRecursoId") REFERENCES "TipoRecurso" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "TipoRecurso" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tipoRecurso" TEXT NOT NULL,
    "subTipoRecurso" TEXT,
    "comentario" TEXT
);

-- CreateTable
CREATE TABLE "Fluido" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tipoFluido" TEXT NOT NULL,
    "comentario" TEXT
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
CREATE INDEX "Pozo_tipoRecursoId_idx" ON "Pozo"("tipoRecursoId");

-- CreateIndex
CREATE INDEX "Produccion_anio_mes_idx" ON "Produccion"("anio", "mes");

-- CreateIndex
CREATE INDEX "Produccion_empresaId_idx" ON "Produccion"("empresaId");
