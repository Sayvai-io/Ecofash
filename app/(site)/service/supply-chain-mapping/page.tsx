import React from "react";
import { Metadata } from "next";
import SupplyChain from "@/components/Services/supplychainmapping";

export const metadata: Metadata = {
  title: "Support Page - Solid SaaS Boilerplate",
  description: "This is Support page for Solid Pro",
  // other metadata
};

const SupplyChainMapping = () => {
  return (
    <div className="pb-20 pt-40">
      <SupplyChain />
    </div>
  );
};

export default SupplyChainMapping;
