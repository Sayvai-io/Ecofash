import React from "react";
import { Metadata } from "next";
import CircularEconomyImplementation from "@/components/Services/circular-economy-implementation";

export const metadata: Metadata = {
  title: "Circular Economy Implementation - EcoFash",
  description: "This is Circular Economy Implementation page for EcoFash",
  // other metadata
};

const CircularEconomyImplementationPage = () => {
  return (
    <div className="pb-20 pt-40">
      <CircularEconomyImplementation />
    </div>
  );
};

export default CircularEconomyImplementationPage;
