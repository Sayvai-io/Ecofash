// "use client";

// import Footer from "@/components/Footer";
// import Header from "@/components/Header";
// import Lines from "@/components/Lines";
// import { ThemeProvider } from "next-themes";
// import { Inter } from "next/font/google";
// import "../globals.css";
// const inter = Inter({ subsets: ["latin"] });

// import ToasterContext from "../context/ToastContext";
// import Chatwidget from "@/components/Chatwidget/intex";

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className={`dark:bg-black ${inter.className}`}>
//         <ThemeProvider
//           enableSystem={false}
//           attribute="class"
//           defaultTheme="light"
//         >
//           {/* <Lines /> */}
//           <Header />
//           <ToasterContext />
//           {children}
//           <Footer />
//           <Chatwidget /> 
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }
"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "../globals.css";
const inter = Inter({ subsets: ["latin"] });

import ToasterContext from "../context/ToastContext";
import Chatwidget from "@/components/Chatwidget/intex";
import { NextIntlClientProvider } from 'next-intl';
import { useParams } from 'next/navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const params = useParams();
  const locale = params?.locale as string || 'en';

  let messages;
  try {
    messages = require('../../../messages/${locale}.json');
  } catch (error) {
    console.error('Failed to load messages for locale ${locale}', error);
    messages = require('../messages/en.json'); // Fallback to English
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`dark:bg-black ${inter.className}`}>
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="light"
        >
          <NextIntlClientProvider messages={messages} locale={locale}>
            <Header />
            <ToasterContext />
            {children}
            <Footer />
            <Chatwidget /> 
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}