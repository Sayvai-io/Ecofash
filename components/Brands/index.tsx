"use client";
import React from "react";
import Slider from "react-slick";
import SingleWord from "./SingleWord";
import wordData from "./wordData";
import { FaSun } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Brands = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    let: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="border border-x-0 border-y-stroke bg-[#003F2E] py-3 dark:border-y-strokedark dark:bg-black">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <Slider {...settings}>
          {wordData.map((word, index) => (
            <div key={index} className="flex items-center justify-center">
              <div className=" flex w-full items-center justify-between px-4">
                <SingleWord
                  word={word}
                  color="#e8ffb1"
                  className="mr-4 text-sm "
                />
                <FaSun className="ml-0 text-2xl text-[#D7FFB1] sm:ml-4 sm:text-3xl md:text-2xl" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Brands;
