"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { FaStar } from "react-icons/fa";
import { supabase } from "../../supabase_config/supabaseClient";
import { useSelector } from "react-redux";
import DOMPurify from "dompurify";
import Link from "next/link";
import { useRouter } from "next/navigation";
import translationData from "../../app/store/translation.json";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination, Autoplay } from 'swiper';

const About = () => {
  const language = useSelector((state: any) => state.language.language);
  const isInitialRender = useRef(true);
  const [hasMounted, setHasMounted] = useState(false);
  const [reviewDetails, setReviewDetails] = useState<any>([]);
  const router = useRouter();
  const [AboutDetails, setAboutDetails] = useState({
    title: "",
    bgimage: "",
    abouttitle: "",
    aboutheading: "",
    aboutcontent: "",
    aboutimage: "",
    mvtitle: "",
    mvheading: "",
    mvcontent: "",
    mvimage: "",
    tctitle: "",
    tcheading: "",
    tccontent: "",
    tcimage: "",
    reviewheading: "",
  });

  const fetchReviewDetails = async () => {
    const { data, error } = await supabase.from("about_review").select("*");
    if (error) {
      console.error("Error fetching about details:", error);
    } else {
      setReviewDetails(data);
    }
  };

  const fetchAboutDetails = async () => {
    const { data, error } = await supabase.from("about").select("*");
    if (error) {
      console.error("Error fetching about details:", error);
    } else {
      const AboutData = data[0];
      setAboutDetails({
        title:
          language === "en" ? AboutData.title : translationData["About US"],
        bgimage: AboutData.bg_image,
        abouttitle:
          language === "en"
            ? AboutData.about_title
            : translationData["About US"],
        aboutheading:
          language === "en"
            ? AboutData.about_heading
            : translationData["Our Story"],
        aboutcontent:
          language === "en"
            ? AboutData.about_content
            : translationData[
                "EcoFash is dedicated to transforming the fashion industry by promoting sustainability and responsible practices. We specialize in guiding companies through the complexities of sustainability with a focus on cost-effective and eco-friendly strategies. Our mission is to drive positive environmental and social impact across the global fashion supply chain while helping brands meet and exceed evolving sustainability standards. EcoFash serves a wide range of clients across the fashion supply chain, including brands, manufacturers, buying houses, and retailers. We primarily target businesses that seek to enhance their sustainability practices, achieve regulatory compliance, and adopt circular economy models. Our services cater to global clients, particularly those in Europe, India, China, Bangladesh, Myanmar, Cambodia, Vietnam, Laos and rest of Southeast Asia"
              ],
        aboutimage: AboutData.about_image,
        mvtitle:
          language === "en"
            ? AboutData.mv_title
            : translationData["Our Mission and Vision"],
        mvheading:
          language === "en"
            ? AboutData.mv_heading
            : translationData["Fashion for a Greener Future"],
        mvcontent:
          language === "en"
            ? AboutData.mv_content
            : translationData[
                "Ecofash's mission is to redefine fashion through sustainable excellence, ensuring that environmental and social responsibility become cornerstones of the fashion industry. We envision a future where the fashion supply chain operates ethically and transparently, minimizing environmental harm while maximizing positive social impact."
              ],
        mvimage: AboutData.mv_image,
        tctitle:
          language === "en" ? AboutData.tc_title : translationData["Our Team"],
        tcheading:
          language === "en"
            ? AboutData.tc_heading
            : translationData["Your Allies in Sustainable Fashion"],
        tccontent:
          language === "en"
            ? AboutData.tc_content
            : translationData[
                "Ecofash Services is driven by sustainability experts, supply chain analysts, and fashion veterans. We help brands transform their operations to be more sustainable and socially responsible, shaping a better future for fashion."
              ],
        tcimage: AboutData.tc_image,
        reviewheading:
          language === "en"
            ? AboutData.review_heading
            : translationData["Get to Know What Our Clients Think"],
      });
    }
  };

  useEffect(() => {
    if (isInitialRender.current) {
      fetchReviewDetails();
      isInitialRender.current = false;
    }
    fetchAboutDetails();
    setHasMounted(true);
  }, [language]);

  if (!hasMounted) {
    return null;
  }

  const sanitizeHTML = (html: string) => {
    return {
      __html: DOMPurify.sanitize(html),
    };
  };

  const navigateToContact = () => {
    if (hasMounted) {
      router.push("/contact");
    }
  };

  return (
    <>
      <section className="relative -mt-14 overflow-hidden py-16 sm:-mt-10 sm:py-20 md:-mt-12 md:py-28 lg:-mt-14 lg:py-32 xl:-mt-18 xl:py-44">
        <div className="absolute inset-0 z-0">
          {AboutDetails.bgimage && (
            <Image
              src={AboutDetails.bgimage}
              alt="Supply Chain Mapping"
              layout="fill"
              style={{ objectFit: "cover" }}
              quality={100}
            />
          )}
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-30">
          <div className="flex items-start gap-6 px-5">
            <Image
              src="/images/about/line.png"
              alt="Line"
              width={14}
              height={40}
              className="-ml-16 mt-5 lg:mt-19"
            />
            <div>
              <h1
                className="mb-4 text-4xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl"
                dangerouslySetInnerHTML={sanitizeHTML(AboutDetails.title)}
              ></h1>
            </div>
          </div>
          <div className="mt-3 flex space-x-4 md:mt-8">
            <button
              onClick={navigateToContact}
              className="items-center justify-center rounded-md bg-[#609641] px-4 py-2 text-base  text-white transition duration-300 ease-in-out hover:bg-[#4d7a34]"
            >
              {language === "en" ? "Contact Us" : "聯絡我們"}
            </button>
          </div>
        </div>
      </section>

      <section className="lg:pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <div className="flex flex-col items-center gap-12 lg:flex-row">
            <div className="lg:w-1/2">
              <Image
                src="/images/about/story.png"
                alt="Our Story"
                width={600}
                height={400}
              />
            </div>

            <div className="lg:w-1/2">
              <div className="mb-4 flex items-center gap-2">
                <Image
                  src="/images/about/aboutuslogo.png"
                  alt="About Us Logo"
                  width={24}
                  height={24}
                />

                <span
                  className="mr-2 text-lg text-[#4d4d4b]"
                  dangerouslySetInnerHTML={sanitizeHTML(
                    AboutDetails.abouttitle,
                  )}
                ></span>
              </div>
              <h2
                className="mb-6 text-3xl font-bold text-black sm:text-4xl md:text-5xl"
                dangerouslySetInnerHTML={sanitizeHTML(
                  AboutDetails.aboutheading,
                )}
              ></h2>
              <p
                className="mb-8 text-lg text-black"
                dangerouslySetInnerHTML={sanitizeHTML(
                  AboutDetails.aboutcontent,
                )}
              ></p>
            </div>
          </div>
        </div>
      </section>

      <section className="lg:pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <div className="flex flex-col items-center gap-16 lg:flex-row">
            <div className="lg:w-1/2">
              <div className="mb-4 flex items-center gap-2">
                <Image
                  src="/images/about/aboutuslogo.png"
                  alt="About Us Logo"
                  width={24}
                  height={24}
                />

                <span
                  className="text-lg text-[#4d4d4b]"
                  dangerouslySetInnerHTML={sanitizeHTML(AboutDetails.mvtitle)}
                ></span>
              </div>

              <h2
                className="mb-12 text-3xl font-bold text-black sm:text-4xl md:text-5xl"
                dangerouslySetInnerHTML={sanitizeHTML(AboutDetails.mvheading)}
              ></h2>
              <p
                className="mb-8 rounded-l-md border-l-4 border-[#609641] pl-6 text-lg text-black"
                dangerouslySetInnerHTML={sanitizeHTML(AboutDetails.mvcontent)}
              ></p>
              <div className="mt-12 w-full border-b-2 border-gray-300"></div>
            </div>

            <div className="lg:w-1/2">
              {AboutDetails.mvimage && (
                <Image
                  src={AboutDetails.mvimage}
                  alt="Our Mission & Vision"
                  width={600}
                  height={400}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="lg:pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <div className="flex flex-col items-center gap-12 lg:flex-row">
            <div className="lg:w-1/2">
              {AboutDetails.tcimage && (
                <Image
                  src={AboutDetails.tcimage}
                  alt="Allies in Sustainable Fashion"
                  width={500}
                  height={333}
                />
              )}
            </div>

            <div className="lg:w-1/2">
              <div className="mb-4 flex items-center gap-2">
                <Image
                  src="/images/about/aboutuslogo.png"
                  alt="About Us Logo"
                  width={24}
                  height={24}
                />

                <span
                  className="mr-2 text-lg  text-[#4d4d4b]"
                  dangerouslySetInnerHTML={sanitizeHTML(AboutDetails.tctitle)}
                ></span>
              </div>
              <h2
                className="mb-6 text-3xl font-bold text-black sm:text-4xl md:text-5xl"
                dangerouslySetInnerHTML={sanitizeHTML(AboutDetails.tcheading)}
              ></h2>
              <p
                className="mb-8 text-lg text-black"
                dangerouslySetInnerHTML={sanitizeHTML(AboutDetails.tccontent)}
              ></p>
              <Link href="/teams">
                <button className="rounded-xl bg-[#609641] px-6 py-2 font-semibold text-white transition duration-300 hover:bg-[#4d7a33]">
                  {language === "en"
                    ? "Learn More"
                    : translationData["Learn More"]}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-28 lg:py-32 xl:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="mb-12 text-center text-3xl font-bold text-black sm:text-4xl md:text-5xl"
            dangerouslySetInnerHTML={sanitizeHTML(AboutDetails.reviewheading)}
          ></h2>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            className="testimonial-carousel"
          >
            {reviewDetails.map((client, index) => (
              <SwiperSlide key={index} className="flex flex-col items-center">
                <div className={`group flex flex-col items-center rounded-xl p-6 text-center shadow-md transition-colors duration-300 hover:!text-white ${index === 1 ? "bg-[#003F2E] text-white" : "bg-white hover:bg-[#003F2E] hover:text-white"}`}>
                  <div className="mb-4 flex justify-center">
                    {[...Array(client.rating)].map((_, i) => (
                      <FaStar key={i} className="mx-0.5 text-yellow-400" />
                    ))}
                  </div>
                  {language === "en" ? (
                    <p className={`mb-6 ${index === 1 ? "text-white" : "text-gray-700 "} group-hover:!text-white`} dangerouslySetInnerHTML={sanitizeHTML(client.comments)}></p>
                  ) : (
                    <p>{translationData["I am impressed by their expertise and commitment to excellence. Their efficient solutions and proactive services have consistently exceeded my expectations, making them our trusted partner."]}</p>
                  )}
                  <div className="flex items-center">
                    {client.profile_image && (
                      <Image
                        src={client.profile_image}
                        alt={`${client.name} Profile`}
                        width={50}
                        height={50}
                        className="mr-4 rounded-full"
                      />
                    )}
                    <div className="text-left">
                      <p className="font-semibold" dangerouslySetInnerHTML={sanitizeHTML(client.name)}></p>
                      <p className={`text-sm ${index === 1 ? "text-gray-300" : "text-gray-500 hover:!text-gray-300"}`} dangerouslySetInnerHTML={sanitizeHTML(client.designation)}></p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};
export default About;
