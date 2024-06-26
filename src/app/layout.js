import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PromoCompenent from "@/components/Main/PromoCompenent";
import BasketContext from "@/Context/BasketContext";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Papa Johns</title>
      </head>
      <body className={inter.className}>
        <BasketContext>
          <Header />
          <PromoCompenent />
          <main>       
              {children}           
          </main>
          <Footer />
        </BasketContext>

      </body>
    </html>
  );
}
