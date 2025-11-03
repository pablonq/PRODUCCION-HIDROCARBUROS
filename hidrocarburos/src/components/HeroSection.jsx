import { BarChart3 } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-r from-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=1200&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}></div>
        </div>
        
        {/* Decorative circular watermark similar to the NH Golf design */}
        <div className="absolute right-20 top-1/2 transform -translate-y-1/2 opacity-5">
          <div className="w-80 h-80 border-4 border-white rounded-full flex items-center justify-center">
            <BarChart3 size={120} />
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold text-blue-400 mb-4 tracking-wider uppercase">
              Información Actualizada
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Recientes
              <span className="block mt-2 text-6xl italic font-light">noticias</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Mantente conectado con las últimas noticias del sector energético, desde resultados de producción hasta análisis de mercado. Descubre lo que está sucediendo en la industria de hidrocarburos.
            </p>
          </div>
        </div>
      </div>
  );
}
