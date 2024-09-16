"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About1 = () => {
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30 mt-20">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-32.5">
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
              className="animate_left relative mx-auto hidden md:block md:w-1/2"
              style={{ height: '600px', width: '500px' }} // Adjust these dimensions as needed
            >
             
             
              
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
              className="animate_right md:w-1/2"
            >
              <span className="font-semibold text-2xl mb-4 block text-black dark:text-white">
                About us
              </span>
              <h2 className="mb-6 text-4xl sm:text-5xl md:text-6xl font-bold text-black dark:text-white leading-tight">
                Sustainability
                <br />
                <span className="relative inline-block mt-4 mb-4">
                  Woven into <span className="text-[#609641]">Every</span>
                </span>
                <br />
                <span className="text-[#609641]">Switch</span>
              </h2>
              
              <p className="text-base sm:text-lg md:text-xl mb-6">
                With a team of dedicated sustainability experts and industry veterans, Ecofash Services is committed to guiding you through every step of your sustainability journey. We believe that every fashion brand has the power to make a positive impact, and we're here to help you lead the way. Join us as we redefine fashion with purpose, innovation, and integrity.
              </p>

              <div className="flex items-center">
                <button className="flex items-center justify-center rounded-md bg-[#609641] text-white px-6 py-3 text-base font-bold transition duration-300 ease-in-out hover:bg-[#4d7a34]">
                  Contact Us
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-2">
                    <path fillRule="evenodd" d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z" clipRule="evenodd" />
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

export default About1;
