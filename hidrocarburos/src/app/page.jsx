

import HeroSection from "@/components/HeroSection";
import ListaCard from "@/components/ListaCards";
import NewsCard from "@/components/NewsCards";




export default async function HomePage() {
  

  // const filteredNews = selectedCategory === 'ALL'
  //   ? newsData
  //   : newsData.filter(news => news.category === selectedCategory);
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
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsData.map((news) => (
          <NewsCard key={news.id} imagen={news.imageUrl} title={news.title} date={news.date} />
        ))}
      </div> */}
      <ListaCard />

 
    
    </>
  );
}
