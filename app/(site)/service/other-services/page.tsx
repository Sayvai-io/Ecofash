import React from "react";
import { Metadata } from "next";
import OtherServices from "@/components/Services/other-services";

export const metadata: Metadata = {
  title: "Other Services - EcoFash",
  description: "This is Other Services page for EcoFash",
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
