import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: "Boldhaven",
  description: "Boldhaven Investments",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} overscroll-none`}>
        {children}
      </body>
    </html>
  );
}
