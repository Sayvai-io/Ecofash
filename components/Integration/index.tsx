"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { supabase } from "../../supabase_config/supabaseClient";

const Home = () => {
  const [hasMounted, setHasMounted] = useState(false);

  const [homeDetails, setHomeDetails] = useState({
    service: "",
    contactheading: "",
    contactcontent: "",
    contactimage: "",
  });

  const fetchHomeDetails = async () => {
    const { data, error } = await supabase.from("home").select("*");
    if (error) {
      console.error("Error fetching contact details:", error);
    } else {
      const HomeData = data[0]; // Assuming you only need the first row
      setHomeDetails({
        service: HomeData.service,
        contactheading: HomeData.contact_heading,
        contactcontent: HomeData.contact_content,
        contactimage: HomeData.contact_image,
      });
    }
  };

  useEffect(() => {
    fetchHomeDetails();
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  // ... rest of the component

  return (
    <section className="bg-white py-20 lg:py-25 xl:py-30">
      <div className="container max-w-7xl px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="grid grid-cols-1 gap-8 rounded-3xl bg-gray-100 lg:grid-cols-2">
          {/* Left side content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex items-center"
          >
            <div className="rounded-2xl p-8 pl-12 sm:pl-16 md:pl-20">
              <h2 className="mb-6 text-3xl font-bold text-black dark:text-black xl:text-3xl">
                {homeDetails.contactheading}
              </h2>
              <p className="mb-8 text-lg font-normal leading-relaxed text-[#0a0a0a]">
                {homeDetails.contactcontent}{" "}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2.5 rounded-lg bg-[#609641] px-6 py-3 font-medium text-white hover:opacity-90"
              >
                <h1>Checkout our services</h1>
                <svg
                  className="fill-white"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Right side image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center"
          >
            <div className="relative h-[320px] w-full overflow-hidden rounded-3xl">
              {homeDetails.contactimage && (
                <Image
                  src={homeDetails.contactimage}
                  alt=""
                  fill
                  className="object-cover"
                />
              )}
              {homeDetails.contactimage && (
                <Image
                  src={homeDetails.contactimage}
                  alt=""
                  fill
                  className="hidden object-cover dark:block"
                />
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
