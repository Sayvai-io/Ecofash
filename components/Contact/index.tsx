"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Contact = () => {
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-6xl p-6 bg-white shadow-md rounded-lg flex flex-col md:flex-row gap-8">
          {/* Left Side - Heading and Paragraph */}
          <div className="md:w-1/2 flex flex-col justify-center">
            <div className="flex justify-center pb-4">
              <Image 
                src="/images/icon/cal.jpg" 
                alt="Phone Icon" 
                width={50} 
                height={50}
              />
            </div>

            <h1 className="text-4xl font-bold mb-4 text-black text-center">
              Talk <span className="text-green-500">To Us</span>
            </h1>

            <p className="text-lg mb-6 text-black text-center">
              Got a question or need assistance? We're here to help! Whether you have an inquiry, need support, or just want to share your thoughts, feel free to get in touch.
            </p>

            <p className="font-bold text-black mb-4 text-lg text-center">
              +91 9872325297
            </p>
            <div className="flex justify-center pb-4">
              <Image 
                src="/images/icon/email.jpg" 
                alt="Email Icon" 
                width={50} 
                height={50}
              />
            </div>
            <h1 className="text-4xl font-bold mb-4 text-black text-center">
              Email your <span className="text-green-500">queries</span>
            </h1>
            <p className="text-lg mb-6 text-black text-center">
              Got a question or need assistance? We're here to help! Whether you have an inquiry, need support, or just want to share your thoughts, feel free to get in touch.
            </p>
            <p className="font-bold text-black mb-4 text-lg text-center">
              ecofash@gmail.com
            </p>
          </div>

          {/* Right Side - Contact Form */}
          <div className="md:w-1/2 flex flex-col justify-center">
            <h1 className="text-4xl font-bold mb-4 text-black">
              Contact <span className="text-green-500">Us</span>
            </h1>         
            <form className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Name*"
                className="p-4 border border-black bg-white rounded-md focus:outline-none focus:border-blue-500"
                aria-label="Name"
                required
              />
              <input
                type="email"
                placeholder="Email*"
                className="p-4 border border-black bg-white rounded-md focus:outline-none focus:border-blue-500"
                aria-label="Email"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number*"
                className="p-4 border border-black bg-white rounded-md focus:outline-none focus:border-blue-500"
                aria-label="Phone Number"
                required
              />
              <textarea
                placeholder="Message*"
                rows={4}
                className="p-4 border border-black bg-white rounded-md focus:outline-none focus:border-blue-500"
                aria-label="Message"
                required
              ></textarea>
              <button
                type="submit"
                className="py-2 px-4 bg-orange-400 text-black rounded-md text-[15px] w-50 h-10 flex items-center justify-center transition-colors"
              >
                Send Us An Email
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
