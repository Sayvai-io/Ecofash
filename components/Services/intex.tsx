"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { supabase } from "../../supabase_config/supabaseClient";
import DOMPurify from "dompurify";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setTitle } from "../../store/userSlice";

// First, let's define the ServiceCard component
const ServiceCard = ({
  title,
  content,
  link,
  bg_image,
  icon,
}: {
  title: string;
  content: string;
  link: string;
  bg_image?: string;
  icon?: string;
}) => {
  const router = useRouter();

  const cardStyle = bg_image
    ? "bg-cover bg-center"
    : "bg-white shadow-[0_0_15px_rgba(96,150,65,0.5)]";

  const handleClick = () => {
    router.push('/service/separate-services')  
  };

  return (
    <div
      onClick={handleClick}
      className={`relative mx-auto flex h-[300px] w-full max-w-[400px] items-center justify-center overflow-hidden rounded-lg p-2 transition-transform hover:scale-105 sm:h-[350px] md:w-[320px] lg:w-[500px] ${cardStyle}`}
    >
      {bg_image && (
        <>
          <Image
            src={bg_image}
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
          className={`mb-4 text-xl font-bold ${
            bg_image ? "text-white" : "text-[#609641]"
          }`}
          dangerouslySetInnerHTML={sanitizeHTML(title)}
        />
        <p
          className={`mb-4 text-sm ${
            bg_image ? "text-white" : "text-gray-700"
          }`}
          dangerouslySetInnerHTML={sanitizeHTML(content)}
        />
      </div>
    </div>
  );
};

const sanitizeHTML = (htmlContent) => {
  return { __html: DOMPurify.sanitize(htmlContent) };
};

const Home = () => {
  const [hasMounted, setHasMounted] = React.useState(false);
  const isInitialRender = React.useRef(true);
  const router = useRouter();
  const [servicesData, setServiceData] = React.useState<
    {
      title: string;
      content: string;
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
    collectionImage1: "",
    collectionImage2: "",
    collectionImage3: "",
    serviceProvidedHeading: "",
  });
  const dispatch = useDispatch();
  const [yearsOfExperienceCount, setYearsOfExperienceCount] = useState(0);
  const [satisfiedClientsCount, setSatisfiedClientsCount] = useState(0);
  const [serviceProvidedCount, setServiceProvidedCount] = useState(0);
  const [businessPortfolioCount, setBusinessPortfolioCount] = useState(0);

  const fetchServiceDataDetails = async () => {
    const { data, error } = await supabase.from("service_provided").select("*");
    if (error) {
      console.error("Error fetching service data details:", error);
    } else {
      setServiceData(data);
      data.forEach((servData) => {
        let sampleData = {
          title: "",
          content: "",
          link: "",
          bgImage: "",
          icon: "",
        };
        if (servData.title == "Freelance CSO") {
          sampleData = {
            title: servData.title,
            content: servData.content,
            link: "/service/b-corp-certification",
            icon: "/images/service/Bcorp.png",
            bgImage: servData.bg_image,
          };
        } else if (servData.title == "Sustainability Outsourcing") {
          sampleData = {
            title: servData.title,
            content: servData.content,
            link: "/service/sustainability-outsourcing",
            icon: "/images/service/Oursource.png",
            bgImage: servData.bg_image,
          };
        } else if (servData.title == "Circular Economy Implementation") {
          sampleData = {
            title: servData.title,
            content: servData.content,
            link: "/service/circular-economy-implementation",
            icon: "/images/service/circular.png",
            bgImage: servData.bg_image,
          };
        } else if (servData.title == "Sustainable Supply Chain Mapping") {
          sampleData = {
            title: servData.title,
            content: servData.content,
            link: "/service/supply-chain-mapping",
            icon: "/images/service/Chainmapping.png",
            bgImage: servData.bg_image,
          };
        } else if (servData.title == "Carbon Neutral Planning") {
          sampleData = {
            title: servData.title,
            content: servData.content,
            link: "/service/carbon-neutral-planning",
            icon: "/images/service/carbo.png",
            bgImage: servData.bg_image,
          };
        } else if (
          servData.title == "Sustainability Strategy & Implementation"
        ) {
          sampleData = {
            title: servData.title,
            content: servData.content,
            link: "/service/other-services",
            icon: "/images/service/other.png",
            bgImage: servData.bg_image,
          };
        }

        setServiceData((prevData) => [...prevData, sampleData]);
      });
      setServiceData(data);
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
        serviceImage: serviceData.service_image, // Fetching service image from the database
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
        collectionImage1: serviceData.collection_image1,
        collectionImage2: serviceData.collection_image2,
        collectionImage3: serviceData.collection_image3,
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

  useEffect(() => {
    const duration = 2000; // Duration of the animation in milliseconds
    const stepTime = 50; // Time between each step in milliseconds

    const yearsOfExperienceInterval = setInterval(() => {
      setYearsOfExperienceCount((prev) => {
        if (prev < (serviceDetails.yearsOfExperience ?? 0)) {
          return prev + 1;
        } else {
          clearInterval(yearsOfExperienceInterval);
          return prev;
        }
      });
    }, stepTime);

    const satisfiedClientsInterval = setInterval(() => {
      setSatisfiedClientsCount((prev) => {
        if (prev < (serviceDetails.satisfiedClients ?? 0)) {
          return prev + 1;
        } else {
          clearInterval(satisfiedClientsInterval);
          return prev;
        }
      });
    }, stepTime);

    const serviceProvidedInterval = setInterval(() => {
      setServiceProvidedCount((prev) => {
        if (prev < (serviceDetails.serviceProvided ?? 0)) {
          return prev + 1;
        } else {
          clearInterval(serviceProvidedInterval);
          return prev;
        }
      });
    }, stepTime);

    const businessPortfolioInterval = setInterval(() => {
      setBusinessPortfolioCount((prev) => {
        if (prev < (serviceDetails.businessPortfolio ?? 0)) {
          return prev + 1;
        } else {
          clearInterval(businessPortfolioInterval);
          return prev;
        }
      });
    }, stepTime);

    // Cleanup intervals on component unmount
    return () => {
      clearInterval(yearsOfExperienceInterval);
      clearInterval(satisfiedClientsInterval);
      clearInterval(serviceProvidedInterval);
      clearInterval(businessPortfolioInterval);
    };
  }, [serviceDetails]);

  if (!hasMounted) {
    return null;
  }

  const navigateToServices = () => {
    if (hasMounted) {
      router.push("/services");
    }
  };

  const handleMakeACallClick = () => {
    const serviceSection = document.getElementById("serviceSection");
    if (serviceSection) {
      serviceSection.scrollIntoView({ behavior: "smooth" });
    }
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

  const handleTitle = (title) => {
    dispatch(setTitle(title));
  };

  return (
    <>
      <section className="relative -mt-14 overflow-hidden py-16 sm:-mt-10 sm:py-20 md:-mt-12 md:py-35 lg:-mt-14 lg:py-32 xl:-mt-18 xl:py-52">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          {serviceDetails.serviceImage !== "" && (
            <Image
              src={serviceDetails.serviceImage}
              alt="Supply Chain Mapping"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="filter"
            />
          )}
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="mb-8 md:mb-0 rounded-md border-l-8 border-[#609641] px-5">
            <h2 className="mb-4 px-4 text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl text-white">
              <span
                dangerouslySetInnerHTML={sanitizeHTML(
                  serviceDetails.serviceHeading,
                )}
              />
            </h2>
          </div>
          <div className="">
            <p className="mb-6 text-lg text-white">
              <span
                dangerouslySetInnerHTML={sanitizeHTML(
                  serviceDetails.serviceContent,
                )}
              />
            </p>
            <button
              onClick={handleMakeACallClick}
              className="flex items-center justify-center rounded-md bg-[#609641] px-4 py-2 text-base  text-white transition duration-300 ease-in-out hover:bg-[#4d7a34]"
            >
              Our Services <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </section>
      <section className="relative bg-[#609641]">
        <div className="flex flex-col py-10 px-10 items-center justify-center md:flex-row md:justify-around">
          {/* Years of Experience */}
          <div className="flex flex-col items-center mb-8 md:mb-0 md:w-1/4">
            <p className="text-5xl font-bold text-white sm:text-6xl md:text-7xl lg:text-8xl">
              {yearsOfExperienceCount}+
            </p>
            <p className="text-xl text-black">
              <span
                dangerouslySetInnerHTML={sanitizeHTML(
                  serviceDetails.yearsOfExperienceTitle,
                )}
              />
            </p>
          </div>

          {/* Satisfied Clients */}
          <div className="flex flex-col items-center mb-8 md:mb-0 md:w-1/4">
            <p className="text-5xl font-bold text-white sm:text-6xl md:text-7xl lg:text-8xl">
              {satisfiedClientsCount}+
            </p>
            <p className="text-xl text-black">
              <span
                dangerouslySetInnerHTML={sanitizeHTML(
                  serviceDetails.satisfiedClientsTitle,
                )}
              />
            </p>
          </div>

          {/* Services Provided */}
          <div className="flex flex-col items-center mb-8 md:mb-0 md:w-1/4">
            <p className="text-5xl font-bold text-white sm:text-6xl md:text-7xl lg:text-8xl">
              {serviceProvidedCount}
            </p>
            <p className="text-xl text-black">
              <span
                dangerouslySetInnerHTML={sanitizeHTML(
                  serviceDetails.serviceProvidedTitle,
                )}
              />
            </p>
          </div>

          {/* Business Portfolio */}
          <div className="flex flex-col items-center mb-8 md:mb-0 md:w-1/4">
            <p className="text-5xl font-bold text-white sm:text-6xl md:text-7xl lg:text-8xl">
              {businessPortfolioCount}+
            </p>
            <p className="text-xl text-black">
              <span
                dangerouslySetInnerHTML={sanitizeHTML(
                  serviceDetails.businessPortfolioTitle,
                )}
              />
            </p>
          </div>
        </div>
      </section>
      <div id="serviceSection">
        <div className="px-4 py-16 text-center">
          <h2 className="mb-2 px-10 text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl text-black">
            <span
              dangerouslySetInnerHTML={sanitizeHTML(
                serviceDetails.serviceProvidedHeading,
              )}
            />
          </h2>
        </div>
        <div className="mb-16 px-2 sm:px-6 md:px-8 lg:px-50 grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {servicesData?.map((service, index) => (
            <div key={service.title + index} className="flex justify-center mb-1 sm:mb-1 md:mb-1 lg:mb-4">
              <div className="cursor-pointer w-full sm:w-[90%] md:w-auto !p-2" onClick={() => handleTitle(service.title)}>
                <ServiceCard {...service} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-10 px-4 md:flex-row md:justify-between md:px-20">
        <div className="mb-4 md:mb-0 md:w-1/2">
          <p className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl text-gray-900">
            <span
              dangerouslySetInnerHTML={sanitizeHTML(
                serviceDetails.collectionHeading,
              )}
            />
          </p>
        </div>
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 md:w-1/2">
          <p className="mb-4 text-lg text-gray-900">
            <span
              dangerouslySetInnerHTML={sanitizeHTML(
                serviceDetails.collectionContent,
              )}
            />
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-2 px-2 pt-16 sm:grid-cols-2 md:grid-cols-3 md:px-18">
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

        {serviceDetails.collectionImage1 && (
          <div className="relative flex justify-center">
            <Image
              src={serviceDetails.collectionImage1}
              alt="Example Image 1"
              width={300}
              height={400} // Height is twice the width
              className="rounded-lg shadow-lg"
            />
          </div>
        )}

        {serviceDetails.collectionImage2 && (
          <div className="relative flex justify-center">
            <Image
              src={serviceDetails.collectionImage2}
              alt="Example Image 1"
              width={300}
              height={400} // Height is twice the width
              className="rounded-lg shadow-lg"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Home;