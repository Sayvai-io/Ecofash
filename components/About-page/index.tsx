"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaStar } from 'react-icons/fa';

const About1 = () => {
  return (
    <>
      {/* Existing section */}
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
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-30">
          <div className="px-5 flex gap-6 items-start">
            <Image
              src="/images/about/line.png"
              alt="Line"
              width={14}
              height={40}
              className="-ml-16 mt-19"
            />
            <div>
              <h1 className="text-4xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight mb-4">
                <span className="mb-4 block">Driving <span className="text-[#609641]">environmental</span></span>
                <span className="mb-4 block">responsibility and ethical</span>
                <span className="mb-4 block">practices across the</span> 
                <span className="text-[#609641]">fashion industry.</span>
              </h1>
            </div>
          </div>
          <div className="mt-8 flex space-x-4">
            <button className="px-6 py-2 bg-white text-black font-semibold rounded-xl hover:bg-gray-100 transition duration-300">
              Get Started
            </button>
            <button className="px-6 py-2 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-black transition duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* New section */}
      <section className="py-16 sm:py-20 md:py-28 lg:py-32 xl:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left side - Image */}
            <div className="lg:w-1/2">
              <Image
                src="/images/about/story.png"
                alt="Our Story"
                width={600}
                height={400}
                
              />
            </div>

            {/* Right side - Content */}
            <div className="lg:w-1/2">
              <div className="flex items-center gap-2 mb-4">
                
                <Image
                  src="/images/about/aboutuslogo.png"
                  alt="About Us Logo"
                  width={24}
                  height={24}
                />
                <span className="text-lg text-[#4d4d4b] mr-2">About Us</span>
              </div>
              <h2 className="text-3xl sm:text-6xl font-bold mb-6 text-black">
                Our <span className="text-[#609641]">Story</span>
              </h2>
              <p className="text-black text-lg mb-8">
                Founded in 2020, Ecofash Services emerged from a deep commitment to revolutionize the fashion industry, placing sustainability and ethics at the forefront of our mission. What began as a small initiative driven by passion and a vision for change quickly evolved into a pioneering force in sustainable fashion. Our journey started with a handful of dedicated individuals who recognized the urgent need to address the environmental and social impacts of traditional fashion practices.
              </p>
              <button className="px-6 py-2 bg-[#609641] text-white font-semibold rounded-xl hover:bg-[#4d7a33] transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* New Mission & Vision section */}
      <section className="py-16 sm:py-20 md:py-28 lg:py-32 xl:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left side - Content */}
            <div className="lg:w-1/2">
              <div className="flex items-center gap-2 mb-4">
               
                <Image
                  src="/images/about/missionlogo.png"
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

      {/* New Allies section */}
      <section className="py-16 sm:py-20 md:py-28 lg:py-32 xl:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left side - Image */}
            <div className="lg:w-1/2">
              <Image
                src="/images/about/allies.png"
                alt="Allies in Sustainable Fashion"
                width={500}
                height={333}
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* Right side - Content */}
            <div className="lg:w-1/2">
            <div className="flex items-center gap-2 mb-4">
                
                <Image
                  src="/images/about/aboutuslogo.png"
                  alt="About Us Logo"
                  width={24}
                  height={24}
                />
                <span className="text-lg text-[#4d4d4b]  mr-2">Our Team</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-black">
                Your Allies in <br />
                <span className="text-[#609641]">Sustainable Fashion.</span>
              </h2>
              <p className="text-black text-lg mb-8">
                Ecofash Services is driven by sustainability experts, supply chain analysts, and fashion veterans. We help brands transform their operations to be more sustainable and socially responsible, shaping a better future for fashion.
              </p>
              <button className="px-6 py-2 bg-[#609641] text-white font-semibold rounded-xl hover:bg-[#4d7a33] transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 md:py-28 lg:py-32 xl:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-black">
            <span className="block">Get to Know What Our</span>
            <span className="block">Clients Think</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[ 
              {
                name: "Sanjay Sagar",
                company: "EcoSustain",
                image: "/images/about/client1.png"
              },
              {
                name: "Emily Chen",
                company: "EcoStyle Co.",
                image: "/images/about/client2.png"
              },
              {
                name: "Michael Brown",
                company: "Green Threads Inc.",
                image: "/images/about/client3.png"
              }
            ].map((client, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-xl shadow-md flex flex-col items-center text-center transition-colors duration-300
                  ${index === 1 ? 'bg-[#003F2E] text-white' : 'bg-white hover:bg-[#003F2E] hover:text-white'}`}
              >
                <div className="flex mb-4 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 mx-0.5" />
                  ))}
                </div>
                <p className={`mb-6 ${index === 1 ? 'text-white' : 'text-gray-700 group-hover:text-white'}`}>
                  "I am impressed by their expertise and commitment to excellence. Their efficient solutions and proactive services have consistently exceeded my expectations, making them our trusted partner."
                </p>
                <div className="flex items-center">
                  <Image
                    src={client.image}
                    alt={`${client.name} Profile`}
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div className="text-left">
                    <p className="font-semibold">{client.name}</p>
                    <p className={`text-sm ${index === 1 ? 'text-gray-300' : 'text-gray-500 group-hover:text-gray-300'}`}>
                      {client.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About1;
