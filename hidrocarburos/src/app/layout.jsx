import Navbar from "@/components/Navbar";
import "./globals.css";


export const metadata = {
  title: "Cuenca Neuquina",
  description: "Gestión de pozos y producción de hidrocarburos",
};
export default function RootLayout({ children }) {
  return (
  <html>
    
    <body className="bg-gray-100 text-gray-900">
      <Navbar />
      {children}
      
      </body>
  </html>
  )
}