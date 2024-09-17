import React from "react";
import { Metadata } from "next";
import Sustainability from "@/components/Services/sustainability-outsourcing";

export const metadata: Metadata = {
  title: "Support Page - Solid SaaS Boilerplate",
  description: "This is Support page for Solid Pro",
  // other metadata
};

const SustainabilityOutsourcing = () => {
  return (
    <div className="pb-20 pt-40">
      <Sustainability />
    </div>
  );
};

export default SustainabilityOutsourcing;
