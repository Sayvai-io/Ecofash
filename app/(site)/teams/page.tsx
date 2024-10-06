import React from "react";
import { Metadata } from "next";
import Teams from "@/components/Teams";

export const metadata: Metadata = {
  title: "Teams Page - EcoFash",
  description: "This is Teams page for EcoFash",
  // other metadata
};

const TeamsPage = () => {
  return (
    <div className="pb-20 pt-40">
      <Teams />
    </div>
  );
};

export default TeamsPage;
