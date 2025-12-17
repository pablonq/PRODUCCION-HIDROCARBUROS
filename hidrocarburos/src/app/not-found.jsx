import { Link } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <p className="text-2xl mt-4">Página no encontrada</p>
      <Link href="/">
        <button className="mt-6 text-blue-500 underline">Volver</button>
      </Link>
    </div>
  );
}