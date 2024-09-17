import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import Services from "@/components/Service";
import ServicesHome from "@/components/Services/intex";

export const metadata: Metadata = {
  title: "Support Page - Solid SaaS Boilerplate",
  description: "This is Support page for Solid Pro",
  // other metadata
};

const ServicesPage = () => {
  return (
    <div className="pb-20 pt-40">
      <ServicesHome />
    </div>
  );
};

export default ServicesPage;
