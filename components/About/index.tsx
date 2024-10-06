"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { supabase } from "../../supabase_config/supabaseClient";
import DOMPurify from 'dompurify';
import { useRouter } from "next/navigation";

const About = () => {
  const [hasMounted, setHasMounted] = useState(false);

  const [AboutDetails, setAboutDetails] = useState({
    abouttitle: "",
    aboutheading: "",
    aboutcontent: "",
    aboutimage: "",
  });
  const router = useRouter();
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

  const sanitizeHTML = (html: string) => {
    return {
        __html: DOMPurify.sanitize(html)
    };
  };
  const navigateToContact = () => {
    if (hasMounted) {
      router.push("/contact");
    }
    // Change '/contact' to the desired route
  };

  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section className="mt-20 overflow-hidden pb-20 lg:pb-25 xl:pb-30 ">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-8">
          <div className="flex flex-col items-center gap-8 md:flex-row lg:gap-10">
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
              className="animate_left relative mx-auto hidden md:flex md:w-1/2 md:justify-center lg:block"
              style={{ height: "670px", width: "640px" }} // Adjust these dimensions as needed
            >
              {AboutDetails.aboutimage && (
                <div className=" h-[670px] w-[640px]">
                  <Image
                    src={AboutDetails.aboutimage}
                    alt={AboutDetails.aboutimage}
                    fill
                    className="rounded-[50px] object-cover"
                  />
                </div>
              )}
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
              <span
                className="mb-4 block text-2xl font-semibold text-black dark:text-white"
                dangerouslySetInnerHTML={sanitizeHTML(AboutDetails.abouttitle)}
              >
              </span>
              <h2 className="mb-6 text-4xl font-bold leading-tight text-black dark:text-white sm:text-5xl md:text-6xl"
                dangerouslySetInnerHTML={sanitizeHTML(AboutDetails.aboutheading)}
              >
              </h2>

              <p
                className="mb-6 text-base sm:text-lg md:text-xl"
                dangerouslySetInnerHTML={sanitizeHTML(AboutDetails.aboutcontent)}
              >
              </p>

              <div className="flex items-center">
                <button
                  onClick={navigateToContact}
                  className="flex items-center justify-center rounded-md bg-[#609641] px-6 py-3 text-base font-bold text-white transition duration-300 ease-in-out hover:bg-[#4d7a34]"
                >
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
