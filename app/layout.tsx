import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sacrament Meeting Planner",
  description: "Plan, organize, and print weekly Sacrament Meeting programs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${inter.className} min-h-full flex flex-col bg-background text-foreground`}>
        <Header />
        
        <main className="flex-grow max-w-5xl w-full mx-auto px-4 py-8">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}
