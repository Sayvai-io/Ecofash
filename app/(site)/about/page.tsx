import React from "react";
import { Metadata } from "next";
import About from "@/components/About";
import About1 from "@/components/About-page";

export const metadata: Metadata = {
  title: "About Page - EcoFash",
  description: "This is About page for EcoFash",
  // other metadata
};

const AboutPage = () => {
  return (
    <div className="pb-20 pt-40">
      <About1 />
    </div>
  );
};

export default AboutPage;
