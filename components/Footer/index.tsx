"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {

  
  return (
    <>
      <footer className="border-t border-stroke bg-[#131312] dark:border-strokedark dark:bg-blacksection">
        <div className="mx-auto max-w-full px-4 md:max-w-c-1390 md:px-20 2xl:px-0">
          {/* <!-- Footer Top --> */}
          <div className="pb-10 pt-20 lg:pt-25">
            <div className="mb-4 flex flex-col items-center gap-8 md:flex-row md:justify-center lg:justify-center lg:gap-0">
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="animate_top flex w-full flex-col items-center md:w-1/4"
              >
                <a href="/" className="relative">
                  <Image
                    width={180}
                    height={135}
                    src="/images/logo/logo.png"
                    alt="Logo"
                    className="dark:hidden"
                  />
                  <Image
                    width={120}
                    height={90}
                    src="/images/logo/logo.png"
                    alt="Logo"
                    className="hidden dark:block"
                  />
                </a>
                <p className="mb-6 mt-10 text-xl text-white text-center">
                  Get the freshest news
                  <br />
                  <span className="text-xl text-white">on sustainability</span>
                </p>
                <button className="justify-center rounded-full bg-green-500 px-8 py-2 text-white transition-all duration-300 hover:bg-green-600">
                  Subscribe
                </button>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                  <ul className="flex justify-center gap-5 p-8 md:justify-start">
                    <li>
                      <a href="#" aria-label="social icon">
                        <div className="rounded-full border-2 border-white p-2 transition-all duration-300 hover:border-green-500 hover:bg-green-500">
                          <svg
                            className="fill-current text-white transition-all duration-300 group-hover:text-green-500"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_48_1502)">
                              <path d="M22.162 5.65593C21.3985 5.99362 20.589 6.2154 19.76 6.31393C20.6337 5.79136 21.2877 4.96894 21.6 3.99993C20.78 4.48793 19.881 4.82993 18.944 5.01493C18.3146 4.34151 17.4803 3.89489 16.5709 3.74451C15.6615 3.59413 14.7279 3.74842 13.9153 4.18338C13.1026 4.61834 12.4564 5.30961 12.0771 6.14972C11.6978 6.98983 11.6067 7.93171 11.818 8.82893C10.1551 8.74558 8.52832 8.31345 7.04328 7.56059C5.55823 6.80773 4.24812 5.75098 3.19799 4.45893C2.82628 5.09738 2.63095 5.82315 2.63199 6.56193C2.63199 8.01193 3.36999 9.29293 4.49199 10.0429C3.828 10.022 3.17862 9.84271 2.59799 9.51993V9.57193C2.59819 10.5376 2.93236 11.4735 3.54384 12.221C4.15532 12.9684 5.00647 13.4814 5.95299 13.6729C5.33661 13.84 4.6903 13.8646 4.06299 13.7449C4.32986 14.5762 4.85 15.3031 5.55058 15.824C6.25117 16.345 7.09712 16.6337 7.96999 16.6499C7.10247 17.3313 6.10917 17.8349 5.04687 18.1321C3.98458 18.4293 2.87412 18.5142 1.77899 18.3819C3.69069 19.6114 5.91609 20.2641 8.18899 20.2619C15.882 20.2619 20.089 13.8889 20.089 8.36193C20.089 8.18193 20.084 7.99993 20.076 7.82193C20.8949 7.2301 21.6016 6.49695 22.163 5.65693L22.162 5.65593Z" />
                            </g>
                            <defs>
                              <clipPath id="clip0_48_1502">
                                <rect width="24" height="24" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" aria-label="social icon">
                        <div className="rounded-full border-2 border-white p-2 transition-all duration-300 hover:border-green-500 hover:bg-green-500">
                          <svg
                            className="fill-current text-white transition-all duration-300 group-hover:text-green-500"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_48_1499)">
                              <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z" />
                            </g>
                            <defs>
                              <clipPath id="clip0_48_1499">
                                <rect width="24" height="24" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" aria-label="social icon">
                        <div className="rounded-full border-2 border-white p-2 transition-all duration-300 hover:border-green-500 hover:bg-green-500">
                          <svg
                            className="fill-current text-white transition-all duration-300 group-hover:text-green-500"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_48_1505)">
                              <path d="M6.94 5.00002C6.93974 5.53046 6.72877 6.03906 6.35351 6.41394C5.97825 6.78883 5.46944 6.99929 4.939 6.99902C4.40857 6.99876 3.89997 6.78779 3.52508 6.41253C3.1502 6.03727 2.93974 5.52846 2.94 4.99802C2.94027 4.46759 3.15124 3.95899 3.5265 3.5841C3.90176 3.20922 4.41057 2.99876 4.941 2.99902C5.47144 2.99929 5.98004 3.21026 6.35492 3.58552C6.72981 3.96078 6.94027 4.46959 6.94 5.00002ZM7 8.48002H3V21H7V8.48002ZM13.32 8.48002H9.34V21H13.28V14.43C13.28 10.77 18.05 10.43 18.05 14.43V21H22V13.07C22 6.90002 14.94 7.13002 13.28 10.16L13.32 8.48002Z" />
                            </g>
                            <defs>
                              <clipPath id="clip0_48_1505">
                                <rect width="24" height="24" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                      </a>
                    </li>
                  </ul>
                </motion.div>
              </motion.div>

              <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3 pl-4 md:pl-30"> {/* Adjusted gap and padding for mobile */}
                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top flex flex-col items-center" // Centered for mobile
                >
                  <h4 className="mb-4 text-itemtitle2 font-medium text-white dark:text-white text-center"> {/* Reduced margin */}
                    Content
                  </h4>

                  <ul className="space-y-4 text-center md:text-left"> {/* Centered text for mobile */}
                    <li>
                      <a
                        href="/home"
                        className="inline-block text-gray-300 transition-colors duration-300 hover:text-[#609641]"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="/about"
                        className="inline-block text-gray-300 transition-colors duration-300 hover:text-[#609641]"
                      >
                        About us
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services"
                        className="inline-block text-gray-300 transition-colors duration-300 hover:text-[#609641]"
                      >
                        Services
                      </a>
                    </li>
                    <li>
                      <a
                        href="/blog"
                        className="inline-block text-gray-300 transition-colors duration-300 hover:text-[#609641]"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        href="/contact"
                        className="inline-block text-gray-300 transition-colors duration-300 hover:text-[#609641]"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top flex flex-col items-center" // Centered for mobile
                >
                  <h4 className="mb-4 md:mt-0 mt-8 text-itemtitle2 font-medium text-white dark:text-white text-center"> {/* Reduced margin */}
                    Resource
                  </h4>

                  <ul className="space-y-4 text-center md:text-left"> {/* Centered text for mobile */}
                    <li>
                      <a
                        href="#"
                        className="inline-block text-gray-300 transition-colors duration-300 hover:text-[#609641]"
                      >
                        Sustainability
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="inline-block text-gray-300 transition-colors duration-300 hover:text-[#609641]"
                      >
                        Fashion
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="inline-block text-gray-300 transition-colors duration-300 hover:text-[#609641]"
                      >
                        Ecology
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="inline-block text-gray-300 transition-colors duration-300 hover:text-[#609641]"
                      >
                        Recycle
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="inline-block text-gray-300 transition-colors duration-300 hover:text-[#609641]"
                      >
                        Support
                      </a>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top flex flex-col items-center" // Centered for mobile
                >
                  <h4 className="mb-4 md:mt-0 mt-8 text-itemtitle2 font-medium text-white dark:text-white text-center"> {/* Reduced margin */}
                    Socials
                  </h4>

                  <ul className="space-y-4 text-center md:text-left"> {/* Centered text for mobile */}
                    <li>
                      <a
                        href="#"
                        className="inline-block text-gray-300 transition-colors duration-300 hover:text-[#609641]"
                      >
                        Youtube
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="inline-block text-gray-300 transition-colors duration-300 hover:text-[#609641]"
                      >
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="inline-block text-gray-300 transition-colors duration-300 hover:text-[#609641]"
                      >
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="inline-block text-gray-300 transition-colors duration-300 hover:text-[#609641]"
                      >
                        Twitter
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="inline-block text-gray-300 transition-colors duration-300 hover:text-[#609641]"
                      >
                        Linkedin
                      </a>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
          {/* <!-- Footer Top --> */}

          {/* <!-- Footer Bottom --> */}
          <div className="flex flex-col items-center justify-center gap-5 border-t border-stroke py-7 dark:border-strokedark lg:gap-0">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              {/* Add any content here */}
            </motion.div>
            <a href="/privacy" className="mb-2  transition duration-300 hover:underline"> {/* Added link to privacy center */}
              Privacy
            </a>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              
              <p className="text-center">
                &copy; {new Date().getFullYear()} Ecofash. All rights reserved
              </p>
            </motion.div>
          </div>

          {/* <!-- Footer Bottom --> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;