import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "The Apothecary - Purveyor of Potions & Dubious Ingredients",
  description: "Welcome, weary traveler! Step inside The Apothecary, purveyor of potions, curer of curses, and occasional cause of mild side effects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <Header />
        <main className="min-h-[calc(100vh-10rem)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
