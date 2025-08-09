import formidable from 'formidable';
import xlsx from 'xlsx';
import { prisma } from '@/lib/prisma';

export const config = { api: { bodyParser: false } };

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const form = new formidable.IncomingForm({ keepExtensions: true });

  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(500).json({ error: 'Error al subir el archivo' });

    const filePath = files.file.filepath;
    const workbook = xlsx.readFile(filePath);
    const sheetNames = workbook.SheetNames;

    try {
      for (const sheetName of sheetNames) {
        const sheet = workbook.Sheets[sheetName];
        const data = xlsx.utils.sheet_to_json(sheet);

        const modelName = sheetName.charAt(0).toLowerCase() + sheetName.slice(1);
        if (!prisma[modelName]) {
          console.warn(`⚠ Modelo Prisma no encontrado para la hoja: ${sheetName}`);
          continue;
        }

        if (data.length === 0) continue;

        // Obtener campos del modelo desde Prisma (usa la introspección del cliente)
        const modelFields = Object.keys(prisma._dmmf.modelMap[sheetName]?.fields || {});
        if (modelFields.length === 0) {
          console.warn(`⚠ No se pudieron obtener campos para el modelo: ${sheetName}`);
          continue;
        }

        // Validar que todas las columnas del Excel existan en el modelo
        const excelFields = Object.keys(data[0]);
        const invalidColumns = excelFields.filter(col => !modelFields.includes(col));

        if (invalidColumns.length > 0) {
          console.warn(`⚠ Columnas inválidas en hoja ${sheetName}:`, invalidColumns);
          continue;
        }

        // Insertar datos
        await prisma[modelName].createMany({
          data,
          skipDuplicates: true,
        });
      }

      return res.status(200).json({ message: 'Todas las hojas importadas con éxito' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error al procesar el archivo Excel' });
    }
  });
}