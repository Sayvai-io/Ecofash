"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { FaStar } from "react-icons/fa"; // Add this import
import { supabase } from "../../supabase_config/supabaseClient";
import { useSelector } from "react-redux";
import { getTranslation } from "@/translator/translateToChinese";
import DOMPurify from 'dompurify';
const About = () => {
  const language = useSelector((state) => state.language.language);

  const [hasMounted, setHasMounted] = useState(false);

  const [AboutDetails, setAboutDetails] = useState({
    title: "",
    bgimage: "",
    aboutheading: "",
    aboutcontent: "",
    aboutimage: "",
    mvtitle: "",
    mvheading: "",
    mvcontent: "",
    mvimage: "",
    tctitle: "",
    tcheading: "",
    tccontent: "",
    tcimage: "",
    reviewheading: "",
  });

  const fetchAboutDetails = async () => {
    const { data, error } = await supabase.from("about").select("*");
    if (error) {
      console.error("Error fetching about details:", error);
    } else {
      const AboutData = data[0]; // Assuming you only need the first row
      setAboutDetails({
        title:
          language === "en" ? AboutData.title : getTranslation(AboutData.title),
        bgimage: AboutData.bg_image,
        aboutheading:
          language === "en" ? AboutData.about_heading : getTranslation(AboutData.about_heading),
        // aboutheading: AboutData.about_heading,
        aboutcontent:
          language === "en" ? AboutData.about_content : getTranslation(AboutData.about_content),
        // aboutcontent: AboutData.about_content,
        aboutimage: AboutData.about_image,
        mvtitle: AboutData.mv_title,
        mvheading: AboutData.mv_heading,
        mvcontent: AboutData.mv_content,
        mvimage: AboutData.mv_image,
        tctitle: AboutData.tc_title,
        tcheading: AboutData.tc_heading,
        tccontent: AboutData.tc_content,
        tcimage: AboutData.tc_image,
        reviewheading: AboutData.review_heading,
      });
    }
  };

  useEffect(() => {
    fetchAboutDetails();
    setHasMounted(true);
  }, [language]);

  if (!hasMounted) {
    return null;
  }

  const sanitizeHTML = (html: string) => {
    return {
        __html: DOMPurify.sanitize(html)
    };
  };
  
  return (
    <>
      {/* Existing section */}
      <section className="relative -mt-14 overflow-hidden py-16 sm:-mt-10 sm:py-20 md:-mt-12 md:py-28 lg:-mt-14 lg:py-32 xl:-mt-14 xl:py-44">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          {AboutDetails.bgimage && (
            <Image
              src={AboutDetails.bgimage}
              alt="Supply Chain Mapping"
              layout="fill"
              style={{ objectFit: "cover" }}
              quality={100}
            />
          )}

          <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-30">
          <div className="flex items-start gap-6 px-5">
            <Image
              src="/images/about/line.png"
              alt="Line"
              width={14}
              height={40}
              className="-ml-16 mt-19"
            />
            <div>
              <h1 className="mb-4 text-4xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl"
                dangerouslySetInnerHTML={sanitizeHTML(AboutDetails.title)}
              >
              </h1>
            </div>
          </div>
          <div className="mt-8 flex space-x-4">
            <button className="rounded-xl bg-white px-6 py-2 font-semibold text-black transition duration-300 hover:bg-gray-100">
              Get Started
            </button>
            <button className="rounded-xl border-2 border-white px-6 py-2 font-semibold text-white transition duration-300 hover:bg-white hover:text-black">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* New section */}
      <section className="py-16 sm:py-20 md:py-28 lg:py-32 xl:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <div className="flex flex-col items-center gap-12 lg:flex-row">
            {/* Left side - Image */}
            <div className="lg:w-1/2">
              <Image
                src="/images/about/story.png"
                alt="Our Story"
                width={600}
                height={400}
              />
            </div>

            {/* Right side - Content */}
            <div className="lg:w-1/2">
              <div className="mb-4 flex items-center gap-2">
                {AboutDetails.aboutimage && (
                  <Image
                    src={AboutDetails.aboutimage}
                    alt="About Us Logo"
                    width={24}
                    height={24}
                  />
                )}

                <span className="mr-2 text-lg text-[#4d4d4b]">About Us</span>
              </div>
              <h2
                className="mb-6 text-3xl font-bold text-black sm:text-6xl"
                dangerouslySetInnerHTML={sanitizeHTML(AboutDetails.aboutheading)}
              >
              </h2>
              <p className="mb-8 text-lg text-black"
                dangerouslySetInnerHTML={sanitizeHTML(AboutDetails.aboutcontent)}
              >
              </p>
              <button className="rounded-xl bg-[#609641] px-6 py-2 font-semibold text-white transition duration-300 hover:bg-[#4d7a33]">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* New Mission & Vision section */}
      <section className="py-16 sm:py-20 md:py-28 lg:py-32 xl:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <div className="flex flex-col items-center gap-16 lg:flex-row">
            {/* Left side - Content */}
            <div className="lg:w-1/2">
              <div className="mb-4 flex items-center gap-2">
                {AboutDetails.mvimage && (
                  <Image
                    src={AboutDetails.mvimage}
                    alt="About Us Logo"
                    width={24}
                    height={24}
                  />
                )}

                <span className="text-lg text-[#4d4d4b]">
                  Our Mission & Vision
                </span>
              </div>

              <h3 className="mb-12 text-3xl font-bold text-black sm:text-6xl"
                dangerouslySetInnerHTML={sanitizeHTML(AboutDetails.mvtitle)}
              >
              </h3>
              <p className="mb-8 rounded-l-md border-l-4 border-[#609641] pl-6 text-lg text-black"
                dangerouslySetInnerHTML={sanitizeHTML(AboutDetails.mvcontent)}
              >
              </p>
              <div className="mt-12 w-full border-b-2 border-gray-300"></div>
            </div>

            {/* Right side - Image */}
            <div className="lg:w-1/2">
              <Image
                src="/images/about/feature.png"
                alt="Nature"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* New Allies section */}
      <section className="py-16 sm:py-20 md:py-28 lg:py-32 xl:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <div className="flex flex-col items-center gap-12 lg:flex-row">
            {/* Left side - Image */}
            <div className="lg:w-1/2">
              <Image
                src="/images/about/allies.png"
                alt="Allies in Sustainable Fashion"
                width={500}
                height={333}
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* Right side - Content */}
            <div className="lg:w-1/2">
              <div className="mb-4 flex items-center gap-2">
                {AboutDetails.tcimage && (
                  <Image
                    src={AboutDetails.tcimage}
                    alt="About Us Logo"
                    width={24}
                    height={24}
                  />
                )}

                <span className="mr-2 text-lg  text-[#4d4d4b]">Our Team</span>
              </div>
              <h2 className="mb-6 text-3xl font-bold text-black sm:text-5xl"
                dangerouslySetInnerHTML={sanitizeHTML(AboutDetails.tctitle)}
              >
              </h2>
              <p className="mb-8 text-lg text-black"
                dangerouslySetInnerHTML={sanitizeHTML(AboutDetails.tccontent)}
              >
              </p>
              <button className="rounded-xl bg-[#609641] px-6 py-2 font-semibold text-white transition duration-300 hover:bg-[#4d7a33]">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 md:py-28 lg:py-32 xl:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-black sm:text-4xl">
            <span className="block">Get to Know What Our</span>
            <span className="block">Clients Think</span>
          </h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Sanjay Sagar",
                company: "EcoSustain",
                image: "/images/about/client1.png",
              },
              {
                name: "Emily Chen",
                company: "EcoStyle Co.",
                image: "/images/about/client2.png",
              },
              {
                name: "Michael Brown",
                company: "Green Threads Inc.",
                image: "/images/about/client3.png",
              },
            ].map((client, index) => (
              <div
                key={index}
                className={`flex flex-col items-center rounded-xl p-6 text-center shadow-md transition-colors duration-300
                  ${
                    index === 1
                      ? "bg-[#003F2E] text-white"
                      : "bg-white hover:bg-[#003F2E] hover:text-white"
                  }`}
              >
                <div className="mb-4 flex justify-center">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="mx-0.5 text-yellow-400" />
                  ))}
                </div>
                <p
                  className={`mb-6 ${
                    index === 1
                      ? "text-white"
                      : "text-gray-700 group-hover:text-white"
                  }`}
                  dangerouslySetInnerHTML={sanitizeHTML(AboutDetails.reviewheading)}
                >
                  
                </p>
                <div className="flex items-center">
                  {client.image && (
                    <Image
                      src={client.image}
                      alt={`${client.name} Profile`}
                      width={50}
                      height={50}
                      className="mr-4 rounded-full"
                    />
                  )}

                  <div className="text-left">
                    <p className="font-semibold"
                      dangerouslySetInnerHTML={sanitizeHTML(client.name)}
                    >
                      
                    </p>
                    <p
                      className={`text-sm ${
                        index === 1
                          ? "text-gray-300"
                          : "text-gray-500 group-hover:text-gray-300"
                      }`}
                      dangerouslySetInnerHTML={sanitizeHTML(client.company)}
                    >
                      
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
