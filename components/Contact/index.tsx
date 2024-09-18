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
  <section className="relative overflow-hidden py-16 sm:py-20 md:py-28 lg:py-32 xl:py-40">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/contact/contacthome.png"
          alt="Supply Chain Mapping"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-20">
        <h5 className="text-white mb-15">“Reach out for any assistance or information.”</h5>
        <div className="px-5 border-l-8 rounded-md border-[#101010]">
          <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            <span className="mb-4 block">We’d Love to Hear </span>
            <span className="text-[#609641]">From You</span> 
          </h1>
        </div>
      </div>
    </section>
    <section>
      <div className="flex items-center justify-center min-h-screen mt-20">
        <div className="w-full max-w-6xl p-6 bg-white flex flex-col md:flex-row gap-8">
          {/* Left Side - Heading and Paragraph */}
          <div className="md:w-1/2 flex flex-col justify-center">
            <div className="flex justify-center pb-4">
              <Image 
                src="/images/contact/pnone.png" 
                alt="Phone Icon" 
                width={50} 
                height={50}
              />
            </div>

            <h1 className="text-4xl font-bold mb-4 text-black text-center">
              Talk <span className="text-[#609641]">To Us</span>
            </h1>

            <p className="text-lg mb-6 text-black text-center">
              Got a question or need assistance? We're here to help! Whether you have an inquiry, need support, or just want to share your thoughts, feel free to get in touch.
            </p>

            <p className="font-bold text-black mb-4 text-lg text-center">
              +91 9872325297
            </p>
            <div className="flex justify-center pb-4">
              <Image 
                src="/images/contact/mail.png" 
                alt="Email Icon" 
                width={50} 
                height={50}
              />
            </div>
            <h1 className="text-4xl font-bold mb-4 text-black text-center">
              Email your <span className="text-[#609641]">queries</span>
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
              Contact <span className="text-[#609641]">Us</span>
            </h1>         
            <form className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Name*"
                className="p-4 border border-black bg-white rounded-md focus:outline-none focus:border-[#609641]"
                aria-label="Name"
                required
              />
              <input
                type="email"
                placeholder="Email*"
                className="p-4 border border-black bg-white rounded-md focus:outline-none focus:border-[#609641]"
                aria-label="Email"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number*"
                className="p-4 border border-black bg-white rounded-md focus:outline-none focus:border-[#609641]"
                aria-label="Phone Number"
                required
              />
              <textarea
                placeholder="Message*"
                rows={4}
                className="p-4 border border-black bg-white rounded-md focus:outline-none focus:border-[#609641]"
                aria-label="Message"
                required
              ></textarea>
              <button
                type="submit"
                className="py-4 px-4 bg-[#F9C06A] text-black rounded-md text-[15px] w-50 h-10 flex items-center justify-center transition-colors"
              >
                Send Us An Email
              </button>
            </form>
          </div>
        </div>
      </div>
     </section>
    </>
  );
};

export default Contact;
