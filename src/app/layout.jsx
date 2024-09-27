import { FreizeitTrial } from '@/app/fonts';
import "./globals.css";
import style from "./style.module.css";
import { Footer, Navbar } from '@/components/ui';
import NotFound from './not-found';

export const metadata = {
  title: "XANA",
  description: "Portal web XANA",
  icons: {
    icon: [
      {
        src: './favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  },
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
