import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "react-phone-input-2/lib/style.css";
import "./phone-input.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Residential Property Management Washington DC, Maryland | Luah Partners",
  description:
    "Building and stewarding homes in the capital region. Residential property management, acquisition, leasing, and home improvement across Washington, DC and Maryland.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-white text-brand-navy">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
