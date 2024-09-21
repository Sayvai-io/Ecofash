import React from "react";
import { Metadata } from "next";
import BCorpCertification from "@/components/Services/bcorpcertification";

export const metadata: Metadata = {
  title: "B Corp Certification - EcoFash",
  description: "This is BCorp Certification page for EcoFash",
  // other metadata
};

const BCorpCertificationPage = () => {
  return (
    <div className="pb-20 pt-40">
      <BCorpCertification />
    </div>
  );
};

export default BCorpCertificationPage;
