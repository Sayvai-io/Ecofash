"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { supabase } from "../../supabase_config/supabaseClient";
import { useSelector } from "react-redux";
import DOMPurify from "dompurify";
import translationData from "../../app/store/translation.json";

const Hero = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const language = useSelector((state: any) => state.language.language);
  const [HeroDetails, setHeroDetails] = useState({
    heading: "",
    headcontent: "",
    headimage: "",
  });

  const fetchHeroDetails = async () => {
    const { data, error } = await supabase.from("home").select("*");
    if (error) {
      console.error("Error fetching Hero details:", error);
    } else {
      const HeroData = data[0]; // Assuming you only need the first row
      setHeroDetails({
        heading:
          language === "en"
            ? HeroData.heading
            : translationData["Empowering Sustainable Fashion Supply Chains"]
            ? translationData["Empowering Sustainable Fashion Supply Chains"]
            : HeroData.heading,

        headcontent:
          language == "en"
            ? HeroData.head_content
            : translationData[
                "Ecofash Consulting Services Co. , Ltd is committed to transforming the fashion industry with sustainable solutions focusing on environmental and social responsibility. We offer services such as Freelance Chief Sustainability Officer, Sustainability Strategy & Implementation, Certification & Compliance, Outsourcing & Communication, Training & Capacity Building, Marketing & Brand Development, and Cost-Effective Solutions. Our goal is to help businesses achieve sustainability goals without compromising profitability or ethical standards. Join us in reshaping the fashion industry with sustainability as a core principle. Let's work together to create a future where profitability and eco-conscious practices go hand in hand. Connect with us to make a lasting impact."
              ]
            ? translationData[
                "Ecofash Consulting Services Co. , Ltd is committed to transforming the fashion industry with sustainable solutions focusing on environmental and social responsibility. We offer services such as Freelance Chief Sustainability Officer, Sustainability Strategy & Implementation, Certification & Compliance, Outsourcing & Communication, Training & Capacity Building, Marketing & Brand Development, and Cost-Effective Solutions. Our goal is to help businesses achieve sustainability goals without compromising profitability or ethical standards. Join us in reshaping the fashion industry with sustainability as a core principle. Let's work together to create a future where profitability and eco-conscious practices go hand in hand. Connect with us to make a lasting impact."
              ]
            : HeroData.head_content,
        headimage: HeroData.head_image,
      });
    }
  };

  useEffect(() => {
    fetchHeroDetails();
    setHasMounted(true);
  }, [language]); // Add language as a dependency

  if (!hasMounted) {
    return null;
  }

  const sanitizeHTML = (html: string) => {
    return {
      __html: DOMPurify.sanitize(html),
    };
  };

  return (
    <>
      <section className="relative overflow-hidden py-10 sm:py-12 md:py-16 lg:py-20 xl:py-32">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          {HeroDetails?.headimage && (
            <Image
              src={HeroDetails.headimage}
              alt="Hero Background"
              fill
              style={{ objectFit: "cover" }}
              quality={100}
            />
          )}
          {/* Overlay for better text visibility */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex min-h-[60vh] items-center">
            <div className="w-full">
              <div className="mx-auto max-w-3xl">
                {/* Left side content */}
                <div className="absolute left-20 top-50 hidden lg:block">
                  <Image
                    src="/images/hero/star.png"
                    alt="Star"
                    width={48}
                    height={48}
                    className="-ml-10 mb-20"
                  />
                  <Image
                    src="/images/hero/roundframe1.png"
                    alt="Rounded Frame 1"
                    width={80}
                    height={80}
                    className="-ml-1"
                  />
                </div>

                {/* Right side content */}
                <div className="absolute right-20 top-50 hidden lg:block">
                  <Image
                    src="/images/hero/roundframe2.png"
                    alt="Rounded Frame 3"
                    width={68}
                    height={68}
                    className="mb-20 ml-6"
                  />
                  <Image
                    src="/images/hero/roundframe3.png"
                    alt="Rounded Frame 4"
                    width={80}
                    height={80}
                    className="-ml-10"
                  />
                </div>

                <div className="mb-4 text-center sm:mb-5 mt-10">
                  <h1
                    className="text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl"
                    dangerouslySetInnerHTML={sanitizeHTML(HeroDetails.heading)}
                  />
                </div>

                <div className="mb-6 text-center sm:mb-8 md:mb-0">
                  <p
                    className="px-4 text-xs text-white sm:px-0 sm:text-sm md:text-base lg:text-lg"
                    dangerouslySetInnerHTML={sanitizeHTML(
                      HeroDetails.headcontent,
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
