// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import React, { useState, useEffect } from "react";
// import { createClient } from "@supabase/supabase-js";
// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
// );
// const Hero = () => {
//   const [hasMounted, setHasMounted] = useState(false);

//   const [HeroDetails, setHeroDetails] = useState({
//     heading: "",
//     headcontent: "",
//     headimage: "",
//   });

//   const fetchHeroDetails = async () => {
//     const { data, error } = await supabase.from("home").select("*");
//     if (error) {
//       console.error("Error fetching Hero details:", error);
//     } else {
//       const HeroData = data[0]; // Assuming you only need the first row
//       setHeroDetails({
//         heading: HeroData.heading,
//         headcontent: HeroData.head_content,
//         headimage: HeroData.head_image,
//       });
//     }
//   };

//   useEffect(() => {
//     fetchHeroDetails();
//     setHasMounted(true);
//   }, []);

//   if (!hasMounted) {
//     return null;
//   }

//   return (
//     <>
//       <section className="relative overflow-hidden py-16 sm:py-20 md:py-28 lg:py-32 xl:py-36">
//         {/* Background Image */}
//         <div className="absolute inset-0 z-0">
//           {HeroDetails?.headimage && (
//             <Image
//               src={HeroDetails.headimage}
//               alt="Hero Background"
//               fill
//               style={{ objectFit: "cover" }}
//               quality={100}
//             />
//           )}
//           {/* Overlay for better text visibility */}
//           <div className="absolute inset-0 bg-black opacity-50"></div>
//         </div>

//         <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="flex min-h-[70vh] items-center">
//             <div className="w-full">
//               <div className="mx-auto max-w-3xl">
//                 {/* Left side content */}
//                 <div className="absolute left-40 top-64 hidden lg:block">
//                   <Image
//                     src="/images/hero/star.png"
//                     alt="Star"
//                     width={48}
//                     height={48}
//                     className="-ml-10 mb-10"
//                   />
//                   <Image
//                     src="/images/hero/roundframe1.png"
//                     alt="Rounded Frame 1"
//                     width={80}
//                     height={80}
//                     className="-ml-1"
//                   />
//                 </div>

//                 {/* Right side content */}
//                 <div className="absolute right-40 top-60 hidden lg:block">
//                   <Image
//                     src="/images/hero/roundframe2.png"
//                     alt="Rounded Frame 3"
//                     width={68}
//                     height={68}
//                     className="mb-6  ml-10"
//                   />
//                   <Image
//                     src="/images/hero/roundframe3.png"
//                     alt="Rounded Frame 4"
//                     width={80}
//                     height={80}
//                     className="-ml-10"
//                   />
//                 </div>

//                 <div className="mb-4 text-center sm:mb-5">
//                   <h1 className="text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
//                     {HeroDetails.heading}
//                   </h1>
//                 </div>

//                 <div className="mb-6 text-center sm:mb-8 md:mb-10">
//                   <p className="px-4 text-xs text-white sm:px-0 sm:text-sm md:text-base lg:text-lg">
//                     {HeroDetails.headcontent}{" "}
//                   </p>
//                 </div>

//                 <div className="flex flex-col items-center">
//                   <div className="mt-6 sm:mt-8 md:mt-10">
//                     <div className="flex items-center">
//                       <button
//                         aria-label="get started button"
//                         className="flex rounded-full bg-white px-6 py-2 text-sm text-black duration-300 ease-in-out sm:px-5.5 sm:py-2.5 sm:text-base"
//                       >
//                         Get Started
//                       </button>
//                       <button
//                         aria-label="up-right arrow button"
//                         className="-ml-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#609641] text-white duration-300 ease-in-out sm:-ml-4 sm:h-11 sm:w-11"
//                       >
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           viewBox="0 0 24 24"
//                           fill="currentColor"
//                           className="h-5 w-5"
//                         >
//                           <path
//                             fillRule="evenodd"
//                             d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z"
//                             clipRule="evenodd"
//                           />
//                         </svg>
//                       </button>
//                     </div>
//                   </div>

//                   <div className="relative w-full">
//                     <div className="absolute -top-8 right-0 sm:right-10 md:right-20 lg:right-50">
//                       <Image
//                         src="/images/hero/dot-arrow.png"
//                         alt="Dot Arrow"
//                         width={100}
//                         height={100}
//                         className="h-auto w-auto max-w-[60px] sm:max-w-[80px] md:max-w-[100px]"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Hero;
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { supabase } from "../../supabase_config/supabaseClient";
import { useSelector } from "react-redux";
import { getTranslation } from "../../translator/translateToChinese";

const Hero = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const language = useSelector((state) => state.language.language);
  const [HeroDetails, setHeroDetails] = useState({
    heading: "",
    headcontent: "",
    headimage: "",
  });

  const fetchHeroDetails = async () => {
    const { data, error } = await supabase.from("home").select("*");
    if (error) {
      console.error("Error fetching Hero details:", error);
    } else {
      const HeroData = data[0]; // Assuming you only need the first row
      setHeroDetails({
        heading:
          language === "en"
            ? HeroData.heading
            : getTranslation(HeroData.heading),
        headcontent: HeroData.head_content,
        headimage: HeroData.head_image,
      });
    }
  };

  useEffect(() => {
    fetchHeroDetails(); // Fetch details only for English

    setHasMounted(true);
  }, [language]); // Dependency on language

  if (!hasMounted) {
    return null;
  }

  // Conditional rendering based on language
  const displayContent = {
    heading: HeroDetails.heading,
    content: HeroDetails.headcontent,
  };

  return (
    <>
      <section className="relative overflow-hidden py-16 sm:py-20 md:py-28 lg:py-32 xl:py-36">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          {HeroDetails?.headimage && (
            <Image
              src={HeroDetails.headimage}
              alt="Hero Background"
              fill
              style={{ objectFit: "cover" }}
              quality={100}
            />
          )}
          {/* Overlay for better text visibility */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex min-h-[70vh] items-center">
            <div className="w-full">
              <div className="mx-auto max-w-3xl">
                {/* Left side content */}
                <div className="absolute left-40 top-64 hidden lg:block">
                  <Image
                    src="/images/hero/star.png"
                    alt="Star"
                    width={48}
                    height={48}
                    className="-ml-10 mb-10"
                  />
                  <Image
                    src="/images/hero/roundframe1.png"
                    alt="Rounded Frame 1"
                    width={80}
                    height={80}
                    className="-ml-1"
                  />
                </div>

                {/* Right side content */}
                <div className="absolute right-40 top-60 hidden lg:block">
                  <Image
                    src="/images/hero/roundframe2.png"
                    alt="Rounded Frame 3"
                    width={68}
                    height={68}
                    className="mb-6  ml-10"
                  />
                  <Image
                    src="/images/hero/roundframe3.png"
                    alt="Rounded Frame 4"
                    width={80}
                    height={80}
                    className="-ml-10"
                  />
                </div>

                <div className="mb-4 text-center sm:mb-5">
                  <h1 className="text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
                    {displayContent.heading}{" "}
                    {/* Updated to use displayContent */}
                  </h1>
                </div>

                <div className="mb-6 text-center sm:mb-8 md:mb-10">
                  <p className="px-4 text-xs text-white sm:px-0 sm:text-sm md:text-base lg:text-lg">
                    {displayContent.content}{" "}
                    {/* Updated to use displayContent */}
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="mt-6 sm:mt-8 md:mt-10">
                    <div className="flex items-center">
                      <button
                        aria-label="get started button"
                        className="flex rounded-full bg-white px-6 py-2 text-sm text-black duration-300 ease-in-out sm:px-5.5 sm:py-2.5 sm:text-base"
                      >
                        Get Started
                      </button>
                      <button
                        aria-label="up-right arrow button"
                        className="-ml-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#609641] text-white duration-300 ease-in-out sm:-ml-4 sm:h-11 sm:w-11"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5 w-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="relative w-full">
                    <div className="absolute -top-8 right-0 sm:right-10 md:right-20 lg:right-50">
                      <Image
                        src="/images/hero/dot-arrow.png"
                        alt="Dot Arrow"
                        width={100}
                        height={100}
                        className="h-auto w-auto max-w-[60px] sm:max-w-[80px] md:max-w-[100px]"
                      />
                    </div>
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

export default Hero;
