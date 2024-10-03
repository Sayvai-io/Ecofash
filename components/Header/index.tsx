"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = ({ setLanguage }) => { // Accept setLanguage as a prop
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const pathUrl = usePathname();

  // Sticky menu
  const handleStickyMenu = () => {
    setStickyMenu(window.scrollY >= 80);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
    return () => {
      window.removeEventListener("scroll", handleStickyMenu);
    };
  }, []);

  const handleMakeACallClick = () => {
    const makeACallSection = document.getElementById("makeACallSection");
    if (makeACallSection) {
      makeACallSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLinkClick = () => {
    setNavigationOpen(false);
  };

  const handleCombinedClick = () => {
    handleMakeACallClick(); // Call the first function without arguments
    handleLinkClick(); // Call the second function without arguments
  };

  return (
    <header
      className={`fixed left-0 top-0 z-[100] w-full bg-white py-4 ${
        stickyMenu ? "!py-4 shadow transition duration-100 dark:bg-black" : ""
      }`}
    >
      <div className="relative mx-auto max-w-c-1390 items-center justify-between px-4 md:px-8 xl:flex 2xl:px-0">
        <div className="flex w-full items-center justify-between xl:w-1/3 xl:pl-8">
          <a href="/" className="pl-4">
            <Image
              src="/images/logo/logo.png"
              alt="logo"
              width={80} // {{ edit_1 }}
              height={20} // {{ edit_2 }}
              className="hidden w-full dark:block"
            />
            <Image
              src="/images/logo/logo.png"
              alt="logo"
              width={80} // {{ edit_1 }}
              height={20} // {{ edit_2 }}
              className="w-full dark:hidden"
            />
          </a>

          {/* Hamburger Toggle BTN */}
          <button
            aria-label="hamburger Toggler"
            className="block xl:hidden"
            onClick={() => setNavigationOpen(!navigationOpen)}
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="absolute right-0 block h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "!w-full delay-300" : "w-0"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "delay-400 !w-full" : "w-0"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "!w-full delay-500" : "w-0"
                  }`}
                ></span>
              </span>
              <span className="du-block absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "!h-0 delay-[0]" : "h-full"
                  }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "!h-0 delay-200" : "h-0.5"
                  }`}
                ></span>
              </span>
            </span>
          </button>
          {/* Hamburger Toggle BTN */}
        </div>

        {/* Nav Menu Start */}
        <div
          className={`invisible h-0 w-full items-center justify-between xl:visible xl:flex xl:h-auto xl:w-full ${
            navigationOpen &&
            "navbar !visible mt-4 h-auto max-h-[400px] rounded-md bg-white p-7.5 shadow-solid-5 dark:bg-blacksection xl:h-auto xl:p-0 xl:shadow-none xl:dark:bg-transparent"
          }`}
        >
          <nav>
            <ul className="flex flex-col gap-5 xl:flex-row xl:items-center xl:gap-10">
              {menuData.map((menuItem, key) => (
                <li
                  key={key}
                  className={menuItem.submenu ? "group relative" : ""}
                >
                  {menuItem.submenu ? (
                    <>
                      <button
                        onClick={() => setDropdownToggler(!dropdownToggler)}
                        className="flex cursor-pointer items-center justify-between gap-3 font-semibold hover:text-[#609641]"
                      >
                        {menuItem.title}
                        <span>
                          <svg
                            className="h-3 w-3 cursor-pointer fill-waterloo group-hover:fill-[#609641]"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                          </svg>
                        </span>
                      </button>

                      <ul
                        className={`dropdown ${dropdownToggler ? "flex" : ""}`}
                      >
                        {menuItem.submenu.map((item, key) => (
                          <li
                            key={key}
                            className="hover:text-[#609641]"
                            onClick={handleLinkClick}
                          >
                            <Link
                              href={item.path || "#"}
                              className="font-semibold"
                            >
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      href={`${menuItem.path}`}
                      className={`font-bold ${
                        pathUrl === menuItem.path
                          ? "text-[#609641] hover:text-[#609641]"
                          : "hover:text-[#609641]"
                      }`}
                      onClick={handleLinkClick}
                    >
                      {menuItem.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-7 flex flex-col gap-4 xl:mt-0 xl:flex-row">
            <div className="relative">
              <button
                className="flex items-center text-regular font-semibold text-waterloo hover:text-[#609641] mt-2"
                onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                aria-expanded={languageDropdownOpen} // Accessibility enhancement
              >
                <svg
                  className="mr-2 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Language
                <svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <ul
                className={`absolute left-0 mt-2 w-40 rounded-md border border-gray-200 bg-white shadow-lg ${
                  languageDropdownOpen ? "block" : "hidden"
                }`}
              >
                <li
                  className="px-4 py-2 text-black hover:bg-gray-100"
                  onClick={() => {
                    setLanguage("en");
                    setLanguageDropdownOpen(false);
                    
                  }}
                >
                  <Link href="#" 
                  className="block text-sm font-semibold"
                  onClick={handleLinkClick}>
                    English
                  </Link>
                </li>
                <li
                  className="px-4 py-2 text-black hover:bg-gray-100"
                  onClick={() => {
                    setLanguage("zh");
                    setLanguageDropdownOpen(false);
                  }}
                >
                  <Link href="#" 
                  className="block text-sm font-semibold"
                  onClick={handleLinkClick}>
                    中文
                  </Link>
                </li>
              </ul>
            </div>

            <Link
              href="/#makeACallSection"
              onClick={handleCombinedClick} // Use the combined function
              className="flex items-start justify-center rounded-full bg-[#609641] px-4 py-2 text-regular font-semibold text-white duration-300 ease-in-out hover:bg-[#609641] md:px-5.5"
            >
              Request a Call
            </Link>

            <button
              aria-label="Search"
              className="text-waterloo transition-colors duration-300 hover:text-[#609641]"
              onClick={handleLinkClick}
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            {/* <ThemeToggler /> */}
          </div>
        </div>
        {/* Nav Menu End */}
      </div>
    </header>
  );
};

export default Header;