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
    service_image1: "",
    service_image2: "",
    service_image3: "",
  });

  const fetchServicesDetails = async () => {
    const { data, error } = await supabase.from("home").select("*");
    if (error) {
      console.error("Error fetching Services details:", error);
    } else {
      const ServicesData = data[0];
      setServicesDetails({
        servicesimage: ServicesData.services_image,
        service_image1: ServicesData.service_image1,
        service_image2: ServicesData.service_image2,
        service_image3: ServicesData.service_image3,
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
  const images = [ServicesDetails.servicesimage, ServicesDetails.service_image1, ServicesDetails.service_image2, ServicesDetails.service_image3];

  return (
    <>
      <section className="overflow-hidden bg-[#609641] pb-20 pt-15 lg:pb-25 xl:pb-30">
        <div className="container mx-auto">
          <h1 className="mb-15 mt-10 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
            <span className="rounded-full border-2 border-white px-4 py-1 text-white">
              {language === "en" ? "Services" : translationData["Services"]}
            </span>
            <span className="ml-2 text-black">
              {" "}
              {language === "en" ? "We Offer" : translationData["We Offer"]}
            </span>
          </h1>
          <div className="cursor-pointer flex flex-wrap justify-center">
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

          {ServicesDetails.service_image1 && (
              <div className="relative m-2 h-[300px] w-[250px]">
                <Image
                  src={ServicesDetails.service_image1}
                  alt={ServicesDetails.service_image1}
                  layout="fill"
                  className="rounded-[20px] object-cover"
                />
              </div>
            )}

          {ServicesDetails.service_image2  && (
              <div className="relative m-2 h-[300px] w-[250px]">
                <Image
                  src={ServicesDetails.service_image2}
                  alt={ServicesDetails.service_image2}
                  layout="fill"
                  className="rounded-[20px] object-cover"
                />
              </div>
            )}

          {ServicesDetails.service_image3 && (
              <div className="relative m-2 h-[300px] w-[250px]">
                <Image
                  src={ServicesDetails.service_image3}
                  alt={ServicesDetails.service_image3}
                  layout="fill"
                  className="rounded-[20px] object-cover"
                />
              </div>
          )}





           
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
