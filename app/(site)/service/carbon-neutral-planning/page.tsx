import React from "react";
import { Metadata } from "next";
import CarbonNeutralPlanning from "@/components/Services/carbonneutralplanning";

export const metadata: Metadata = {
  title: "Carbon Neutral Planning - EcoFash",
  description: "This is Carbon Neutral Planning page for EcoFash",
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
