# Hidrocarburos Dashboard

Una aplicación web desarrollada con Next.js para la visualización y gestión de datos relacionados con hidrocarburos, pozos petroleros y producción energética.

## Tecnologías utilizadas

- **Next.js 15** - Framework React
- **React 19** - Biblioteca UI
- **Prisma ORM** - Gestión de base de datos
- **Material UI (MUI)** - Componentes de interfaz
- **ECharts** - Visualización de gráficos
- **Tailwind CSS** - Estilos
- **Lucide React** - Iconos
- **xlsx** - Manejo de archivos Excel

## Características

- Visualización de noticias relacionadas con el sector
- Gestión de información de pozos petroleros
- Dashboard de producción con gráficos interactivos
- Formularios dinámicos
- Componentes reutilizables
- Diseño responsive

## Instalación

1. Clona el repositorio
2. Instala las dependencias:

```bash
npm install
```

3. Configura tu base de datos y variables de entorno
4. Ejecuta las migraciones de Prisma:

```bash
npx prisma migrate dev
```

5. Inicia el servidor de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000)

## Scripts disponibles

- `npm run dev` - Inicia el servidor de desarrollo con Turbopack
- `npm run build` - Crea una versión optimizada para producción
- `npm run start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta el linter

## Estructura del proyecto

- `src/app/` - Páginas y rutas de la aplicación
- `src/components/` - Componentes reutilizables
- `src/components/graficas/` - Componentes de visualización de datos
- `src/components/ButtonPaginacion/` - Componentes de paginación
- `src/libs/prisma.js` - Configuración de conexión a base de datos
- `prisma/` - Esquema y migraciones de la base de datos

## Contribuciones

Las contribuciones son bienvenidas. Por favor abre un issue o pull request para discutir cambios.
