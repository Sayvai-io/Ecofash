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
import { GlobalStateProvider } from '../context/GlobalContext'; // Import GlobalContext

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`dark:bg-black ${inter.className}`}>
        <GlobalStateProvider>
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="light"
        >
          {/* <Lines /> */}
          <Header />
          <ToasterContext />
          {children}
          <Footer />
          <Chatwidget /> 
        </ThemeProvider>
        </GlobalStateProvider>
        
      </body>
    </html>
  );
}
