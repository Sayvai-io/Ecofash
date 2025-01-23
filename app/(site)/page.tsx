// "use client";
// import { Metadata } from "next";
// import { useState } from 'react';
// import Header from "@/components/Header";
// import Hero from "@/components/Hero";
// import Brands from "@/components/Brands";
// import Feature from "@/components/Features";
// import About from "@/components/About";
// import FeaturesTab from "@/components/FeaturesTab";
// import FunFact from "@/components/FunFact";
// import Integration from "@/components/Integration";
// import CTA from "@/components/CTA";
// import FAQ from "@/components/FAQ";
// import Pricing from "@/components/Service";
// import Contact from "@/components/Contact";
// import Blog from "@/components/Blog";
// import Testimonial from "@/components/Makeacall";
// import Services from "@/components/Service";
// import Makeacall from "@/components/Makeacall";

// export const metadata: Metadata = {
//   title: "EcoFash",
//   description: "This is Home page for EcoFash",
//   // other metadata
// };

// export default function Home() {
//   const [language, setLanguage] = useState("en");

//   return (
//     <main>
//       <Header setLanguage={setLanguage} /> {/* Pass setLanguage to Header */}
//       <Hero language={language} />
//       <Brands />
//       <Makeacall />
//       {/* <Feature /> */}
//       <About />
//       {/* <FeaturesTab />
//       <FunFact /> */}

//       {/* <CTA />
//       <FAQ />
//       */}
//       <Services />
//       <Integration />
//       {/* <Contact /> */}
//       {/* <Blog /> */}
//     </main>
//   );
// }

"use client"; // Keep this for client-side features
import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Makeacall from "@/components/Makeacall";
import About from "@/components/About";
import Services from "@/components/Service";
import Integration from "@/components/Integration";
// Import metadata from the new file
import { metadata } from "./metadata";

export default function Contruction() {
  const [language, setLanguage] = useState("en");

  return (
    // <div className="flex items-center justify-center h-screen w-screen">
    //   <span className="text-2xl font-bold text-gray-600">
    //     Page Under Construction
    //   </span>
    // </div>
    <main>
    <Header /> {/* Pass setLanguage to Header */}
    <Hero />
    <Brands />
    {/* <Makeacall /> */}
    <About />
    <Services />
    <Integration />
  </main>
  );
}