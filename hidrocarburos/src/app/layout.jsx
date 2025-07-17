import Navbar from "@/components/Navbar";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

import "./globals.css";


export const metadata = {
  title: "Cuenca Neuquina",
  description: "Gestión de pozos y producción de hidrocarburos",
};
export default function RootLayout({ children }) {
  return (
    <html>

      <body className="bg-gray-100 text-gray-900 font-sans">
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          
          <Navbar />
          {children}
        </AppRouterCacheProvider>
        

        

      </body>
    </html>
  )
}