import React from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

// First, let's define the ServiceCard component
const ServiceCard = ({ title, description, link, bgImage, icon }: {
  title: string;
  description: string;
  link: string;
  bgImage?: string;
  icon?: string;
}) => {
  const cardStyle = bgImage
    ? "bg-cover bg-center"
    : "bg-white shadow-[0_0_15px_rgba(96,150,65,0.5)]";

  return (
    <Link href={link} className="block">
      <div className={`rounded-lg p-4 h-[350px] transition-transform hover:scale-105 relative overflow-hidden flex items-center justify-center w-[500px] mx-auto ${cardStyle}`}>
        {bgImage && (
          <>
            <Image
              src={bgImage}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 z-0"
            />
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          </>
        )}
        
        <div className="relative z-20 w-full max-w-xs p-2">
          {icon && (
            <div className="mb-4 mt-4">
              <Image
                src={icon}
                alt={`${title} Icon`}
                width={40}
                height={40}
              />
            </div>
          )}
          
          <h3 className={`text-2xl font-bold mb-4 ${bgImage ? 'text-white' : 'text-[#609641]'}`}>{title}</h3>
          <p className={`text-sm mb-4 ${bgImage ? 'text-white' : 'text-gray-700'}`}>{description}</p>
        </div>
      </div>
    </Link>
  );
};

// Now, let's define the services data
const servicesData = [
  {
    title: "Sustainable Supply Chain Mapping",
    description: "We help you map your entire supply chain to identify areas where sustainability can be improved. Our experts work closely with you to ensure every step of your supply chain is optimized for environmental responsibility.",
    link: "/service/supply-chain-mapping",
    bgImage: "/images/service/chain.png",
    icon: "/images/service/Chainmapping.png"
  },
  {
    title: "B Corp Certification",
    description: "At Ecofash Services, we offer comprehensive guidance through the certification process, helping you understand and meet the rigorous standards required. Our team of experts will assist you in evaluating and improving your social and environmental practices, ensuring your business not only meets but exceeds B Corp criteria.",
    link: "/service/b-corp-certification",
    icon: "/images/service/Bcorp.png"
  },
  {
    title: "Carbon Neutral Planning",
    description: "Achieve carbon neutrality with our comprehensive planning services. We start by assessing your current carbon footprint, evaluating emissions throughout your supply chain. Based on this assessment, we create a customized plan to reduce and offset emissions, including energy efficiency improvements and sustainable practices.",
    link: "/service/carbon-neutral-planning",
    icon: "/images/service/carbo.png"
  },
  {
    title: "Circular Economy Implementation",
    description: "Transition to a circular economy with our expert guidance. We help you implement systems that minimize waste, enhance recycling practices, and integrate sustainability into every aspect of your business operations.",
    link: "/service/circular-economy-implementation",
    bgImage: "/images/service/circulareconomy.png",
    icon: "/images/service/circular.png"
  },
  {
    title: "Sustainability Outsourcing",
    bgImage: "/images/service/OUtsourcing.png",
    description: "Outsource your sustainability needs to us and benefit from cost savings on maintaining an in-house team. We offer a full range of services, including sustainability reporting, sustainable material sourcing, and strategy development.",
    link: "/service/sustainability-outsourcing",
    icon: "/images/service/Oursource.png"
  },
  {
    title: "Other Services",
    description: "In addition to our core services, we offer Sustainability Communication to effectively share your environmental efforts, Training and Capacity Building to empower your team with essential skills, Green Funding Assistance to help you secure financial support for sustainability projects, and ESG Reporting.",
    link: "/service/other-services",
    icon: "/images/service/other.png"
  }
];

// Now, let's modify your existing component to include the ServiceCard
const Home = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center mb-80 px-8 md:px-35 max-w-7xl mx-auto">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-5xl text-[#0b0b0a] font-semibold mb-4">
            Guiding Brands to
            <br />
            a <span className="text-[#609641] font-semibold text-5xl">Greener</span> Future
          </h2>
        </div>
        <div className="md:w-1/2">
          <p className="mb-4">
            Founded in 2020, Ecofash Services emerged from a deep commitment to revolutionize 
            the fashion industry, placing sustainability and ethics at the forefront of our mission. 
            What began as a small initiative driven by passion and a vision for change quickly evolved into
          </p>
          <button className="flex items-center text-black hover:underline">
            Our Services <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>
      <div className="bg-[#609641] py-12 px-8 md:px-16 relative max-w-7xl mx-auto">
        <div className="w-full md:-mt-80 flex justify-center">
          <Image
            src="/images/service/Services-meeting.jpg"
            alt="Service Meeting"
            width={960}
            height={360}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="mt-12 flex flex-wrap justify-center">
          <div className="w-1/2 md:w-1/4 text-center mb-8">
            <p className="text-8xl font-bold text-white mb-4">10+</p>
            <p className="text-xl text-black">Years of Experience</p>
          </div>
          <div className="w-1/2 md:w-1/4 text-center mb-8">
            <p className="text-8xl font-bold text-white mb-4">5+</p>
            <p className="text-xl text-black">Satisfied Clients</p>
          </div>
          <div className="w-1/2 md:w-1/4 text-center mb-8">
            <p className="text-8xl font-bold text-white mb-4">27</p>
            <p className="text-xl text-black">Services Provided</p>
          </div>
          <div className="w-1/2 md:w-1/4 text-center mb-8">
            <p className="text-8xl font-bold text-white mb-4">10+</p>
            <p className="text-xl text-black">Business Portfolios</p>
          </div>
        </div>
      </div>
      <div className="text-center py-16 px-4">
        <h2 className="text-5xl font-bold mb-4 text-black">
          <span className="block mb-4">"Sustainable Strategy, Ethical Supply</span>
          Chains, <span className="text-[#609641]">Fashion Innovation."</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {servicesData.map((service, index) => (
          <div key={service.title} className={index % 2 === 0 ? "md:pl-16" : "md:pr-16"}>
            <ServiceCard {...service} />
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row md:justify-between px-4 md:px-4">
        <div className="md:w-1/2 pl-24">
          <p className="mb-4 text-5xl font-semibold text-gray-900">
            Let’s see a collection<br /> of <span className="text-[#609641]">our Works</span>
          </p>
        </div>
        <div className="md:w-1/2 pl-12 pr-16">
          <p className="mb-4 text-base text-gray-900  ">
            Discover a curated collection of our work, showcasing our expertise in driving sustainability and transforming businesses. Our portfolio highlights successful projects across various industries, demonstrating our commitment to environmental and social responsibility.
          </p>
        </div>
      </div>
   
       
 
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 pt-16 px-2 md:px-4">
          <div className="relative flex justify-center">
    <Image
      src="/images/service/chain.png"
      alt="Example Image 1"
      width={300}
      height={400} // Height is twice the width
      className="rounded-lg shadow-lg"
    />
     
  </div>
  <div className="relative flex justify-center">
    <Image
      src="/images/service/OUtsourcing.png"
      alt="Example Image 2"
      width={300}
      height={400} // Height is twice the width
      className="rounded-lg shadow-lg"
    />
     
  </div>
  <div className="relative flex justify-center">
    <Image
      src="/images/service/circulareconomy.png"
      alt="Example Image 3"
      width={300}
      height={400} // Height is twice the width
      className="rounded-lg shadow-lg"
    />
     
  </div>
</div>






    </>
     
  );
};

export default Home;
