import React from "react";
import { Metadata } from "next";
import BCorpCertification from "@/components/Services/bcorpcertification";

export const metadata: Metadata = {
  title: "Support Page - Solid SaaS Boilerplate",
  description: "This is Support page for Solid Pro",
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
