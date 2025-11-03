// components/NewsCard.jsx
import { Calendar, ArrowRight } from "lucide-react";
export default function NewsCard({ newsData, }) {
  return (
    <div
      key={news.id}
      className="bg-white rounded-lg overflow-hidden shadow hover:shadow-xl transition-all duration-300 group cursor-pointer border border-slate-100"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-slate-200">
        <img
          src={news.imageUrl}
          alt={news.title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center text-slate-500 text-sm mb-3">
          <Calendar size={14} className="mr-1" />
          {news.date}
        </div>

        <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition line-clamp-2">
          {news.title}
        </h3>

        <button className="text-blue-600 font-semibold text-sm flex items-center group-hover:gap-2 transition-all">
          Leer más
          <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  ))
}
        

