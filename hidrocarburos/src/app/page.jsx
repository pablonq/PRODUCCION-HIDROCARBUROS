"use client";

import HeroSection from "@/components/HeroSection";
import NewsCard from "@/components/NewsCards";
import { useState } from "react";



export default async function HomePage() {
  const newsData = [
    {
      id: 1,
      title: 'Producción de Petróleo Alcanza Nuevo Récord Trimestral',
      excerpt: 'Los datos del tercer trimestre muestran un incremento del 15% en la producción nacional.',
      category: 'PRODUCTION',
      date: 'Oct. 28, 2025',
      imageUrl: 'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=800&q=80'
    },
    {
      id: 2,
      title: 'Nuevas Regulaciones Ambientales para Exploraciones',
      excerpt: 'El gobierno anuncia normativas más estrictas para proyectos de exploración offshore.',
      category: 'REGULATION',
      date: 'Oct. 25, 2025',
      imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80'
    },
    {
      id: 3,
      title: 'Análisis del Mercado: Tendencias del Precio del Crudo',
      excerpt: 'Expertos proyectan estabilidad en los precios durante el último trimestre del año.',
      category: 'MARKET',
      date: 'Oct. 22, 2025',
      imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80'
    },
    {
      id: 4,
      title: 'Inversión en Tecnología para Extracción Sostenible',
      excerpt: 'Principales operadores destinan $2M para implementar tecnologías de reducción de emisiones.',
      category: 'EXPLORATION',
      date: 'Oct. 20, 2025',
      imageUrl: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&q=80'
    },
    {
      id: 5,
      title: 'Exportaciones de Gas Natural Superan Expectativas',
      excerpt: 'Las exportaciones del mes de septiembre registran un crecimiento del 22% comparado con el año anterior.',
      category: 'MARKET',
      date: 'Oct. 18, 2025',
      imageUrl: 'https://images.unsplash.com/photo-1614029655965-2464911905a4?w=800&q=80'
    },
    {
      id: 6,
      title: 'Actualización de Protocolos de Seguridad en Plataformas',
      excerpt: 'Nueva certificación obligatoria para todo el personal operativo en instalaciones offshore.',
      category: 'REGULATION',
      date: 'Oct. 15, 2025',
      imageUrl: 'https://images.unsplash.com/photo-1565200243592-4f8f87d16f29?w=800&q=80'
    }
  ];

  const categories = [
    { id: 'ALL', label: 'Todas' },
    { id: 'PRODUCTION', label: 'Producción' },
    { id: 'EXPLORATION', label: 'Exploración' },
    { id: 'MARKET', label: 'Mercado' },
    { id: 'REGULATION', label: 'Regulación' }
  ];

  const filteredNews = selectedCategory === 'ALL'
    ? newsData
    : newsData.filter(news => news.category === selectedCategory);
  // const news = await prisma.news.findMany({
  //   orderBy: { createdAt: "desc" },
  //   take: 4,
  // });


  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const fileInput = e.target.elements.excelFile;
  //   const formData = new FormData();
  //   formData.append("file", fileInput.files[0]);

  //   const res = await fetch("/api/upload", {
  //     method: "POST",
  //     body: formData,
  //   });

  //   const data = await res.json();
  //   setMessage(data.message || data.error);
  // };

  return (
    <>
      <HeroSection />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
      </div>

      {/* View All Button */}
      <div className="text-center mt-12">
        <button className="inline-flex items-center px-8 py-3 bg-slate-800 text-white rounded-lg font-semibold hover:bg-slate-700 transition shadow-lg hover:shadow-xl">
          Ver todas las noticias
          <ChevronRight size={20} className="ml-2" />
        </button>
      </div>
    
    {/* <div className="text-8xl text-green-950">HomePage</div>
      <div style={{ padding: "2rem" }}>
        <h1>Subir archivo Excel</h1>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <input type="file" name="file" accept=".xlsx, .xls" required />
          <button type="submit">Subir</button>
        </form>
        {message && <p>{message}</p>}
      </div> * */}
    </>
  );
}
