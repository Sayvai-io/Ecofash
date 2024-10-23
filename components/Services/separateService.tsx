// "use client";
// import Image from "next/image";
// import { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import { supabase } from "../../supabase_config/supabaseClient";
// import DOMPurify from "dompurify"; // {{ edit_1 }}
// import { useSelector } from "react-redux";
// import ServiceContent from "./ServiceContent";
// import { useDispatch } from "react-redux";
// import { setTitle } from "../../store/userSlice";
// import translationData from "../../app/store/translation.json";

// const SeparateService = () => {
//   const pathname = usePathname();
//   const [hasMounted, setHasMounted] = useState(false);
//   const router = useRouter();
//   const isInitialRender = useRef(true);
//   const dispatch = useDispatch();
//   const [email, setEmail] = useState("");
//   const [serviceProviderData, setProviderData] = useState<{
//     title: string;
//     heading: "";
//     content: "";
//     significanceBgImage: "";
//     significance: "";
//     planOfAction: "";
//     significanceTitle: "";
//     planOfActionTitle: "";
//   }>();
//   const title = useSelector((state: any) => state.language.title);
//   const language = useSelector((state: any) => state.language.language);

//   const [serviceTitle, setServiceTitle] = useState<any[]>([]);

//   const sanitizeHTML = (html: string) => {
//     // {{ edit_2 }}
//     return {
//       __html: DOMPurify.sanitize(html),
//     };
//   };

//   const fetchProviderData = async () => {
//     const { data, error } = await supabase
//       .from("seperate_service")
//       .select("*")
//       .eq("title", "Sustainability Strategy & Implementation");
//     if (error) {
//       console.error("Error fetching service data details:", error);
//     } else {
//       if (language === "en") {
//         setProviderData({
//           title: data[0].title,
//           heading: data[0].heading,
//           content: data[0].content,
//           significanceBgImage: data[0].why_content_image,
//           significance: data[0].significance,
//           planOfAction: data[0].plan_of_action,
//           significanceTitle: data[0].significance_title,
//           planOfActionTitle: data[0].plan_of_action_title,
//         });
//       } else {
//         if (data[0].title == "<p>Cost-Effective Solutions</p>") {
//           setProviderData({
//             title: translationData["Cost-Effective Solutions"],
//             heading: data[0].heading,
//             content: data[0].content,
//             significanceBgImage: data[0].why_content_image,
//             significance: data[0].significance,
//             planOfAction: data[0].plan_of_action,
//             significanceTitle: data[0].significance_title,
//             planOfActionTitle: data[0].plan_of_action_title,
//           });
//         }
//       }
//     }
//   };
//   const fetchServices = async () => {
//     const { data, error } = await supabase
//       .from("service_provided")
//       .select("title");

//     if (error) {
//       console.error("Error fetching service details:", error.message);
//     } else {
//       setServiceTitle(data);
//     }
//   };

//   useEffect(() => {
//     fetchServices();
//     fetchProviderData();

//     setHasMounted(true);
//   }, [language]);

//   if (!hasMounted) {
//     return null;
//   }
//   const navigateToContact = () => {
//     if (hasMounted) {
//       router.push("/contact");
//     }
//     // Change '/contact' to the desired route
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };

//   const ServiceLink = ({ href, children }) => {
//     const isActive = pathname === href;
//     return (
//       <Link
//         href={href}
//         className={`flex items-center text-lg font-semibold ${
//           isActive ? "text-[#609641]" : "hover:text-[#609641]"
//         } border-b-2 border-gray-200 pb-4`}
//       >
//         <span className="mr-2 hidden group-hover:inline-block">{"<"}</span>
//         {children}
//       </Link>
//     );
//   };

//   const handleTitle = (title) => {
//     dispatch(setTitle(title));
//   };

//   return (
//     <>
//       <section className="relative -mt-14 overflow-hidden py-16 sm:-mt-10 sm:py-20 md:-mt-12 md:py-28 lg:-mt-14 lg:py-32 xl:-mt-14 xl:py-44">
//         {/* Background Image */}
//         <div className="absolute inset-0 z-0">
//           <Image
//             src="/images/service/service-hero.jpg"
//             alt="Supply Chain Mapping"
//             layout="fill"
//             objectFit="cover"
//             quality={100}
//           />
//           <div className="absolute inset-0 bg-black opacity-70"></div>
//         </div>

//         <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-20">
//           <div className="rounded-sm border-l-8 border-[#609641] px-5">
//             {language === "en" && (
//               <h1 className="mb-4 text-4xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
//                 <span className="mb-4 block">
//                   Transforming <span className="text-[#609641]">Fashion</span>{" "}
//                   with Ethical
//                 </span>
//                 and <span className="text-[#609641]">Sustainable</span>{" "}
//                 Practices
//               </h1>
//             )}
//             {language !== "en" && (
//               <h1 className="mb-4 text-4xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
//                 通过道德和可持续实践改变时尚
//               </h1>
//             )}
//           </div>
//           <div className="mt-8 flex space-x-4">
//             <button className="rounded-lg bg-white px-6 py-2 font-semibold text-black transition duration-300 hover:bg-gray-100">
//               {language === "en"
//                 ? "Get Started"
//                 : translationData["Get Started"]}
//             </button>
//             <button
//               onClick={navigateToContact}
//               className="rounded-lg border-2 border-white px-6 py-2 font-semibold text-white transition duration-300 hover:bg-white hover:text-black"
//             >
//               {language === "en" ? "Contact Us" : translationData["Contact Us"]}
//             </button>
//           </div>
//         </div>
//       </section>

//       <section className="py-16 sm:py-20 md:py-28 lg:py-32 xl:py-20">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-20">
//           <div className="flex flex-wrap">
//             {/* Left side content */}
//             <div className="mb-8 w-full pr-8 lg:mb-0 lg:w-1/3">
//               {/* Service Links */}
//               <div className="mb-12">
//                 <h2 className="mb-6 text-4xl font-bold text-[#0d0e0d]">
//                   Services
//                 </h2>
//                 <ul className="space-y-4">
//                   {/* {serviceTitle.map((service, index) => (
//                     <li
//                       key={index}
//                       onClick={() => handleTitle(service.title)}
//                       className={`cursor-pointer ${
//                         title === service.title
//                           ? "text-[#609641]"
//                           : "text-gray-600"
//                       } border-b-2 border-gray-200 pb-4 font-semibold`}
//                       dangerouslySetInnerHTML={sanitizeHTML(service.title)} // {{ edit_1 }}: Added sanitizeHTML to service.title
//                     />
//                   ))} */}
//                   {serviceTitle.map((service, index) => (
//                     <li
//                       key={index}
//                       onClick={() => handleTitle(service.title)}
//                       className={`cursor-pointer ${
//                         title === service.title
//                           ? "text-[#609641]"
//                           : "text-gray-600"
//                       } border-b-2 border-gray-200 pb-4 font-semibold`}
//                       dangerouslySetInnerHTML={sanitizeHTML(
//                         language === "zh"
//                           ? translationData[service.title] || service.title // {{ edit_1 }}: Use translationData for Chinese titles
//                           : service.title // {{ edit_2 }}: Default to original title
//                       )}
//                     />
//                   ))}
//                   {/* <li>
//                     <ServiceLink href="/service/supply-chain-mapping">
//                       Supply Chain Mapping
//                     </ServiceLink>
//                   </li>
//                   <li>
//                     <ServiceLink href="/service/b-corp-certification">
//                       Freelance CSO
//                     </ServiceLink>
//                   </li>
//                   <li>
//                     <ServiceLink href="/service/carbon-neutral-planning">
//                       Carbon Neutral Planning
//                     </ServiceLink>
//                   </li>
//                   <li>
//                     <ServiceLink href="/service/circular-economy-implementation">
//                       Circular Economy Implementation
//                     </ServiceLink>
//                   </li>
//                   <li>
//                     <ServiceLink href="/service/sustainability-outsourcing">
//                       Sustainability Outsourcing
//                     </ServiceLink>
//                   </li>
//                   <li>
//                     <ServiceLink href="/service/other-services">
//                       Sustainability Strategy & Implementation
//                     </ServiceLink>
//                   </li> */}
//                 </ul>
//               </div>

//               {/* Image */}
//               <div className="rounded-lg bg-[#F3F3F3]">
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: 0.2 }}
//                   viewport={{ once: true }}
//                   className="mb-8 w-full"
//                 >
//                   <div className="relative h-[200px] w-full overflow-hidden rounded-lg">
//                     <Image
//                       src="/images/about/about-image.png"
//                       alt=""
//                       fill
//                       className="border-none object-cover"
//                     />
//                     <Image
//                       src="/images/about/about-image-dark.svg"
//                       alt=""
//                       fill
//                       className="hidden object-cover dark:block"
//                     />
//                   </div>
//                 </motion.div>

//                 {/* Text content */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: 0.1 }}
//                   viewport={{ once: true }}
//                   className="text-center"
//                 >
//                   <h2 className="mb-2 text-3xl font-bold text-black dark:text-black xl:text-xl">
//                     {language === "en"
//                       ? "Let's make things happen"
//                       : translationData["Let's make things happen"]}
//                   </h2>
//                   <p className="text-body-color mx-auto mb-4 max-w-2xl p-4 text-sm font-medium leading-relaxed">
//                     {language === "en"
//                       ? "Contact us today to learn more about how our services can help your business grow sustainably and make a difference."
//                       : translationData[
//                           "Contact us today to learn more about how our services can help your business grow sustainably and make a difference."
//                         ]}
//                   </p>
//                   <a
//                     href="/contact"
//                     className="mb-6 inline-flex items-center justify-center gap-2 rounded-xl bg-[#609641] px-6 py-2 font-medium text-white hover:opacity-90"
//                   >
//                     {language === "en"
//                       ? "Contact Us"
//                       : translationData["Contact Us"]}
//                   </a>
//                 </motion.div>
//               </div>
//             </div>

//             {/* Right side content */}
//             <ServiceContent />
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default SeparateService;


"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { supabase } from "../../supabase_config/supabaseClient";
import DOMPurify from "dompurify"; // Importing DOMPurify for sanitizing HTML
import { useSelector } from "react-redux";
import ServiceContent from "./ServiceContent";
import { useDispatch } from "react-redux";
import { setTitle } from "../../store/userSlice";
import translationData from "../../app/store/translation.json";

const SeparateService = () => {
  const pathname = usePathname();
  const [hasMounted, setHasMounted] = useState(false);
  const router = useRouter();
  const isInitialRender = useRef(true);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [serviceProviderData, setProviderData] = useState<{
    title: string;
    heading: "";
    content: "";
    significanceBgImage: "";
    significance: "";
    planOfAction: "";
    significanceTitle: "";
    planOfActionTitle: "";
  }>();
  const title = useSelector((state: any) => state.language.title);
  const language = useSelector((state: any) => state.language.language);

  const [serviceTitle, setServiceTitle] = useState<any[]>([]);

  const sanitizeHTML = (html: string) => {
    // Function to sanitize HTML input
    return {
      __html: DOMPurify.sanitize(html),
    };
  };

  const fetchProviderData = async () => {
    const { data, error } = await supabase
      .from("seperate_service")
      .select("*")
      .eq("title", "Sustainability Strategy & Implementation");
    if (error) {
      console.error("Error fetching service data details:", error);
    } else {
      if (language === "en") {
        setProviderData({
          title: data[0].title,
          heading: data[0].heading,
          content: data[0].content,
          significanceBgImage: data[0].why_content_image,
          significance: data[0].significance,
          planOfAction: data[0].plan_of_action,
          significanceTitle: data[0].significance_title,
          planOfActionTitle: data[0].plan_of_action_title,
        });
      } else {
        if (data[0].title == "<p>Cost-Effective Solutions</p>") {
          setProviderData({
            title: translationData["Cost-Effective Solutions"],
            heading: data[0].heading,
            content: data[0].content,
            significanceBgImage: data[0].why_content_image,
            significance: data[0].significance,
            planOfAction: data[0].plan_of_action,
            significanceTitle: data[0].significance_title,
            planOfActionTitle: data[0].plan_of_action_title,
          });
        }
      }
    }
  };

  const fetchServices = async () => {
    const { data, error } = await supabase
      .from("service_provided")
      .select("title");

    if (error) {
      console.error("Error fetching service details:", error.message);
    } else {
      setServiceTitle(data);
    }
  };

  useEffect(() => {
    fetchServices();
    fetchProviderData();

    setHasMounted(true);
  }, [language]);

  if (!hasMounted) {
    return null;
  }
  
  const navigateToContact = () => {
    if (hasMounted) {
      router.push("/contact");
    }
    // Change '/contact' to the desired route
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const ServiceLink = ({ href, children }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        className={`flex items-center text-lg font-semibold ${
          isActive ? "text-[#609641]" : "hover:text-[#609641]"
        } border-b-2 border-gray-200 pb-4`}
      >
        <span className="mr-2 hidden group-hover:inline-block">{"<"}</span>
        {children}
      </Link>
    );
  };

  const handleTitle = (title) => {
    dispatch(setTitle(title));
  };

  return (
    <>
      <section className="relative -mt-14 overflow-hidden py-16 sm:-mt-10 sm:py-20 md:-mt-12 md:py-28 lg:-mt-14 lg:py-32 xl:-mt-14 xl:py-44">
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
            {language === "en" && (
              <h1 className="mb-4 text-4xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                <span className="mb-4 block">
                  Transforming <span className="text-[#609641]">Fashion</span>{" "}
                  with Ethical
                </span>
                and <span className="text-[#609641]">Sustainable</span>{" "}
                Practices
              </h1>
            )}
            {language !== "en" && (
              <h1 className="mb-4 text-4xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                通过道德和可持续实践改变时尚
              </h1>
            )}
          </div>
          <div className="mt-8 flex space-x-4">
            <button className="rounded-lg bg-white px-6 py-2 font-semibold text-black transition duration-300 hover:bg-gray-100">
              {language === "en"
                ? "Get Started"
                : translationData["Get Started"]}
            </button>
            <button
              onClick={navigateToContact}
              className="rounded-lg border-2 border-white px-6 py-2 font-semibold text-white transition duration-300 hover:bg-white hover:text-black"
            >
              {language === "en" ? "Contact Us" : translationData["Contact Us"]}
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-28 lg:py-32 xl:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-20">
          <div className="flex flex-wrap">
            {/* Left side content */}
            <div className="mb-8 w-full pr-8 lg:mb-0 lg:w-1/3">
              {/* Service Links */}
              <div className="mb-12">
                <h2 className="mb-6 text-4xl font-bold text-[#0d0e0d]">
                  Services
                </h2>
                <ul className="space-y-4">
                  {serviceTitle.map((service, index) => (
                    <li
                      key={index}
                      onClick={() => handleTitle(service.title)}
                      className={`cursor-pointer ${
                        title === service.title
                          ? "text-[#609641]"
                          : "text-gray-600"
                      } border-b-2 border-gray-200 pb-4 font-semibold`}
                      dangerouslySetInnerHTML={sanitizeHTML(
                        language === "zh"
                          ? translationData[service.title] || service.title // Use translationData for Chinese titles
                          : service.title // Default to original title
                      )}
                    />
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div className="rounded-lg bg-[#F3F3F3]">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="mb-8 w-full"
                >
                  <div className="relative h-[200px] w-full overflow-hidden rounded-lg">
                    <Image
                      src="/images/about/about-image.png"
                      alt=""
                      fill
                      className="border-none object-cover"
                    />
                    <Image
                      src="/images/about/about-image-dark.svg"
                      alt=""
                      fill
                      className="hidden object-cover dark:block"
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
                    {language === "en"
                      ? "Let's make things happen"
                      : translationData["Let's make things happen"]}
                  </h2>
                  <p className="text-body-color mx-auto mb-4 max-w-2xl p-4 text-sm font-medium leading-relaxed">
                    {language === "en"
                      ? "Contact us today to learn more about how our services can help your business grow sustainably and make a difference."
                      : translationData[
                          "Contact us today to learn more about how our services can help your business grow sustainably and make a difference."
                        ]}
                  </p>
                  <a
                    href="/contact"
                    className="mb-6 inline-flex items-center justify-center gap-2 rounded-xl bg-[#609641] px-6 py-2 font-medium text-white hover:opacity-90"
                  >
                    {language === "en"
                      ? "Contact Us"
                      : translationData["Contact Us"]}
                  </a>
                </motion.div>
              </div>
            </div>

            {/* Right side content */}
            <ServiceContent />
          </div>
        </div>
      </section>
    </>
  );
};

export default SeparateService;