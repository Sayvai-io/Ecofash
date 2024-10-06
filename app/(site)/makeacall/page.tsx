import React from "react";
import MakeACall from "@/components/Makeacall";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Make a Call - EcoFash",
  description: "This is Make a Call page for EcoFash",
  // other metadata
};

const MakeACallPage = () => {
  return (
    <div className="pb-20 pt-40">
      <MakeACall />
    </div>
  );
};

export default MakeACallPage;
