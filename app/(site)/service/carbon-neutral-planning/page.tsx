import React from "react";
import { Metadata } from "next";
import CarbonNeutralPlanning from "@/components/Services/carbonneutralplanning";

export const metadata: Metadata = {
  title: "Support Page - Solid SaaS Boilerplate",
  description: "This is Support page for Solid Pro",
  // other metadata
};

const CarbonNeutralPlanningPage = () => {
  return (
    <div className="pb-20 pt-40">
      <CarbonNeutralPlanning />
    </div>
  );
};

export default CarbonNeutralPlanningPage;
