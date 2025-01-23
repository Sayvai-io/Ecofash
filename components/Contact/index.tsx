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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

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
            : translationData["We'd Love to Hear From You"],
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission

    // Insert data into Supabase
    const { data, error } = await supabase
      .from("contact_form")
      .insert([
        {
          name,
          email,
          phone_number: phoneNumber,
          message,
        },
      ]);

    if (error) {
      console.error("Error inserting data:", error);
      // Optionally, show an error message to the user
      alert("There was an error submitting your form. Please try again.");
    } else {
      console.log("Data inserted successfully:", data);
      // Show a success message
      alert("Thank you for your message! We will get back to you soon.");
      // Reset the form fields
      setName("");
      setEmail("");
      setPhoneNumber("");
      setMessage("");
    }
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
        <div className="-mb-4 mt-2 flex min-h-screen items-center justify-center">
          <div className="flex w-full max-w-6xl flex-col gap-8 bg-white p-6 md:flex-row">
            {/* Left Side - Heading and Paragraph */}
            <div className="flex flex-col justify-center md:w-1/2">
              <h1 className="mb-4 text-center text-4xl font-bold text-black">
                <span
                  className="text-[#609641]"
                  dangerouslySetInnerHTML={sanitizeHTML(contactDetails.contactTitle)}
                ></span>
              </h1>

              <p
                className="mb-6 text-center text-lg text-black z-10"
                dangerouslySetInnerHTML={sanitizeHTML(contactDetails.contactContent)}
              ></p>

              <div className="flex flex-col md:flex-row items-center justify-center mb-4 relative z-10 w-full">
                <Image
                  src="/images/contact/pnone.png"
                  alt="Phone Icon"
                  width={25}
                  height={25}
                  className="mr-2 mb-2 md:mb-0"
                />
                <p
                  className="text-lg font-bold text-black text-center"
                  dangerouslySetInnerHTML={sanitizeHTML(contactDetails.contactPhone)}
                ></p>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-center mb-4 relative z-10">
                <Image
                  src="/images/contact/mail.png"
                  alt="Email Icon"
                  width={25}
                  height={25}
                  className="mr-2 mb-2 md:mb-0"
                />
                <p
                  className="text-lg font-bold text-black text-center"
                  dangerouslySetInnerHTML={sanitizeHTML(contactDetails.email)}
                ></p>
              </div>

              <div className="relative flex justify-center">
                <Image
                  src="/images/contact/person.png"
                  alt="Person"
                  width={350}
                  height={350}
                  className="absolute -bottom-20 -left-20 md:-bottom-24 md:-left-24 lg:-bottom-28 lg:-left-28"
                />
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="flex flex-col justify-center md:w-1/2">
              <h1 className="mb-4 text-4xl font-bold text-black z-10 text-center md:text-left">
                {language === "en"
                  ? "Contact Us"
                  : translationData["Contact Us"]}
              </h1>
              <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Name*"
                  className="rounded-md border border-black bg-white p-4 focus:border-[#609641] focus:outline-none"
                  aria-label="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  type="email"
                  placeholder="Email*"
                  className="rounded-md border border-black bg-white p-4 focus:border-[#609641] focus:outline-none"
                  aria-label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number*"
                  className="rounded-md border border-black bg-white p-4 focus:border-[#609641] focus:outline-none"
                  aria-label="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
                <textarea
                  placeholder="Message*"
                  rows={4}
                  className="rounded-md border border-black bg-white p-4 focus:border-[#609641] focus:outline-none"
                  aria-label="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
                <button
                  type="submit"
                  className="flex h-10 w-full md:w-30 items-center justify-center rounded-md bg-[#609641] px-4 py-4 text-[15px] text-white transition-colors hover:bg-[#4d7a34]"
                >
                  {language === "en"
                    ? "Submit"
                    : translationData["Submit"]}
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
