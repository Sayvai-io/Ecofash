"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

const Integration = () => {
  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex flex-wrap items-center justify-between">
          {/* Left side content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 xl:w-[47%]"
          >
            <h2 className="mb-6 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle2">
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
                  fill=""
                />
              </svg>
            </a>
          </motion.div>

          {/* Right side image */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 xl:w-[47%]"
          >
            <div className="relative aspect-[588/526.5] md:w-full">
              <Image
                src="/images/about/about-image.svg"
                alt="About Image"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/about/about-image-dark.svg"
                alt="About Image"
                className="hidden dark:block"
                fill
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Integration;
