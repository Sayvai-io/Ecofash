"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { supabase } from "../../supabase_config/supabaseClient";
import DOMPurify from "dompurify";
import { useSelector } from "react-redux";
import translationData from "../../app/store/translation.json";
import Address from "./address";

const Contact = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const language = useSelector((state: any) => state.language.language);
  const [contactDetails, setContactDetails] = useState({
    title: "",
    subquotes: "",
    bgImage: "",
    contactTitle: "",
    contactContent: "",
    contactPhone: "",
    emailTitle: "",
    emailContent: "",
    email: "",
  });

  const fecthContactDetails = async () => {
    const { data, error } = await supabase.from("contact").select("*");
    if (error) {
      console.error("Error fetching blogs:", error);
    } else {
      const contactData = data[0]; // Assuming you only need the first row
      setContactDetails({
        title:
          language === "en"
            ? contactData.title
            : translationData["We’d Love to Hear From You"],
        subquotes:
          language === "en"
            ? contactData.subquotes
            : translationData["Reach out for any assistance or information."],
        bgImage: contactData.bg_image,
        contactTitle:
          language === "en"
            ? contactData.contact_title
            : translationData["Talk To Us"],
        contactContent:
          language === "en"
            ? contactData.contact_content
            : translationData[
                "Got a question or assistance? We're here to help! Whether you have an inquiry, need support, or just want to share your thoughts, feel free to get in touch."
              ],
        contactPhone: contactData.contact_phone,
        emailTitle:
          language === "en"
            ? contactData.email_title
            : translationData["Email your queries"],
        emailContent:
          language === "en"
            ? contactData.email_content
            : translationData[
                "Got a question or assistance? We're here to help! Whether you have an inquiry, need support, or just want to share your thoughts, feel free to get in touch."
              ],
        email: contactData.email,
      });
    }
  };
  useEffect(() => {
    setHasMounted(true);
    fecthContactDetails();
  }, [language]);
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
      <section className="relative -mt-14 overflow-hidden py-16 sm:-mt-10 sm:py-20 md:-mt-12 md:py-28 lg:-mt-14 lg:py-32 xl:-mt-18 xl:py-36">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          {contactDetails.bgImage !== "" && (
            <Image
              src={contactDetails.bgImage}
              alt="Supply Chain Mapping"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          )}
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-20">
        <h1 className="mb-4 text-4xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">Contact Us</h1>

          <h5
            className="mb-10 text-white"
            dangerouslySetInnerHTML={sanitizeHTML(contactDetails.subquotes)}
          ></h5>
          <div className="rounded-md border-l-8 border-[#101010] px-5">
            <h1 className="mb-4 text-4xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              <span
                className="mb-4 block"
                dangerouslySetInnerHTML={sanitizeHTML(contactDetails.title)}
              ></span>
            </h1>
          </div>
        </div>
      </section>
      <section>
        <div className="-mb-4 mt-20 flex min-h-screen items-center justify-center">
          <div className="flex w-full max-w-6xl flex-col gap-8 bg-white p-6 md:flex-row">
            {/* Left Side - Heading and Paragraph */}
            <div className="flex flex-col justify-center md:w-1/2">
              <div className="flex justify-center pb-4">
                <Image
                  src="/images/contact/pnone.png"
                  alt="Phone Icon"
                  width={50}
                  height={50}
                />
              </div>

              <h1 className="mb-4 text-center text-4xl font-bold text-black">
                <span
                  className="text-[#609641]"
                  dangerouslySetInnerHTML={sanitizeHTML(
                    contactDetails.contactTitle,
                  )}
                ></span>
              </h1>

              <p
                className="mb-6 text-center text-lg text-black"
                dangerouslySetInnerHTML={sanitizeHTML(
                  contactDetails.contactContent,
                )}
              ></p>

              <p
                className="mb-4 text-center text-lg font-bold text-black"
                dangerouslySetInnerHTML={sanitizeHTML(
                  contactDetails.contactPhone,
                )}
              ></p>
              <div className="flex justify-center pb-4">
                <Image
                  src="/images/contact/mail.png"
                  alt="Email Icon"
                  width={50}
                  height={50}
                />
              </div>
              <h1 className="mb-4 text-center text-4xl font-bold text-black">
                <span
                  className="text-[#609641]"
                  dangerouslySetInnerHTML={sanitizeHTML(
                    contactDetails.emailTitle,
                  )}
                ></span>
              </h1>
              <p
                className="mb-6 text-center text-lg text-black"
                dangerouslySetInnerHTML={sanitizeHTML(
                  contactDetails.emailContent,
                )}
              ></p>
              <p
                className="mb-4 text-center text-lg font-bold text-black"
                dangerouslySetInnerHTML={sanitizeHTML(contactDetails.email)}
              ></p>
              <div className="relative">
                <Image
                  src="/images/contact/person.png"
                  alt="Person"
                  width={350}
                  height={350}
                  className="absolute -bottom-22 -left-20"
                />
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="flex flex-col justify-center md:w-1/2">
              <h1 className="mb-4 text-4xl font-bold text-black">
                {language === "en"
                  ? "Contact Us"
                  : translationData["Contact Us"]}
              </h1>
              <form className="flex flex-col space-y-4">
                <input
                  type="text"
                  placeholder="Name*"
                  className="rounded-md border border-black bg-white p-4 focus:border-[#609641] focus:outline-none"
                  aria-label="Name"
                  required
                />
                <input
                  type="email"
                  placeholder="Email*"
                  className="rounded-md border border-black bg-white p-4 focus:border-[#609641] focus:outline-none"
                  aria-label="Email"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number*"
                  className="rounded-md border border-black bg-white p-4 focus:border-[#609641] focus:outline-none"
                  aria-label="Phone Number"
                  required
                />
                <textarea
                  placeholder="Message*"
                  rows={4}
                  className="rounded-md border border-black bg-white p-4 focus:border-[#609641] focus:outline-none"
                  aria-label="Message"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="flex h-10 w-50 items-center justify-center rounded-md bg-[#609641] px-4 py-4 text-[15px] text-white transition-colors hover:bg-[#4d7a34]"
                >
                  {language === "en"
                    ? "Send Us An Email"
                    : translationData["Send Us An Email"]}
                </button>
              </form>
            </div>
             
             
               
          </div>
           
        </div> 
      </section> 
      <div>
              <Address/>
              </div>
    </>
     
  );
};

export default Contact;
