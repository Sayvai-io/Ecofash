"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Integration = () => {
  return (
    <section className="bg-white py-20 lg:py-25 xl:py-30">
      <div className="container mx-auto px-4 md:px-8 2xl:px-0 bg-gray-100">
        <div className="flex flex-wrap">
          {/* Left side content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 px-2 lg:pr-6 mb-8"  
          >
            <div className="pt-15"> 
              <h2 className="mb-6 text-3xl font-bold text-black dark:text-black xl:text-sectiontitle2">
                Let's make things happen
              </h2>
              <p className="mb-8 text-base font-medium leading-relaxed text-body-color">
                Contact us today to learn more about how our services can help your business grow sustainably and make a difference.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2.5 rounded-full bg-[#609641] px-6 py-3 font-medium text-white hover:opacity-90"
              >
                Check out our services
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
            className="w-full lg:w-1/2 px-2"
          >
            {/* Container with adjusted width and rounded edges */}
            <div className="relative w-full lg:w-full h-[320px] overflow-hidden" style={{ borderRadius: '3rem' }}>
              <Image
              src="/images/about/about-image.png"
              alt=""
              fill
              className="object-cover border-none"
            />
 

              <Image
                src="/images/about/about-image-dark.svg"
                alt=""
                fill
                className="hidden dark:block object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Integration;
