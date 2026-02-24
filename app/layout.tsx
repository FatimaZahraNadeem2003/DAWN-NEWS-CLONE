import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: '--font-sans' 
});

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: '--font-serif' 
});

export const metadata: Metadata = {
  title: "DAWN - Latest News",
  description: "Pakistan's oldest newspaper.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-[#f7f7f7]`}>
        {children}
      </body>
    </html>
  );
}