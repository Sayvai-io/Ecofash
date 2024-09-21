import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Service";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Makeacall";
import Services from "@/components/Service";
import Makeacall from "@/components/Makeacall";


export const metadata: Metadata = {
  title: "EcoFash",
  description: "This is Home page for EcoFash",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Brands />
      <Makeacall />
      {/* <Feature /> */}
      <About />
      {/* <FeaturesTab />
      <FunFact /> */}
      
      {/* <CTA />
      <FAQ />
      */}
      <Services />
      <Integration />
      {/* <Contact /> */}
      {/* <Blog /> */}
    </main>
  );
}
