// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import React, { useState, useEffect, useRef } from "react";
// import { createClient } from "@supabase/supabase-js";
// import { FaStar } from "react-icons/fa"; // Add this import
// import { supabase } from "../../supabase_config/supabaseClient";
// import { useSelector } from "react-redux";
// import { getTranslation } from "@/translator/translateToChinese";
// import DOMPurify from "dompurify";
// import Link from "next/link"; // {{ edit_1 }}
// import { useRouter } from "next/navigation";

// const About = () => {
//   const language = useSelector((state: any) => state.language.language);
//   const isInitialRender = useRef(true);
//   const [hasMounted, setHasMounted] = useState(false);
//   const [reviewDetails, setReviewDetails] = useState<any>([]);
//   const router = useRouter();
//   const [AboutDetails, setAboutDetails] = useState({
//     title: "",
//     bgimage: "",
//     abouttitle: "",
//     aboutheading: "",
//     aboutcontent: "",
//     aboutimage: "",
//     mvtitle: "",
//     mvheading: "",
//     mvcontent: "",
//     mvimage: "",
//     tctitle: "",
//     tcheading: "",
//     tccontent: "",
//     tcimage: "",
//     reviewheading: "",
//   });
//   const fetchReviewDetails = async () => {
//     const { data, error } = await supabase.from("about_review").select("*");
//     if (error) {
//       console.error("Error fetching about details:", error);
//     } else {
//       const reviewData = data;
//       data.forEach((review) => {
//         setReviewDetails((prev) => [
//           ...prev,
//           {
//             name: review.name,
//             designation: review.designation,
//             profile: review.profile_image,
//             comments: review.comments,
//             rating: review.rating,
//           },
//         ]);
//       });
//     }
//   };
//   const fetchAboutDetails = async () => {
//     const { data, error } = await supabase.from("about").select("*");
//     if (error) {
//       console.error("Error fetching about details:", error);
//     } else {
//       const AboutData = data[0]; // Assuming you only need the first row
//       setAboutDetails({
//         title: AboutData.title,
//         bgimage: AboutData.bg_image,
//         abouttitle: AboutData.about_title,
//         aboutheading: AboutData.about_heading,
//         // aboutheading: AboutData.about_heading,
//         aboutcontent: AboutData.about_content,
//         // aboutcontent: AboutData.about_content,
//         aboutimage: AboutData.about_image,
//         mvtitle: AboutData.mv_title,
//         mvheading: AboutData.mv_heading,
//         mvcontent: AboutData.mv_content,
//         mvimage: AboutData.mv_image,
//         tctitle: AboutData.tc_title,
//         tcheading: AboutData.tc_heading,
//         tccontent: AboutData.tc_content,
//         tcimage: AboutData.tc_image,
//         reviewheading: AboutData.review_heading,
//       });
//     }
//   };
//   useEffect(() => {
//     if (isInitialRender.current) {
//       fetchReviewDetails();
//       isInitialRender.current = false;
//       setHasMounted(true);
//     }
//   }, []);
//   useEffect(() => {
//     fetchAboutDetails();
//     setHasMounted(true);
//   }, []);

//   if (!hasMounted) {
//     return null;
//   }

//   const sanitizeHTML = (html: string) => {
//     return {
//       __html: DOMPurify.sanitize(html),
//     };
//   };

//   const navigateToContact = () => {
//     if (hasMounted) {
//       router.push("/contact");
//     }
//     // Change '/contact' to the desired route
//   };
//   return (
//     <>
//       {/* Existing section */}
//       <section className="relative -mt-14 overflow-hidden py-16 sm:-mt-10 sm:py-20 md:-mt-12 md:py-28 lg:-mt-14 lg:py-32 xl:-mt-14 xl:py-44">
//         {/* Background Image */}
//         <div className="absolute inset-0 z-0">
//           {AboutDetails.bgimage && (
//             <Image
//               src={AboutDetails.bgimage}
//               alt="Supply Chain Mapping"
//               layout="fill"
//               style={{ objectFit: "cover" }}
//               quality={100}
//             />
//           )}

//           <div className="absolute inset-0 bg-black opacity-70"></div>
//         </div>

//         <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-30">
//           <div className="flex items-start gap-6 px-5">
//             <Image
//               src="/images/about/line.png"
//               alt="Line"
//               width={14}
//               height={40}
//               className="-ml-16 mt-5 lg:mt-19"
//             />
//             <div>
//               <h1
//                 className="mb-4 text-4xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl"
//                 dangerouslySetInnerHTML={sanitizeHTML(AboutDetails.title)}
//               ></h1>
//             </div>
//           </div>
//           <div className="mt-3 flex space-x-4 md:mt-8">
//             <button className="rounded-xl bg-white px-6 py-2 font-semibold text-black transition duration-300 hover:bg-gray-100">
//               Get Started
//             </button>
//             <button
//               onClick={navigateToContact}
//               className="rounded-xl border-2 border-white px-6 py-2 font-semibold text-white transition duration-300 hover:bg-white hover:text-black"
//             >
//               Contact Us
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* New section */}
//       <section className="py-16 sm:py-20 md:py-28 lg:py-32 xl:py-20">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-20">
//           <div className="flex flex-col items-center gap-12 lg:flex-row">
//             {/* Left side - Image */}
//             <div className="lg:w-1/2">
//               <Image
//                 src="/images/about/story.png"
//                 alt="Our Story"
//                 width={600}
//                 height={400}
//               />
//             </div>

//             {/* Right side - Content */}
//             <div className="lg:w-1/2">
//               <div className="mb-4 flex items-center gap-2">
//                 {AboutDetails.aboutimage && (
//                   <Image
//                     src={AboutDetails.aboutimage}
//                     alt="About Us Logo"
//                     width={24}
//                     height={24}
//                   />
//                 )}

//                 <span
//                   className="mr-2 text-lg text-[#4d4d4b]"
//                   dangerouslySetInnerHTML={sanitizeHTML(
//                     AboutDetails.abouttitle,
//                   )}
//                 ></span>
//               </div>
//               <h2
//                 className="mb-6 text-3xl font-bold text-black sm:text-6xl"
//                 dangerouslySetInnerHTML={sanitizeHTML(
//                   AboutDetails.aboutheading,
//                 )}
//               ></h2>
//               <p
//                 className="mb-8 text-lg text-black"
//                 dangerouslySetInnerHTML={sanitizeHTML(
//                   AboutDetails.aboutcontent,
//                 )}
//               ></p>
//               <button className="rounded-xl bg-[#609641] px-6 py-2 font-semibold text-white transition duration-300 hover:bg-[#4d7a33]">
//                 Learn More
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* New Mission & Vision section */}
//       <section className="py-16 sm:py-20 md:py-28 lg:py-32 xl:py-20">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-20">
//           <div className="flex flex-col items-center gap-16 lg:flex-row">
//             {/* Left side - Content */}
//             <div className="lg:w-1/2">
//               <div className="mb-4 flex items-center gap-2">
//                 {AboutDetails.mvimage && (
//                   <Image
//                     src={AboutDetails.mvimage}
//                     alt="About Us Logo"
//                     width={24}
//                     height={24}
//                   />
//                 )}

//                 <span
//                   className="text-lg text-[#4d4d4b]"
//                   dangerouslySetInnerHTML={sanitizeHTML(AboutDetails.mvtitle)}
//                 ></span>
//               </div>

//               <h3
//                 className="mb-12 text-3xl font-bold text-black sm:text-6xl"
//                 dangerouslySetInnerHTML={sanitizeHTML(AboutDetails.mvheading)}
//               ></h3>
//               <p
//                 className="mb-8 rounded-l-md border-l-4 border-[#609641] pl-6 text-lg text-black"
//                 dangerouslySetInnerHTML={sanitizeHTML(AboutDetails.mvcontent)}
//               ></p>
//               <div className="mt-12 w-full border-b-2 border-gray-300"></div>
//             </div>

//             {/* Right side - Image */}
//             <div className="lg:w-1/2">
//               <Image
//                 src="/images/about/feature.png"
//                 alt="Nature"
//                 width={600}
//                 height={400}
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* New Allies section */}
//       <section className="py-16 sm:py-20 md:py-28 lg:py-32 xl:py-20">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-20">
//           <div className="flex flex-col items-center gap-12 lg:flex-row">
//             {/* Left side - Image */}
//             <div className="lg:w-1/2">
//               <Image
//                 src="/images/about/allies.png"
//                 alt="Allies in Sustainable Fashion"
//                 width={500}
//                 height={333}
//                 className="rounded-lg shadow-lg"
//               />
//             </div>

//             {/* Right side - Content */}
//             <div className="lg:w-1/2">
//               <div className="mb-4 flex items-center gap-2">
//                 {AboutDetails.tcimage && (
//                   <Image
//                     src={AboutDetails.tcimage}
//                     alt="About Us Logo"
//                     width={24}
//                     height={24}
//                   />
//                 )}

//                 <span
//                   className="mr-2 text-lg  text-[#4d4d4b]"
//                   dangerouslySetInnerHTML={sanitizeHTML(AboutDetails.tctitle)}
//                 ></span>
//               </div>
//               <h2
//                 className="mb-6 text-3xl font-bold text-black sm:text-5xl"
//                 dangerouslySetInnerHTML={sanitizeHTML(AboutDetails.tcheading)}
//               ></h2>
//               <p
//                 className="mb-8 text-lg text-black"
//                 dangerouslySetInnerHTML={sanitizeHTML(AboutDetails.tccontent)}
//               ></p>
//               <Link href="/teams">
//                 <button className="rounded-xl bg-[#609641] px-6 py-2 font-semibold text-white transition duration-300 hover:bg-[#4d7a33]">
//                   Learn More
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="py-16 sm:py-20 md:py-28 lg:py-32 xl:py-20">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <h2
//             className="mb-12 text-center text-3xl font-bold text-black sm:text-4xl"
//             dangerouslySetInnerHTML={sanitizeHTML(AboutDetails.reviewheading)}
//           ></h2>

//           <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
//             {reviewDetails.map((client, index) => (
//               <div
//                 key={index}
//                 className={`group flex flex-col items-center rounded-xl p-6 text-center shadow-md transition-colors duration-300 hover:!text-white
//                   ${
//                     index === 1
//                       ? "bg-[#003F2E] text-white"
//                       : "bg-white hover:bg-[#003F2E] hover:text-white"
//                   }`}
//               >
//                 <div className="mb-4 flex justify-center">
//                   {[...Array(client.rating)].map((_, i) => (
//                     <FaStar key={i} className="mx-0.5 text-yellow-400" />
//                   ))}
//                 </div>
//                 <p
//                   className={`mb-6 ${
//                     index === 1 ? "text-white" : "text-gray-700 "
//                   } group-hover:!text-white`}
//                   dangerouslySetInnerHTML={sanitizeHTML(client.comments)}
//                 ></p>
//                 <div className="flex items-center">
//                   {client.profile && (
//                     <Image
//                       src={client.profile}
//                       alt={`${client.name} Profile`}
//                       width={50}
//                       height={50}
//                       className="mr-4 rounded-full"
//                     />
//                   )}

//                   <div className="text-left">
//                     <p
//                       className="font-semibold"
//                       dangerouslySetInnerHTML={sanitizeHTML(client.name)}
//                     ></p>
//                     <p
//                       className={`text-sm ${
//                         index === 1
//                           ? "text-gray-300"
//                           : "text-gray-500 hover:!text-gray-300"
//                       }`}
//                       dangerouslySetInnerHTML={sanitizeHTML(client.designation)}
//                     ></p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default About;

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
        title: language === 'en' ? AboutData.title : "推動整個時尚產業的環境責任和道德實踐。",
        bgimage: AboutData.bg_image,
        abouttitle: language === 'en' ? AboutData.about_title : "關於我們",
        aboutheading: language === 'en' ? AboutData.about_heading : "我們的故事",
        aboutcontent: language === 'en' ? AboutData.about_content : "Ecofash Services 成立於 2020 年，致力於徹底變革時尚產業，將永續發展和道德置於我們使命的最前沿。最初是一個由熱情和變革願景驅動的小舉措，很快就發展成為永續時尚的先鋒力量。我們的旅程始於一些敬業的人士，他們意識到迫切需要解決傳統時尚實踐對環境和社會的影響。",
        aboutimage: AboutData.about_image,
        mvtitle: language === 'en' ? AboutData.mv_title : "我們的使命和願景",
        mvheading: language === 'en' ? AboutData.mv_heading : "我們的使命和願景",
        mvcontent: language === 'en' ? AboutData.mv_content : "在 Ecofash Services，我們致力於透過將永續發展和道德作為標準來改變時尚產業。我們的使命是幫助品牌減少對環境的影響，並在每一步中承擔社會責任。我們展望未來，永續時尚將為人類和地球帶來正面的改變。",
        mvimage: AboutData.mv_image,
        tctitle: language === 'en' ? AboutData.tc_title : "我們的團隊",
        tcheading: language === 'en' ? AboutData.tc_heading : "我們的團隊",
        tccontent: language === 'en' ? AboutData.tc_content : "Ecofash Services 由永續發展專家、供應鏈分析師和時尚資深人士推動。我們幫助品牌轉變其營運方式，使其更具永續性和社會責任感，塑造時尚更美好的未來。",
        tcimage: AboutData.tc_image,
        reviewheading: language === 'en' ? AboutData.review_heading : "了解我們的客戶認為",
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
      <section className="relative -mt-14 overflow-hidden py-16 sm:-mt-10 sm:py-20 md:-mt-12 md:py-28 lg:-mt-14 lg:py-32 xl:-mt-14 xl:py-44">
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
            <button className="rounded-xl bg-white px-6 py-2 font-semibold text-black transition duration-300 hover:bg-gray-100">
              {language === 'en' ? 'Get Started' : '開始使用'}
            </button>
            <button
              onClick={navigateToContact}
              className="rounded-xl border-2 border-white px-6 py-2 font-semibold text-white transition duration-300 hover:bg-white hover:text-black"
            >
              {language === 'en' ? 'Contact Us' : '聯絡我們'}
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-28 lg:py-32 xl:py-20">
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
                {AboutDetails.aboutimage && (
                  <Image
                    src={AboutDetails.aboutimage}
                    alt="About Us Logo"
                    width={24}
                    height={24}
                  />
                )}

                <span
                  className="mr-2 text-lg text-[#4d4d4b]"
                  dangerouslySetInnerHTML={sanitizeHTML(
                    AboutDetails.abouttitle,
                  )}
                ></span>
              </div>
              <h2
                className="mb-6 text-3xl font-bold text-black sm:text-6xl"
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
              <button className="rounded-xl bg-[#609641] px-6 py-2 font-semibold text-white transition duration-300 hover:bg-[#4d7a33]">
                {language === 'en' ? 'Learn More' : '了解更多'}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-28 lg:py-32 xl:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <div className="flex flex-col items-center gap-16 lg:flex-row">
            <div className="lg:w-1/2">
              <div className="mb-4 flex items-center gap-2">
                {AboutDetails.mvimage && (
                  <Image
                    src={AboutDetails.mvimage}
                    alt="About Us Logo"
                    width={24}
                    height={24}
                  />
                )}

                <span
                  className="text-lg text-[#4d4d4b]"
                  dangerouslySetInnerHTML={sanitizeHTML(AboutDetails.mvtitle)}
                ></span>
              </div>

              <h3
                className="mb-12 text-3xl font-bold text-black sm:text-6xl"
                dangerouslySetInnerHTML={sanitizeHTML(AboutDetails.mvheading)}
              ></h3>
              <p
                className="mb-8 rounded-l-md border-l-4 border-[#609641] pl-6 text-lg text-black"
                dangerouslySetInnerHTML={sanitizeHTML(AboutDetails.mvcontent)}
              ></p>
              <div className="mt-12 w-full border-b-2 border-gray-300"></div>
            </div>

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

      <section className="py-16 sm:py-20 md:py-28 lg:py-32 xl:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <div className="flex flex-col items-center gap-12 lg:flex-row">
            <div className="lg:w-1/2">
              <Image
                src="/images/about/allies.png"
                alt="Allies in Sustainable Fashion"
                width={500}
                height={333}
                className="rounded-lg shadow-lg"
              />
            </div>

            <div className="lg:w-1/2">
              <div className="mb-4 flex items-center gap-2">
                {AboutDetails.tcimage && (
                  <Image
                    src={AboutDetails.tcimage}
                    alt="About Us Logo"
                    width={24}
                    height={24}
                  />
                )}

                <span
                  className="mr-2 text-lg  text-[#4d4d4b]"
                  dangerouslySetInnerHTML={sanitizeHTML(AboutDetails.tctitle)}
                ></span>
              </div>
              <h2
                className="mb-6 text-3xl font-bold text-black sm:text-5xl"
                dangerouslySetInnerHTML={sanitizeHTML(AboutDetails.tcheading)}
              ></h2>
              <p
                className="mb-8 text-lg text-black"
                dangerouslySetInnerHTML={sanitizeHTML(AboutDetails.tccontent)}
              ></p>
              <Link href="/teams">
                <button className="rounded-xl bg-[#609641] px-6 py-2 font-semibold text-white transition duration-300 hover:bg-[#4d7a33]">
                  {language === 'en' ? 'Learn More' : '了解更多'}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-28 lg:py-32 xl:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="mb-12 text-center text-3xl font-bold text-black sm:text-4xl"
            dangerouslySetInnerHTML={sanitizeHTML(AboutDetails.reviewheading)}
          ></h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {reviewDetails.map((client, index) => (
              <div
                key={index}
                className={`group flex flex-col items-center rounded-xl p-6 text-center shadow-md transition-colors duration-300 hover:!text-white
                  ${
                    index === 1
                      ? "bg-[#003F2E] text-white"
                      : "bg-white hover:bg-[#003F2E] hover:text-white"
                  }`}
              >
                <div className="mb-4 flex justify-center">
                  {[...Array(client.rating)].map((_, i) => (
                    <FaStar key={i} className="mx-0.5 text-yellow-400" />
                  ))}
                </div>
                <p
                  className={`mb-6 ${
                    index === 1 ? "text-white" : "text-gray-700 "
                  } group-hover:!text-white`}
                  dangerouslySetInnerHTML={sanitizeHTML(client.comments)}
                ></p>
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
                    <p
                      className="font-semibold"
                      dangerouslySetInnerHTML={sanitizeHTML(client.name)}
                    ></p>
                    <p
                      className={`text-sm ${
                        index === 1
                          ? "text-gray-300"
                          : "text-gray-500 hover:!text-gray-300"
                      }`}
                      dangerouslySetInnerHTML={sanitizeHTML(client.designation)}
                    ></p>
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
export default About;