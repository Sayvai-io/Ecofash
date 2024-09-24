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
              
             
              <h3 className="text-5xl font-bold mb-12 text-[#609641]">Coming Soon!!</h3> {/* Updated heading */}
            
              <p className="text-black text-lg mb-8  ">
                We’re excited to announce that we’ll soon be sharing insightful and engaging content on our blog. Stay tuned for updates on Sustainability, Eco-friendly fashion, Articles, and more! Our team at Ecofash is working hard to bring you valuable articles to help you stay ahead in this digital world.
              </p>
              <div className="mt-12 border-b-2 border-gray-300 w-full"></div>
            </div>

            {/* Right side - Image */}
            <div className="lg:w-1/2">
              <Image
                src="/images/blog/comingsoon.png"
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
