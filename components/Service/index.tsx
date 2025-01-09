"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { supabase } from "../../supabase_config/supabaseClient";
import DOMPurify from "dompurify";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setTitle } from "../../store/userSlice";
import translationData from "../../app/store/translation.json";
import { useSelector } from "react-redux";


import Slider from "react-slick"; // Import the carousel component


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4, // Show 4 cards at a time
  slidesToScroll: 1,
  autoplay: true, // Enable autoplay
  autoplaySpeed: 2000, // Set the speed of autoplay (in milliseconds)
  arrows: false, // Disable left and right arrows

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3, // Show 3 cards on medium screens
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2, // Show 2 cards on small screens
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1, // Show 1 card on extra small screens
        slidesToScroll: 1,
      },
    },
  ],
};


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

  const language = useSelector((state: any) => state.language.language); 


  return (
    <div
      onClick={handleClick}
      className={`relative mx-auto flex h-[350px] w-[250px] items-center justify-center overflow-hidden rounded-lg p-4 transition-transform hover:scale-105 md:w-[390px] lg:w-[250px]  ${cardStyle}`}
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
        {/* {icon && (
          <div className="mb-4 mt-4">
            <Image src={icon} alt={`${title} Icon`} width={40} height={40} />
          </div>
        )} */}

        <h3
          className={`mb-4 text-center text-2xl font-bold ${
            bg_image ? "text-white" : "text-[#609641]"
          }`}
          dangerouslySetInnerHTML={sanitizeHTML(title)}
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

  const language = useSelector((state: any) => state.language.language);

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

  
       
      <section className="overflow-hidden bg-[#609641] pb-10 pt-10 lg:pb-25 xl:pb-10">

      <h1 className="mb-10 mt-10 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
            <span className="rounded-full border-2 border-white px-4 py-1 text-white">
              {language === "en" ? "Services" : translationData["Services"]}
            </span>
            <span className="ml-2 text-black">
              {" "}
              {language === "en" ? "We Offer" : translationData["We Offer"]}
            </span>
          </h1>
        <div className="mb-10 px-4 sm:px-6 md:px-8 lg:px-16">
       <Slider {...settings}>
        {servicesData?.map((service, index) => (
          <div key={service.title + index} className="flex justify-center">
            <div className="cursor-pointer w-full !p-4" onClick={() => handleTitle(service.title)}>
              <ServiceCard {...service} />
            </div>
          </div>
        ))}
      </Slider>
    </div>

      </section>

      
      
    </>
  );
};

export default Home;