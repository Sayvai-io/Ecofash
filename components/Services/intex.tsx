"use client";
import React, { useContext, useEffect } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { supabase } from "../../supabase_config/supabaseClient";
import DOMPurify from "dompurify";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setTitle } from "../../store/userSlice";
import translationData from "../../app/store/translation.json"; // {{ edit_1 }}: Ensure translationData is imported

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
  const language = useSelector((state: any) => state.language.language); // {{ edit_2 }}: Get the current language

  const cardStyle = bg_image
    ? "bg-cover bg-center"
    : "bg-white shadow-[0_0_15px_rgba(96,150,65,0.5)]";

  const handleClick = () => {
    router.push("/service/separate-services");
  };

  return (
    <div
      onClick={handleClick}
      className={`relative mx-auto flex h-[350px] w-[400px] items-center justify-center overflow-hidden rounded-lg p-4 transition-transform hover:scale-105 md:w-[390px] lg:w-[500px]  ${cardStyle}`}
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
          className={`mb-4 text-2xl font-bold ${
            bg_image ? "text-white" : "text-[#609641]"
          }`}
          dangerouslySetInnerHTML={sanitizeHTML(
            language === "en" ? title : translationData[title] || title // {{ edit_3 }}: Use translationData for title
          )}
        />
        <p
          className={`mb-4 text-sm ${
            bg_image ? "text-white" : "text-gray-700"
          }`}
          dangerouslySetInnerHTML={sanitizeHTML(
            language === "en" ? content : translationData[content] || content // {{ edit_4 }}: Use translationData for content
          )}
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
  const language = useSelector((state: any) => state.language.language);
  const router = useRouter();
  const [servicesData, setServiceData] = React.useState<
    {
      title: any;
      content: any;
      link: any;
      bgImage: any;
      icon: any;
    }[]
  >([]);
  const [serviceDetails, setServiceDetails] = React.useState<any>({
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

  const fetchServiceDataDetails = async () => {
    const { data, error } = await supabase.from("service_provided").select("*");
    if (error) {
      console.error("Error fetching service data details:", error);
    } else {
      console.log(data);
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
        serviceHeading:
          language === "en"
            ? serviceData.service_heading
            : translationData["Guiding Brands to a Greener Future"],
        serviceContent:
          language === "en"
            ? serviceData.service_content
            : translationData[
                "Ecofash Services emerged from a deep commitment to revolutionize the fashion industry, placing sustainability and ethics at the forefront of our mission. What began as a small initiative driven by passion and a vision for change quickly evolved into"
              ],
        serviceImage: serviceData.service_image,

        yearsOfExperienceTitle:
          language === "en"
            ? serviceData.years_of_experience_title
            : translationData["Years of Experience"],

        yearsOfExperience: serviceData.years_of_experience,

        satisfiedClientsTitle:
          language === "en"
            ? serviceData.satisfied_clients_title
            : translationData["Satisfied Clients"],

        satisfiedClients: serviceData.satisfied_clients,

        serviceProvidedTitle:
          language === "en"
            ? serviceData.services_provided_title
            : translationData["Services Provided"],

        serviceProvided: serviceData.services_provided,

        businessPortfolioTitle:
          language === "en"
            ? serviceData.business_portfolios_title
            : translationData["Business Portfolios"],

        businessPortfolio: serviceData.business_portfolios,

        collectionHeading:
          language === "en"
            ? serviceData.collection_heading
            : translationData["Let’s see a collection of our Works"],

        collectionContent:
          language === "en"
            ? serviceData.collection_content
            : translationData[
                "Discover a curated collection of our work, showcasing our expertise in driving sustainability and transforming businesses. Our portfolio highlights successful projects across various industries, demonstrating our commitment to environmental and social responsibility."
              ],

        collectionImage: serviceData.collection_image,

        serviceProvidedHeading:
          language === "en"
            ? serviceData.service_provided_heading
            : translationData[
                "Sustainable Strategy, Ethical Supply Chains, Fashion Innovation"
              ],
      });
    }
  };

  React.useEffect(() => {
    fetchServiceDetails();
    fetchServiceDataDetails();
    setHasMounted(true);
  }, [language]);

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
      <div className="mx-auto mb-80 flex max-w-full flex-col items-center justify-between px-4 md:max-w-7xl md:flex-row md:px-8">
        <div className="mb-8 md:mb-0 md:w-1/2">
          <h2 className="mb-4 text-5xl font-semibold text-[#0b0b0a]">
            <span
              dangerouslySetInnerHTML={sanitizeHTML(
                serviceDetails.serviceHeading,
              )}
            />
          </h2>
        </div>
        <div className="md:w-1/2">
          <p className="mb-4">
            <span
              dangerouslySetInnerHTML={sanitizeHTML(
                serviceDetails.serviceContent,
              )}
            />
          </p>
          <button
            onClick={handleMakeACallClick}
            className="flex items-center text-black hover:underline"
          >
            {language === "en"
              ? "Our Services"
              : translationData["Our Services"]}{" "}
            <FaArrowRight className="ml-2" />
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
              <span
                dangerouslySetInnerHTML={sanitizeHTML(
                  serviceDetails.yearsOfExperience,
                )}
              />
              +
            </p>
            <p className="text-xl text-black">
              <span
                dangerouslySetInnerHTML={sanitizeHTML(
                  serviceDetails.yearsOfExperienceTitle,
                )}
              />
            </p>
          </div>
          <div className="mb-8 w-1/2 text-center md:w-1/4">
            <p className="mb-4 text-8xl font-bold text-white">
              <span
                dangerouslySetInnerHTML={sanitizeHTML(
                  serviceDetails.satisfiedClients,
                )}
              />
              +
            </p>
            <p className="text-xl text-black">
              <span
                dangerouslySetInnerHTML={sanitizeHTML(
                  serviceDetails.satisfiedClientsTitle,
                )}
              />
            </p>
          </div>
          <div className="mb-8 w-1/2 text-center md:w-1/4">
            <p className="mb-4 text-8xl font-bold text-white">
              <span
                dangerouslySetInnerHTML={sanitizeHTML(
                  serviceDetails.serviceProvided,
                )}
              />
            </p>
            <p className="text-xl text-black">
              <span
                dangerouslySetInnerHTML={sanitizeHTML(
                  serviceDetails.serviceProvidedTitle,
                )}
              />
            </p>
          </div>
          <div className="mb-8 w-1/2 text-center md:w-1/4">
            <p className="mb-4 text-8xl font-bold text-white">
              <span
                dangerouslySetInnerHTML={sanitizeHTML(
                  serviceDetails.businessPortfolio,
                )}
              />
              +
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
      </div>
      <div id="serviceSection">
        <div className="px-4 py-16 text-center">
          <h2 className="mb-4 text-5xl font-bold text-black">
            <span
              dangerouslySetInnerHTML={sanitizeHTML(
                serviceDetails.serviceProvidedHeading,
              )}
            />
          </h2>
        </div>
        <div className="mb-16 grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
          {servicesData?.map((service, index) => (
            <div key={service.title + index} className="flex justify-center">
              <div
                className="w-full cursor-pointer !p-4"
                onClick={() => handleTitle(service.title)}
              >
                <ServiceCard {...service} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-10 px-4 md:flex-row md:justify-between md:px-20">
        <div className="mb-4 md:mb-0 md:w-1/2">
          <p className="mb-4 text-5xl font-semibold text-gray-900">
            <span
              dangerouslySetInnerHTML={sanitizeHTML(
                serviceDetails.collectionHeading,
              )}
            />
          </p>
        </div>
        <div className="pl-12 pr-16 md:w-1/2">
          <p className="mb-4 text-base text-gray-900  ">
            <span
              dangerouslySetInnerHTML={sanitizeHTML(
                serviceDetails.collectionContent,
              )}
            />
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