"use client";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="relative overflow-hidden py-16 sm:py-20 md:py-28 lg:py-32 xl:py-36">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/hero1.jpg"
            alt="Hero Background"
            fill
            style={{ objectFit: 'cover' }}
            quality={100}
          />
          {/* Overlay for better text visibility */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center min-h-[70vh]">
            <div className="w-full">
              <div className="max-w-3xl mx-auto">
                {/* Left side content */}
                <div className="absolute left-40 top-64 hidden lg:block">
                  <Image
                    src="/images/hero/star.png"
                    alt="Star"
                    width={48}
                    height={48}
                    className="mb-10 -ml-10"
                  />
                  <Image
                    src="/images/hero/roundframe1.png"
                    alt="Rounded Frame 1"
                    width={80}
                    height={80}
                    className="-ml-1"
                  />
                </div>

                {/* Right side content */}
                <div className="absolute right-40 top-60 hidden lg:block">
                  <Image
                    src="/images/hero/roundframe2.png"
                    alt="Rounded Frame 3"
                    width={68}
                    height={68}
                    className="mb-6  ml-10"
                  />
                  <Image
                    src="/images/hero/roundframe3.png"
                    alt="Rounded Frame 4"
                    width={80}
                    height={80}
                    className="-ml-10"
                  />
                </div>

                <div className="text-center mb-4 sm:mb-5">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                    Empowering
                    <span className="bg-[#68B13E] text-[#0a0a0a] px-2 sm:px-4 md:px-6 py-1 sm:py-2 rounded-full text-xl sm:text-2xl md:text-3xl lg:text-5xl inline-block mb-2 sm:mb-0 ml-2 sm:ml-2 md:ml-2">
                      Sustainable
                    </span> 
                    <br className="sm:hidden" />
                    <span className="bg-[#68B13E] text-[#0a0a0a] px-2 sm:px-4 md:px-6 py-1 sm:py-2 rounded-full text-xl sm:text-2xl md:text-3xl lg:text-5xl inline-block mt-2 sm:mt-3 mr-2 sm:mr-2 md:mr-2">
                      Fashion
                    </span> 
                    <span className="inline-block mt-2 sm:mt-3">Supply Chains</span>
                  </h1>
                </div>

                <div className="text-center mb-6 sm:mb-8 md:mb-10">
                  <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg px-4 sm:px-0">
                    Optimizing resource efficiency, from sourcing eco-conscious materials to minimizing waste throughout the process. By integrating cutting-edge technology and industry expertise, Ecofash Services drives measurable environmental and social impact, helping brands lead the way in responsible fashion.
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="mt-6 sm:mt-8 md:mt-10">
                    <form onSubmit={handleSubmit} className="flex items-center">
                      <button
                        aria-label="get started button"
                        className="flex rounded-full bg-white px-6 sm:px-5.5 py-2 sm:py-2.5 text-sm sm:text-base text-black duration-300 ease-in-out"
                      >
                        Get Started
                      </button>
                      <button
                        aria-label="up-right arrow button"
                        className="flex items-center justify-center rounded-full bg-[#609641] w-10 h-10 sm:w-11 sm:h-11 text-white duration-300 ease-in-out -ml-5 sm:-ml-4"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                          <path fillRule="evenodd" d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </form>
                  </div>

                  <div className="relative w-full">
                    <div className="absolute -top-8 right-0 sm:right-10 md:right-20 lg:right-50">
                      <Image
                        src="/images/hero/dot-arrow.png"
                        alt="Dot Arrow"
                        width={100}
                        height={100}
                        className="w-auto h-auto max-w-[60px] sm:max-w-[80px] md:max-w-[100px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
