"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import translationData from "../../app/store/translation.json";
import { supabase } from "../../supabase_config/supabaseClient";
import { useSelector } from "react-redux";

const Services = () => {
  const language = useSelector((state: any) => state.language.language);
  const [hasMounted, setHasMounted] = useState(false);

  const [ServicesDetails, setServicesDetails] = useState({
    servicesimage: "",
  });

  const fetchServicesDetails = async () => {
    const { data, error } = await supabase.from("home").select("*");
    if (error) {
      console.error("Error fetching Services details:", error);
    } else {
      const ServicesData = data[0];
      setServicesDetails({
        servicesimage: ServicesData.services_image,
      });
    }
  };

  useEffect(() => {
    fetchServicesDetails();
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  // Define images array here
  const images = ServicesDetails.servicesimage;

  return (
    <>
      <section className="overflow-hidden bg-[#609641] pb-20 pt-15 lg:pb-25 xl:pb-30">
        <div className="container mx-auto">
          <h2 className="mb-15 mt-10 text-center text-4xl font-semibold">
            <span className="rounded-full border-2 border-white px-4 py-1 text-white">
              {language === "en" ? "Services" : translationData["Services"]}
            </span>
            <span className="ml-2 text-black">
              {" "}
              {language === "en" ? "We Offer" : translationData["We Offer"]}
            </span>
          </h2>
          <div className="flex cursor-pointer flex-wrap justify-center">
            {ServicesDetails.servicesimage && (
              <div className="relative m-2 h-[300px] w-[250px]">
                <Image
                  src={ServicesDetails.servicesimage}
                  alt={ServicesDetails.servicesimage}
                  layout="fill"
                  className="rounded-[20px] object-cover"
                />
              </div>
            )}

            <div className="relative m-2 h-[300px] w-[250px]">
              <Image
                src="/images/service/Recycle.png"
                alt="carbon img"
                layout="fill"
                className="rounded-[20px] object-cover"
              />
            </div>
            <div className="relative m-2 h-[300px] w-[250px]">
              <Image
                src="/images/service/Ecofashservices.png"
                alt="carbon img"
                layout="fill"
                className="rounded-[20px] object-cover"
              />
            </div>
            <div className="relative m-2 h-[300px] w-[250px]">
              <Image
                src="/images/service/file.png"
                alt="carbon img"
                layout="fill"
                className="rounded-[20px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
