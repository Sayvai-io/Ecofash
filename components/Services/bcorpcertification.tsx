"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from 'next/navigation';

const BCorpCertification = () => {
  const pathname = usePathname();

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const ServiceLink = ({ href, children }) => {
    const isActive = pathname === href;
    return (
      <Link 
        href={href} 
        className={`flex text-lg font-semibold items-center ${isActive ? 'text-[#609641]' : 'hover:text-[#609641]'} pb-4 border-b-2 border-gray-200`}
      >
        <span className="mr-2 hidden group-hover:inline-block">{'<'}</span>
        {children}
      </Link>
    );
  };

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
          <div className="px-5 border-l-8 rounded-sm border-[#609641]">
            <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              <span className="mb-4 block">Transforming <span className="text-[#609641]">Fashion</span> with Ethical</span>
              and <span className="text-[#609641]">Sustainable</span> Practices
            </h1>
          </div>
          <div className="mt-8 flex space-x-4">
            <button className="px-6 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition duration-300">
              Get Started
            </button>
            <button className="px-6 py-2 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition duration-300">
              Contact Us
            </button>
          </div>
        </div>

          
            
        
      </section>
      
      <section className="py-16 sm:py-20 md:py-28 lg:py-32 xl:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-20">
          <div className="flex flex-wrap">
            {/* Left side content */}
            <div className="w-full lg:w-1/3 pr-8 mb-8 lg:mb-0">
              {/* Service Links */}
              <div className="mb-12">
                <h2 className="text-4xl text-[#0d0e0d] font-bold mb-6">Services</h2>
                <ul className="space-y-4">
                  <li><ServiceLink href="/service/supply-chain-mapping">Supply Chain Mapping</ServiceLink></li>
                  <li><ServiceLink href="/service/b-corp-certification">B Corp Certification</ServiceLink></li>
                  <li><ServiceLink href="/service/carbon-neutral-planning">Carbon Neutral Planning</ServiceLink></li>
                  <li><ServiceLink href="/service/circular-economy-implementation">Circular Economy Implementation</ServiceLink></li>
                  <li><ServiceLink href="/service/sustainability-outsourcing">Sustainability Outsourcing</ServiceLink></li>
                  <li><ServiceLink href="/service/other-services">Other Services</ServiceLink></li>
                </ul>
              </div>
              {/* Image */}
              <div className="bg-[#F3F3F3] rounded-lg">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="w-full mb-8"
                >
                  <div className="relative w-full h-[200px] overflow-hidden rounded-lg">
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

                {/* Text content */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <h2 className="mb-2 text-3xl font-bold text-black dark:text-black xl:text-xl">
                    Let's make things happen
                  </h2>
                  <p className="mb-4 text-sm p-4 font-medium leading-relaxed text-body-color mx-auto max-w-2xl">
                    Contact us today to learn more about how our services can help your business grow sustainably and make a difference.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#609641] px-6 py-2 font-medium text-white hover:opacity-90 mb-6"
                  >
                   contact us
                  </a>
                </motion.div>
              </div>
            </div>

            {/* Right side content */}
            <div className="w-full lg:w-2/3 pl-4">
              <h1 className="text-5xl text-[#0e0d0d] font-extrabold mb-2">Excellence through B Corp</h1>
              <h2 className="text-5xl text-[#609641] font-extrabold mb-6">Certification.</h2>
              <p className="mb-4">
                We help with supply chain mapping by evaluating suppliers to ensure they meet sustainability and ethical standards. We identify environmental and social risks within the supply chain and create detailed maps to visualize each step from raw materials to finished products.
              </p>
              <p className="mb-8">
                Additionally, we support brands in complying with environmental regulations and integrating sustainable practices throughout their supply chain. Our goal is to help brands build a more responsible and eco-friendly supply chain.
              </p>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 pr-4">
                  <h3 className="text-3xl font-bold mb-4">Why is it important?</h3>
                  <p className="mb-8">
                    Supply chain mapping is crucial for promoting sustainability and transparency in fashion. It helps brands identify and address environmental and social impacts, leading to eco-friendly practices and greater consumer trust. This visibility into the supply chain enhances accountability by revealing the origins and production processes of products.
                  </p>
                </div>
                <div className="w-full lg:w-1/2 pl-4">
                  <div className="relative w-full h-[300px] overflow-hidden rounded-lg">
                    <Image
                      src="/images/service/servisehero.png"
                      alt="Service Hero"
                      layout="fill"
                      objectFit="cover"
                      quality={100}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-3xl font-bold mb-4">What will We do?</h3>
                <div className="flex flex-wrap -mx-4">
                  <div className="w-full lg:w-1/2 px-4">
                    <ul className="list-none space-y-4">
                      <li className="flex items-start">
                        <span className="text-[#609641] mr-2">✔</span>
                        <span>Assess and select suppliers based on sustainability and ethical criteria.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#609641] mr-2">✔</span>
                        <span>Develop detailed maps that visualize each stage of the supply chain, from raw materials to finished products.</span>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full lg:w-1/2 px-4">
                    <ul className="list-none space-y-4">
                      <li className="flex items-start">
                        <span className="text-[#609641] mr-2">✔</span>
                        <span>Analyze and identify potential environmental and social risks within the supply chain.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#609641] mr-2">✔</span>
                        <span>Suggest changes to reduce waste, enhance efficiency, and ensure compliance with sustainability practices.</span>
                      </li>
                    </ul>
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

export default BCorpCertification;
