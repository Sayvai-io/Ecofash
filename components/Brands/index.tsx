"use client";
import React from "react";
import Slider from "react-slick";
import SingleWord from "./SingleWord";
import wordData from "./wordData";
import { FaSun } from 'react-icons/fa';
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
    let: true
  };

  return (
    <section className="border border-x-0 border-y-stroke bg-[#003F2E] py-3 dark:border-y-strokedark dark:bg-black">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <Slider {...settings}>
          {wordData.map((word, index) => (
            <div key={index} className="flex items-center justify-center">
              <div className="flex items-center justify-between w-full px-4">
                <SingleWord 
                  word={word} 
                  color="#e8ffb1" 
                  className="text-lg sm:text-xl md:text-lg"
                />
                <FaSun className="text-[#D7FFB1] text-2xl sm:text-3xl md:text-2xl ml-0 sm:ml-4" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Brands;
