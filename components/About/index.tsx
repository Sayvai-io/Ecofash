"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);
const About = () => {
  const [hasMounted, setHasMounted] = useState(false);

  const [AboutDetails, setAboutDetails] = useState({
    abouttitle: "",
    aboutheading: "",
    aboutcontent: "",
    aboutimage: "",
  });

  const fetchAboutDetails = async () => {
    const { data, error } = await supabase.from("home").select("*");
    if (error) {
      console.error("Error fetching about details:", error);
    } else {
      const AboutData = data[0]; // Assuming you only need the first row
      setAboutDetails({
        abouttitle: AboutData.about_title,
        aboutheading: AboutData.about_heading,
        aboutcontent: AboutData.about_content,
        aboutimage: AboutData.about_image,
      });
    }
  };

  useEffect(() => {
    fetchAboutDetails();
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }
  const images = [
    {
      src: AboutDetails.aboutimage[0],
      alt: "About",
      style: { left: "230px", top: "0px", zIndex: 1 },
    },
    {
      src: AboutDetails.aboutimage[1],
      alt: "About",
      style: {
        left: "220px",
        top: "200px",
        zIndex: 3,
        transform: "rotate(12deg)",
      },
    },
    {
      src: AboutDetails.aboutimage[2],
      alt: "About",
      style: {
        left: "40px",
        top: "100px",
        zIndex: 2,
        transform: "rotate(-12deg)",
      },
    },
  ];

  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section className="mt-20 overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-8">
          <div className="flex flex-col items-center gap-8 md:flex-row lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto hidden md:w-1/2 lg:block"
              style={{ height: "600px", width: "500px" }} // Adjust these dimensions as needed
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className="absolute h-[399px] w-[319px]"
                  style={image.style}
                >
                  {image?.src && (
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="rounded-[50px] object-cover"
                    />
                  )}
                </div>
              ))}
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right z-40 w-full lg:w-1/2"
            >
              <span className="mb-4 block text-2xl font-semibold text-black dark:text-white">
                {AboutDetails.abouttitle}
              </span>
              <h2 className="mb-6 text-4xl font-bold leading-tight text-black dark:text-white sm:text-5xl md:text-6xl">
                {AboutDetails.aboutheading}
              </h2>

              <p className="mb-6 text-base sm:text-lg md:text-xl">
                {AboutDetails.aboutcontent}{" "}
              </p>

              <div className="flex items-center">
                <button className="flex items-center justify-center rounded-md bg-[#609641] px-6 py-3 text-base font-bold text-white transition duration-300 ease-in-out hover:bg-[#4d7a34]">
                  Contact Us
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="ml-2 h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
