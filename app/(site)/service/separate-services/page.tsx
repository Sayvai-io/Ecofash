import React from "react";
import { Metadata } from "next";
import SeparateService from "@/components/Services/separateService";

export const metadata: Metadata = {
  title: "Separate Services - EcoFash",
  description: "This is Separate Services page for EcoFash",
  // other metadata
};

const SeparateServicePage = () => {
  return (
    <div className="pb-20 pt-40">
        <SeparateService/>
    </div>
  );
};

export default SeparateServicePage;