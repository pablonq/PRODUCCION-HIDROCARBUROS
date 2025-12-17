

import HeroSection from "@/components/HeroSection";
import ListaCard from "@/components/ListaCards";





export default async function HomePage() {

  return (
    <>
      <HeroSection />
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsData.map((news) => (
          <NewsCard key={news.id} imagen={news.imageUrl} title={news.title} date={news.date} />
        ))}
      </div> */}
      <ListaCard />

 
    
    </>
  );
}
