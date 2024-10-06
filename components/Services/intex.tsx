"use client";
import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { supabase } from "../../supabase_config/supabaseClient";
import DOMPurify from 'dompurify';
import { useRouter } from "next/navigation";

// First, let's define the ServiceCard component
const ServiceCard = ({
  title,
  description,
  link,
  bgImage,
  icon,
}: {
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
      <div
        className={`relative mx-auto flex h-[350px] w-[400px] items-center justify-center overflow-hidden rounded-lg p-4 transition-transform hover:scale-105 md:w-[390px] lg:w-[500px]  ${cardStyle}`}
      >
        {bgImage && (
          <>
            <Image
              src={bgImage}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 z-0"
            />
            <div className="absolute inset-0 z-10 bg-black opacity-50"></div>
          </>
        )}

        <div className="relative z-20 w-full max-w-xs p-2 text-[#609641]">
          {icon && (
            <div className="mb-4 mt-4">
              <Image src={icon} alt={`${title} Icon`} width={40} height={40} />
            </div>
          )}

          <h3
            className={`mb-4 text-2xl font-bold ${
              bgImage ? "text-white" : "text-[#609641]"
            }`}
          >
            {title}
          </h3>
          <p
            className={`mb-4 text-sm ${
              bgImage ? "text-white" : "text-gray-700"
            }`}
          >
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};
const sanitizeHTML = (htmlContent) => {
  return { __html: DOMPurify.sanitize(htmlContent) };
};

// Now, let's define the services data

// const servicesData = [
//   {
//     title: "Sustainable Supply Chain Mapping",
//     description:
//       "We help you map your entire supply chain to identify areas where sustainability can be improved. Our experts work closely with you to ensure every step of your supply chain is optimized for environmental responsibility.",
//     link: "/service/supply-chain-mapping",
//     bgImage: "/images/service/chain.png",
//     icon: "/images/service/Chainmapping.png",
//   },
//   {
//     title: "B Corp Certification",
//     description:
//       "At Ecofash Services, we offer comprehensive guidance through the certification process, helping you understand and meet the rigorous standards required. Our team of experts will assist you in evaluating and improving your social and environmental practices, ensuring your business not only meets but exceeds B Corp criteria.",
//     link: "/service/b-corp-certification",
//     icon: "/images/service/Bcorp.png",
//   },
//   {
//     title: "Carbon Neutral Planning",
//     description:
//       "Achieve carbon neutrality with our comprehensive planning services. We start by assessing your current carbon footprint, evaluating emissions throughout your supply chain. Based on this assessment, we create a customized plan to reduce and offset emissions, including energy efficiency improvements and sustainable practices.",
//     link: "/service/carbon-neutral-planning",
//     icon: "/images/service/carbo.png",
//   },
//   {
//     title: "Circular Economy Implementation",
//     description:
//       "Transition to a circular economy with our expert guidance. We help you implement systems that minimize waste, enhance recycling practices, and integrate sustainability into every aspect of your business operations.",
//     link: "/service/circular-economy-implementation",
//     bgImage: "/images/service/circulareconomy.png",
//     icon: "/images/service/circular.png",
//   },
//   {
//     title: "Sustainability Outsourcing",
//     bgImage: "/images/service/OUtsourcing.png",
//     description:
//       "Outsource your sustainability needs to us and benefit from cost savings on maintaining an in-house team. We offer a full range of services, including sustainability reporting, sustainable material sourcing, and strategy development.",
//     link: "/service/sustainability-outsourcing",
//     icon: "/images/service/Oursource.png",
//   },
//   {
//     title: "Other Services",
//     description:
//       "In addition to our core services, we offer Sustainability Communication to effectively share your environmental efforts, Training and Capacity Building to empower your team with essential skills, Green Funding Assistance to help you secure financial support for sustainability projects, and ESG Reporting.",
//     link: "/service/other-services",
//     icon: "/images/service/other.png",
//   },
// ];

// Main Home component
const Home = () => {
  const [hasMounted, setHasMounted] = React.useState(false);
  const isInitialRender = React.useRef(true);
  const router = useRouter();
  const [servicesData, setServiceData] = React.useState<
    {
      title: string;
      description: string;
      link: string;
      bgImage: string;
      icon: string;
    }[]
  >([]);
  const [serviceDetails, setServiceDetails] = React.useState({
    serviceHeading: "",
    serviceContent: "",
    serviceImage: "",
    yearsOfExperienceTitle: "",
    yearsOfExperience: null,
    satisfiedClientsTitle: "",
    satisfiedClients: null,
    serviceProvidedTitle: "",
    serviceProvided: null,
    businessPortfolioTitle: "",
    businessPortfolio: null,
    collectionHeading: "",
    collectionContent: "",
    collectionImage: "",
    serviceProvidedHeading: "",
  });

  const fetchServiceDataDetails = async () => {
    const { data, error } = await supabase.from("service_provided").select("*");
    if (error) {
      console.error("Error fetching service data details:", error);
    } else {
      setServiceData([]);
      data.forEach((servData) => {
        let sampleData = {
          title: "",
          description: "",
          link: "",
          bgImage: "",
          icon: "",
        };
        if (servData.title == "B Corp Certification") {
          sampleData = {
            title: servData.title,
            description: servData.content,
            link: "/service/b-corp-certification",
            icon: "/images/service/Bcorp.png",
            bgImage: servData.bg_image,
          };
        } else if (servData.title == "Sustainability Outsourcing") {
          sampleData = {
            title: servData.title,
            description: servData.content,
            link: "/service/sustainability-outsourcing",
            icon: "/images/service/Oursource.png",
            bgImage: servData.bg_image,
          };
        } else if (servData.title == "Circular Economy Implementation") {
          sampleData = {
            title: servData.title,
            description: servData.content,
            link: "/service/circular-economy-implementation",
            icon: "/images/service/circular.png",
            bgImage: servData.bg_image,
          };
        } else if (servData.title == "Sustainable Supply Chain Mapping") {
          sampleData = {
            title: servData.title,
            description: servData.content,
            link: "/service/supply-chain-mapping",
            icon: "/images/service/Chainmapping.png",
            bgImage: servData.bg_image,
          };
        } else if (servData.title == "Carbon Neutral Planning") {
          sampleData = {
            title: servData.title,
            description: servData.content,
            link: "/service/carbon-neutral-planning",
            icon: "/images/service/carbo.png",
            bgImage: servData.bg_image,
          };
        } else if (servData.title == "Other Services") {
          sampleData = {
            title: servData.title,
            description: servData.content,
            link: "/service/other-services",
            icon: "/images/service/other.png",
            bgImage: servData.bg_image,
          };
        }

        setServiceData((prevData) => [...prevData, sampleData]);
      });
    }
  };
  const fetchServiceDetails = async () => {
    const { data, error } = await supabase.from("service").select("*");
    if (error) {
      console.error("Error fetching service details:", error);
    } else {
      const serviceData = data[0]; // Assuming you only need the first row
      setServiceDetails({
        serviceHeading: serviceData.service_heading,
        serviceContent: serviceData.service_content,
        serviceImage: serviceData.service_image,
        yearsOfExperienceTitle: serviceData.years_of_experience_title,
        yearsOfExperience: serviceData.years_of_experience,
        satisfiedClientsTitle: serviceData.satisfied_clients_title,
        satisfiedClients: serviceData.satisfied_clients,
        serviceProvidedTitle: serviceData.services_provided_title,
        serviceProvided: serviceData.services_provided,
        businessPortfolioTitle: serviceData.business_portfolios_title,
        businessPortfolio: serviceData.business_portfolios,
        collectionHeading: serviceData.collection_heading,
        collectionContent: serviceData.collection_content,
        collectionImage: serviceData.collection_image,
        serviceProvidedHeading: serviceData.service_provided_heading,
      });
    }
  };

  React.useEffect(() => {
    if (isInitialRender.current) {
      fetchServiceDetails();
      fetchServiceDataDetails();
      isInitialRender.current = false;
      setHasMounted(true);
    }
  }, []);

  if (!hasMounted) {
    return null;
  }
  const navigateToServices = () => {
    if (hasMounted) {
      router.push("/services");
    }
    // Change '/contact' to the desired route
  };
  const handleScroll = (targetId) => {
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <>
      <div className="mx-auto mb-80 flex max-w-full flex-col items-center justify-between px-4 md:max-w-7xl md:flex-row md:px-8">
        <div className="mb-8 md:mb-0 md:w-1/2">
          <h2 className="mb-4 text-5xl font-semibold text-[#0b0b0a]">
            <span dangerouslySetInnerHTML={sanitizeHTML(serviceDetails.serviceHeading)} />
          </h2>
        </div>
        <div className="md:w-1/2">
          <p className="mb-4">
            <span dangerouslySetInnerHTML={sanitizeHTML(serviceDetails.serviceContent)} />
          </p>
          <button className="flex items-center text-black hover:underline">
            Our Services <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>
      <div className="relative mx-auto max-w-7xl bg-[#609641] px-8 py-12 md:px-16">
        <div className="flex w-full justify-center md:-mt-80">
          <Image
            src="/images/service/Services-meeting.jpg"
            alt="Service Meeting"
            width={960}
            height={360}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="mt-12 flex flex-wrap justify-center">
          <div className="mb-8 w-1/2 text-center md:w-1/4">
            <p className="mb-4 text-8xl font-bold text-white">
              <span dangerouslySetInnerHTML={sanitizeHTML(serviceDetails.yearsOfExperience)} />
              +
            </p>
            <p className="text-xl text-black">
              <span dangerouslySetInnerHTML={sanitizeHTML(serviceDetails.yearsOfExperienceTitle)} />
            </p>
          </div>
          <div className="mb-8 w-1/2 text-center md:w-1/4">
            <p className="mb-4 text-8xl font-bold text-white">
              <span dangerouslySetInnerHTML={sanitizeHTML(serviceDetails.satisfiedClients)} />
              +
            </p>
            <p className="text-xl text-black">
              <span dangerouslySetInnerHTML={sanitizeHTML(serviceDetails.satisfiedClientsTitle)} />
            </p>
          </div>
          <div className="mb-8 w-1/2 text-center md:w-1/4">
            <p className="mb-4 text-8xl font-bold text-white">
              <span dangerouslySetInnerHTML={sanitizeHTML(serviceDetails.serviceProvided)} />
            </p>
            <p className="text-xl text-black">
              <span dangerouslySetInnerHTML={sanitizeHTML(serviceDetails.serviceProvidedTitle)} />
            </p>
          </div>
          <div className="mb-8 w-1/2 text-center md:w-1/4">
            <p className="mb-4 text-8xl font-bold text-white">
              <span dangerouslySetInnerHTML={sanitizeHTML(serviceDetails.businessPortfolio)} />
              +
            </p>
            <p className="text-xl text-black">
              <span dangerouslySetInnerHTML={sanitizeHTML(serviceDetails.businessPortfolioTitle)} />
            </p>
          </div>
        </div>
      </div>
      <div className="px-4 py-16 text-center">
        <h2 className="mb-4 text-5xl font-bold text-black">
          <span dangerouslySetInnerHTML={sanitizeHTML(serviceDetails.serviceProvidedHeading)} />
        </h2>
      </div>
      <div className="mb-16 grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
        {" "}
        {/* Set to 1 column for specified range */}
        {servicesData?.map((service, index) => (
          <div key={service.title + index} className="flex justify-center">
            <div className="w-full !p-4">
              <ServiceCard {...service} />
            </div>
          </div>
          ))}
        
      </div>
      <div className="flex flex-col gap-10 px-4 md:flex-row md:justify-between md:px-20">
        <div className="mb-4 md:mb-0 md:w-1/2">
          <p className="mb-4 text-5xl font-semibold text-gray-900">
            <span dangerouslySetInnerHTML={sanitizeHTML(serviceDetails.collectionHeading)} />
          </p>
        </div>
        <div className="pl-12 pr-16 md:w-1/2">
          <p className="mb-4 text-base text-gray-900  ">
            <span dangerouslySetInnerHTML={sanitizeHTML(serviceDetails.collectionContent)} />
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-1 px-2 pt-16 sm:grid-cols-2 md:grid-cols-3 md:px-4">
        {serviceDetails.collectionImage && (
          <div className="relative flex justify-center">
            <Image
              src={serviceDetails.collectionImage}
              alt="Example Image 1"
              width={300}
              height={400} // Height is twice the width
              className="rounded-lg shadow-lg"
            />
          </div>
        )}

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
            src="/images/service/chain.png"
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