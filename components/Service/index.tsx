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
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

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
    router.push("/service/separate-services");
  };

  const language = useSelector((state: any) => state.language.language);

  return (
    <div
      onClick={handleClick}
      className={`relative mx-auto flex h-[350px] w-[90%] max-w-[250px] items-center justify-center overflow-hidden rounded-lg p-4 transition-transform hover:scale-105 md:max-w-[390px] lg:max-w-[250px] ${cardStyle}`}
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
        <h3
          className={`mb-4 text-center text-lg font-bold sm:text-xl md:text-2xl lg:text-xl ${
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

  const dispatch = useDispatch();
  const language = useSelector((state: any) => state.language.language);

  const fetchServiceDataDetails = async () => {
    const { data, error } = await supabase.from("service_provided").select("*");
    if (error) {
      console.error("Error fetching service data details:", error);
    } else {
      setServiceData(data);
    }
  };

  const fetchServiceDetails = async () => {
    const { data, error } = await supabase.from("service").select("*");
    if (error) {
      console.error("Error fetching service details:", error);
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

  const handleTitle = (title) => {
    dispatch(setTitle(title));
  };

  return (
    <>
      <section className="overflow-hidden bg-[#609641] pb-10 pt-10 lg:pb-25 xl:pb-10">
        <h1 className="mb-10 mt-10 text-center text-2xl font-semibold text-white sm:text-3xl md:text-4xl lg:text-5xl">
          <span className="rounded-full border-2 border-white px-4 py-1">
            {language === "en" ? "Services" : translationData["Services"]}
          </span>
          <span className="ml-2 text-black">
            {language === "en" ? "We Offer" : translationData["We Offer"]}
          </span>
        </h1>
        <div className="mb-10 px-4 sm:px-6 md:px-8 lg:px-16">
          <Slider {...settings}>
            {servicesData?.map((service, index) => (
              <div
                key={service.title + index}
                className="flex justify-center"
              >
                <div
                  className="cursor-pointer w-full !p-4"
                  onClick={() => handleTitle(service.title)}
                >
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
