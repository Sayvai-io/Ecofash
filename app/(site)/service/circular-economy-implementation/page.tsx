import React from "react";
import { Metadata } from "next";
import CircularEconomyImplementation from "@/components/Services/circular-economy-implementation";

export const metadata: Metadata = {
  title: "Support Page - Solid SaaS Boilerplate",
  description: "This is Support page for Solid Pro",
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
