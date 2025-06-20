import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-lg font-bold">Home</Link>
        
          <Link href="/produccion" className="text-gray-300 hover:text-white">Producción</Link>
          <Link href="/pozos" className="text-gray-300 hover:text-white">Pozos</Link>
        
      </div>
    </nav>
  );
}