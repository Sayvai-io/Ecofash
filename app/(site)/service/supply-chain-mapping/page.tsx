import React from "react";
import { Metadata } from "next";
import SupplyChain from "@/components/Services/supplychainmapping";

export const metadata: Metadata = {
  title: "Supply Chain Mapping - EcoFash",
  description: "This is Supply Chain Mapping page for EcoFash",
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
