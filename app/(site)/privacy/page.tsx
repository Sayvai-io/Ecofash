import React from "react";
import { Metadata } from "next";
import Privacy from "@/components/Privacy";

export const metadata: Metadata = {
  title: "Contact Page - EcoFash",
  description: "This is Contact page for EcoFash",
  // other metadata
};

const PrivacyPage = () => {
  return (
    <div className="pb-20 pt-40">
      <Privacy />
    </div>
  );
};

export default PrivacyPage;
