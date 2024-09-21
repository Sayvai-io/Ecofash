import React from "react";
import { Metadata } from "next";
import Sustainability from "@/components/Services/sustainability-outsourcing";

export const metadata: Metadata = {
  title: "Sustainability Outsourcing - EcoFash",
  description: "This is Sustainability Outsourcing page for EcoFash",
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
