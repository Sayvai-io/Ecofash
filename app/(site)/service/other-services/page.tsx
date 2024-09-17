import React from "react";
import { Metadata } from "next";
import OtherServices from "@/components/Services/other-services";

export const metadata: Metadata = {
  title: "Support Page - Solid SaaS Boilerplate",
  description: "This is Support page for Solid Pro",
  // other metadata
};

const OtherServicesPage = () => {
  return (
    <div className="pb-20 pt-40">
      <OtherServices />
    </div>
  );
};

export default OtherServicesPage;
