"use client";

import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Icon imports
import {
  faArrowLeftLong,
  faArrowRightLong,
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// District Data import
import data from "../../../List-of-Districts.json";

// const images = [
//   './Images/Galaxy-1.jpg',
//   './Images/Galaxy-2.jpg',
//   './Images/Galaxy-3.jpg',
// ];

interface Place {
  SrNo: number;
  place: string;
  description: string;
  city: string;
  image: string;
}

interface DistrictData {
  districtName: string;
  content: Place[];
}

interface MapSliderProps {
  district?: string;
}

const MapSlider: React.FC<MapSliderProps> = ({ district }) => {
  const places = useMemo(() => {
    if (district === "") {
      district = "TopDestinations";
    }
    const districtData = (data as DistrictData[]).find(
      (d) => d.districtName.toLowerCase() === district?.toLowerCase()
    );
    return districtData?.content || [];
  }, [district]);

  return (
    <div className="relative w-full h-full mx-auto ">
      {/* Swiper with custom navigation class selectors */}
      <Swiper
        modules={[Navigation]}
        loop={true}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".custom-swiper-button-next",
          prevEl: ".custom-swiper-button-prev",
        }}
        spaceBetween={10}
        slidesPerView={places.length === 1 ? 1 : (places.length === 2) ? 2 : 3}
        speed={800}
        className="flex w-full h-full"
        breakpoints={{
          // When screen width is >= 640px (sm)
          340: {
            slidesPerView: 1,  // 1 slide for mobile devices
          },
          // When screen width is >= 768px (md)
          768: {
            slidesPerView: 2,  // 2 slides for tablets
          },
          // When screen width is >= 1024px (lg)
          1024: {
            slidesPerView: 3,  // 3 slides for larger screens
          },
        }}
      >
        {/* Images of Places */}
        {places.map((place, index) => (
          <SwiperSlide key={index} className="flex flex-col">
            <div className="flex h-full gap-1 justify-center items-center">
              <div className="relative w-full h-full overflow-hidden group rounded-2xl">
                <img
                  src={`/Images/${place.image}`}
                  alt={place.place}
                  className="w-full h-full object-cover transition duration-300 ease-in-out group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 w-full translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-800 ease-in-out bg-black/30 text-white font-serif text-center text-2xl py-2 ">
                  {place.place}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom navigation buttons */}
      <div className="absolute bottom-4 left-4 flex gap-1 z-10 text-2xl ">
        <div className="custom-swiper-button-prev bg-transparent text-black rounded-full p-2 hover:text-orange-400 cursor-pointer">
          {/* <FontAwesomeIcon icon={faArrowLeftLong} className='opacity-50' /> */}
          <FontAwesomeIcon
            icon={faCircleChevronLeft}
            style={{ color: "white" }}
          />
        </div>
        <div className="custom-swiper-button-next bg-transparent text-black rounded-full p-2 hover:text-orange-400 cursor-pointer">
          {/* <FontAwesomeIcon icon={faCircleChevronRight} />*/}
          <FontAwesomeIcon
            icon={faCircleChevronRight}
            style={{ color: "white" }}
          />
        </div>
      </div>
    </div>
  );
};

export default MapSlider;
