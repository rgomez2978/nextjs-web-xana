import { FreizeitTrial } from '@/app/fonts';
import "./globals.css";
import style from "./style.module.css";
import { Footer, Navbar } from '@/components/ui';

export const metadata = {
  title: "XANA",
  description: "Portal web XANA",
};

export default async function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className={`${FreizeitTrial.variable} ${style.layout_web} font-FreizeitTrial`}>
        <main>
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
