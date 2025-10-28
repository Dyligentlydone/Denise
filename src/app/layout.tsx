import type { Metadata } from "next";
import { Poppins, Lora } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

const lora = Lora({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Therapy Practice | Compassionate Care for Healing & Growth",
  description: "Professional therapy services for individuals, couples, and families. Specializing in anxiety, depression, and relationship issues. Book your session today.",
  keywords: ["therapy", "counseling", "mental health", "anxiety", "depression", "couples therapy", "family therapy"],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#f8f5f0",
  openGraph: {
    title: "Therapy Practice | Healing & Growth",
    description: "Professional therapy services for individuals, couples, and families.",
    url: "https://yourtherapypractice.com",
    siteName: "Therapy Practice",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${lora.variable} bg-soft-beige`}>
      <body className="font-sans bg-soft-beige text-gray-800 min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
