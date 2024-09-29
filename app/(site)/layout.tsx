"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "../globals.css";
const inter = Inter({ subsets: ["latin"] });

import ToasterContext from "../context/ToastContext";
import Chatwidget from "@/components/Chatwidget/intex";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const setLanguage = (lang: string) => {
    // Your language setting logic here
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`dark:bg-black ${inter.className}`}>
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="light"
        >
          {/* <Lines /> */}
          <Header setLanguage={setLanguage} /> {/* {{ edit_1 }} */}
          <ToasterContext />
          {children}
          <Footer />
          <Chatwidget /> 
        </ThemeProvider>
      </body>
    </html>
  );
}
