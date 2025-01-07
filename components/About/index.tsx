"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { supabase } from "../../supabase_config/supabaseClient";
import { useSelector } from "react-redux";
import DOMPurify from "dompurify";
import { useRouter } from "next/navigation";
import translationData from "../../app/store/translation.json";
const About = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const language = useSelector((state: any) => state.language.language);
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
      console.error("Error fetching About details:", error);
    } else {
      const AboutData = data[0]; // Assuming you only need the first row
      if (language === "en") {
        setAboutDetails({
          abouttitle: AboutData.about_title,
          aboutheading: AboutData.about_heading,
          aboutcontent: AboutData.about_content,
          aboutimage: AboutData.about_image,
        });
      } else {
        setAboutDetails({
          abouttitle: translationData["About us"],
          aboutheading: translationData["Sustainability in Every Switch"],
          aboutcontent:
            translationData[
              "With a team of dedicated sustainability experts and industry veterans, Ecofash Services is committed to guiding you through every step of your sustainability journey. We believe that every fashion brand has the power to make a positive impact, and we're here to help you lead the way. Join us as we redefine fashion with purpose, innovation, and integrity."
            ],
          aboutimage: AboutData.about_image, // Use the same image for both languages
        });
      }
    }
  };

  useEffect(() => {
    fetchAboutDetails();
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

  const navigateToContact = () => {
    router.push("/contact");
  };

  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section className="mt-20 overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-8">
          <div className="flex flex-col items-center gap-8 md:flex-row lg:gap-10">
            {/* Image section */}
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
              className="animate_left relative mx-auto aspect-[588/526.5] w-full md:w-1/2"
            >
              {AboutDetails.aboutimage && (
                <Image
                  src={AboutDetails.aboutimage}
                  alt="About Image"
                  fill
                  className="rounded-lg object-cover"
                />
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
              />
              <h1
                className="mb-6 text-2xl font-bold leading-tight text-black sm:text-3xl md:text-4xl lg:text-5xl"
                dangerouslySetInnerHTML={sanitizeHTML(
                  AboutDetails.aboutheading,
                )}
              />
              <p
                className="mb-6 text-base sm:text-sm md:text-base lg:text-lg"
                dangerouslySetInnerHTML={sanitizeHTML(
                  AboutDetails.aboutcontent,
                )}
              />

              <div className="flex items-center">
                <button
                  onClick={navigateToContact}
                  className="flex items-center justify-center rounded-md bg-[#609641] px-6 py-3 text-base  text-white transition duration-300 ease-in-out hover:bg-[#4d7a34]"
                >
                  {language === "en"
                    ? "Contact Us"
                    : translationData["Contact Us"]}
                  <svg
                    className="ml-2 h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
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
