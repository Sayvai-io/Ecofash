
"use client";
import Image from "next/image";

const Teams = () => {
  

  return (
    <>
      <section className="relative overflow-hidden py-16 sm:py-20 md:py-28 lg:py-32 xl:py-40">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/service/service-hero.jpg"
            alt="Supply Chain Mapping"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-20">
          <div className="rounded-sm border-l-8 border-[#609641] px-5">
            <h1 className="mb-4 text-4xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              <span className="mb-4 block">
                Transforming <span className="text-[#609641]">Fashion</span>{" "}
                with Ethical
              </span>
              and <span className="text-[#609641]">Sustainable</span> Practices
            </h1>
          </div>
          <div className="mt-8 flex space-x-4">
            <button className="rounded-lg bg-white px-6 py-2 font-semibold text-black transition duration-300 hover:bg-gray-100">
              Get Started
            </button>
            <button className="rounded-lg border-2 border-white px-6 py-2 font-semibold text-white transition duration-300 hover:bg-white hover:text-black">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      
    </>
  );
};

export default Teams;