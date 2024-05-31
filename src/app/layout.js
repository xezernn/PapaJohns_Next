import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PromoCompenent from "@/components/Main/PromoCompenent";
import BasketContext from "@/Context/BasketContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Papa John's</title>
      </head>
      <body className={inter.className}>
        <BasketContext>
          <Header />
          <PromoCompenent />
          <main>
            <div className="container">
              {children}
            </div>
          </main>
          <Footer />
        </BasketContext>

      </body>
    </html>
  );
}
