"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ComingSoon = () => {
  return (
    <section className="py-16 sm:py-20 md:py-28 lg:py-32 xl:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left side - Content */}
            <div className="lg:w-1/2">
              <div className="flex items-center gap-2 mb-4">
               
                <Image
                  src="/images/blog/coming-soon.png"
                  alt="About Us Logo"
                  width={24}
                  height={24}
                />
                <span className="text-lg text-[#4d4d4b]">Our Mission & Vision</span>
              </div>
             
              <h3 className="text-3xl sm:text-6xl font-bold mb-12 text-black">
                Fashion for a <br />
                <span className="text-[#609641]">Greener</span> Future.
              </h3>
              <p className="text-black text-lg mb-8 pl-6 border-l-4 border-[#609641] rounded-l-md">
                At Ecofash Services, we strive to transform the fashion industry by making sustainability and ethics the standard. Our mission is to empower brands to reduce environmental impact and embrace social responsibility at every step. We envision a future where sustainable fashion drives positive change for people and the planet.
              </p>
              <div className="mt-12 border-b-2 border-gray-300 w-full"></div>
            </div>

            {/* Right side - Image */}
            <div className="lg:w-1/2">
              <Image
                src="/images/about/feature.png"
                alt="Nature"
                width={600}
                height={400}
                
              />
            </div>
          </div>
        </div>
      </section>
  );
};

export default ComingSoon;
