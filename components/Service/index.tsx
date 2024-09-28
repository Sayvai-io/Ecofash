"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

const Services = () => {
  const [hasMounted, setHasMounted] = useState(false);

  const [ServicesDetails, setServicesDetails] = useState({
    servicesimage: [] as string[],
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
  const images = ServicesDetails.servicesimage.map((src, index) => ({
    src,
    alt: `Service ${index + 1}`,
  }));

  return (
    <>
      <section className="overflow-hidden bg-[#609641] pb-20 pt-15 lg:pb-25 xl:pb-30">
        <div className="container mx-auto">
          <h2 className="mb-15 mt-10 text-center text-4xl font-semibold">
            <span className="rounded-full border-2 border-white px-4 py-1 text-white">
              Services
            </span>
            <span className="ml-2 text-black">We Offer</span>
          </h2>
          <div className="flex flex-wrap justify-center">
            {images.map((image, index) => (
              <div key={index} className="relative m-2 h-[300px] w-[300px]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  className="rounded-[20px] object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
