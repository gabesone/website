import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollTopButton from "./components/ScrollTopButton";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gabriel | Full Stack Developer",
  description:
    "Welcome to my digital place where I share what I'm learning about web and my personal projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container mx-auto max-w-3xl">
          <NavBar />
          {children}
          <Toaster position="top-center" />
          <Footer />
          <ScrollTopButton />
        </div>
      </body>
    </html>
  );
}
