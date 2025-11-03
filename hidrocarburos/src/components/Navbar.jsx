import Link from "next/link";
import { BarChart3, House } from "lucide-react";
{/* <ChartColumn />
<FileChartColumn /> */}


export default function Navbar() {
  return (
    // <nav className="bg-gray-800 p-4">
    //   <div className="container mx-auto flex justify-between items-center">
    //     <Link href="/" className="text-white text-lg font-bold">Home</Link>
        
    //       <Link href="/produccion" className="text-gray-300 hover:text-white">Producción</Link>
    //       <Link href="/pozos" className="text-gray-300 hover:text-white">Pozos</Link>
        
    //   </div>
    // </nav>
    <nav className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Link href="/">
              <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center">
                <House className="text-white" size={24} />
              </div>
              <span className="text-xl font-bold text-slate-800">Home</span>
              </Link>
            </div>
            <div className="flex items-center space-x-3">
              <Link href="/produccion">
              <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center">
                <BarChart3 className="text-white" size={24} />
              </div>
              <span className="text-xl font-bold text-slate-800">HydroData</span>
              </Link>
            </div>
            <div className="flex items-center space-x-3">
              <Link href="/pozos">
              <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center">
                <BarChart3 className="text-white" size={24} />
              </div>
              <span className="text-xl font-bold text-slate-800">WellsData</span>
              </Link>
            </div>
            <button className="bg-slate-800 text-white px-6 py-2 rounded-lg font-medium hover:bg-slate-700 transition">
              Acceder
            </button>
          </div>
        </div>
      </nav>
  );
}