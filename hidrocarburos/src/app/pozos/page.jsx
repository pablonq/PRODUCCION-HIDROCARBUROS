export const metadata = {
  title: "Cuenca Neuquina - Pozos",
  description: "Gestión de pozos de hidrocarburos en la Cuenca Neuquina",
};
export default function Pozos() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4 text-orange-800">Bienvenido a la página de Pozos</h1>
      <p className="text-lg text-blue-800">Aquí puedes gestionar todos los pozos de hidrocarburos.</p>
    </div>
  );
}