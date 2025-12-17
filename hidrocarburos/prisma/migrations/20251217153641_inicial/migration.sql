-- CreateTable
CREATE TABLE "Empresa" (
    "id" SERIAL NOT NULL,
    "nombreEmpresa" TEXT NOT NULL,
    "comentario" TEXT,

    CONSTRAINT "Empresa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Area" (
    "id" SERIAL NOT NULL,
    "nombreArea" TEXT NOT NULL,
    "cuencaId" INTEGER NOT NULL,
    "empresaId" INTEGER NOT NULL,
    "comentario" TEXT,

    CONSTRAINT "Area_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cuenca" (
    "id" SERIAL NOT NULL,
    "nombreCuenca" TEXT NOT NULL,
    "comentario" TEXT,

    CONSTRAINT "Cuenca_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PozoRecurso" (
    "id" SERIAL NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "mes" INTEGER,
    "anio" INTEGER NOT NULL,
    "observaciones" TEXT,
    "tipoRecursoId" INTEGER NOT NULL,
    "fluidoId" INTEGER NOT NULL,

    CONSTRAINT "PozoRecurso_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sistema" (
    "id" SERIAL NOT NULL,
    "nombreSistema" TEXT NOT NULL,
    "sigla" TEXT NOT NULL,

    CONSTRAINT "Sistema_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PozoSistema" (
    "id" SERIAL NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "mes" INTEGER,
    "anio" INTEGER NOT NULL,
    "observaciones" TEXT,
    "sistemaId" INTEGER NOT NULL,

    CONSTRAINT "PozoSistema_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProduccionEmpresa" (
    "id" SERIAL NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "mes" INTEGER,
    "anio" INTEGER NOT NULL,
    "observaciones" TEXT,
    "fluidoId" INTEGER NOT NULL,
    "empresaId" INTEGER NOT NULL,

    CONSTRAINT "ProduccionEmpresa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProduccionRecurso" (
    "id" SERIAL NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "mes" INTEGER,
    "anio" INTEGER NOT NULL,
    "observaciones" TEXT,
    "fluidoId" INTEGER NOT NULL,
    "tipoRecursoId" INTEGER NOT NULL,

    CONSTRAINT "ProduccionRecurso_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProduccionArea" (
    "id" SERIAL NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "mes" INTEGER,
    "anio" INTEGER NOT NULL,
    "observaciones" TEXT,
    "fluidoId" INTEGER NOT NULL,
    "areaId" INTEGER NOT NULL,

    CONSTRAINT "ProduccionArea_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TipoRecurso" (
    "id" SERIAL NOT NULL,
    "tipoRecurso" TEXT NOT NULL,
    "subTipoRecurso" TEXT,
    "comentario" TEXT,

    CONSTRAINT "TipoRecurso_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fluido" (
    "id" SERIAL NOT NULL,
    "tipoFluido" TEXT NOT NULL,
    "comentario" TEXT,

    CONSTRAINT "Fluido_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Noticias" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "contenido" TEXT NOT NULL,
    "imagenUrl" TEXT,
    "fuente" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Noticias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comentario" (
    "id" SERIAL NOT NULL,
    "autor" TEXT NOT NULL,
    "contenido" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "noticiaId" INTEGER NOT NULL,

    CONSTRAINT "Comentario_pkey" PRIMARY KEY ("id")
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
CREATE INDEX "PozoRecurso_tipoRecursoId_idx" ON "PozoRecurso"("tipoRecursoId");

-- CreateIndex
CREATE INDEX "Sistema_nombreSistema_idx" ON "Sistema"("nombreSistema");

-- CreateIndex
CREATE INDEX "PozoSistema_sistemaId_idx" ON "PozoSistema"("sistemaId");

-- CreateIndex
CREATE INDEX "ProduccionEmpresa_anio_mes_idx" ON "ProduccionEmpresa"("anio", "mes");

-- CreateIndex
CREATE INDEX "ProduccionEmpresa_empresaId_idx" ON "ProduccionEmpresa"("empresaId");

-- CreateIndex
CREATE INDEX "ProduccionRecurso_anio_mes_idx" ON "ProduccionRecurso"("anio", "mes");

-- CreateIndex
CREATE INDEX "ProduccionArea_anio_mes_idx" ON "ProduccionArea"("anio", "mes");

-- AddForeignKey
ALTER TABLE "Area" ADD CONSTRAINT "Area_cuencaId_fkey" FOREIGN KEY ("cuencaId") REFERENCES "Cuenca"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Area" ADD CONSTRAINT "Area_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "Empresa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PozoRecurso" ADD CONSTRAINT "PozoRecurso_tipoRecursoId_fkey" FOREIGN KEY ("tipoRecursoId") REFERENCES "TipoRecurso"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PozoRecurso" ADD CONSTRAINT "PozoRecurso_fluidoId_fkey" FOREIGN KEY ("fluidoId") REFERENCES "Fluido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PozoSistema" ADD CONSTRAINT "PozoSistema_sistemaId_fkey" FOREIGN KEY ("sistemaId") REFERENCES "Sistema"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProduccionEmpresa" ADD CONSTRAINT "ProduccionEmpresa_fluidoId_fkey" FOREIGN KEY ("fluidoId") REFERENCES "Fluido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProduccionEmpresa" ADD CONSTRAINT "ProduccionEmpresa_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "Empresa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProduccionRecurso" ADD CONSTRAINT "ProduccionRecurso_fluidoId_fkey" FOREIGN KEY ("fluidoId") REFERENCES "Fluido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProduccionRecurso" ADD CONSTRAINT "ProduccionRecurso_tipoRecursoId_fkey" FOREIGN KEY ("tipoRecursoId") REFERENCES "TipoRecurso"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProduccionArea" ADD CONSTRAINT "ProduccionArea_fluidoId_fkey" FOREIGN KEY ("fluidoId") REFERENCES "Fluido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProduccionArea" ADD CONSTRAINT "ProduccionArea_areaId_fkey" FOREIGN KEY ("areaId") REFERENCES "Area"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comentario" ADD CONSTRAINT "Comentario_noticiaId_fkey" FOREIGN KEY ("noticiaId") REFERENCES "Noticias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
