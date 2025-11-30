"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Image from "next/image";

function BrandLine() {
  return (
    <div className="mx-[62px] my-[30px] bg-white">
      <Swiper
        slidesPerView={7}
        spaceBetween={50}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {[
          "forbes",
          "es",
          "bn",
          "bookbaby",
          "lulu",
          "albirs",
          "ibookstore",
          "ibookstore",
          "google",
          "ingram",
        ].map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-16 w-32">
              {" "}
              {/* Adjust container size as needed */}
              <Image
                src={`/brands/${item}.png`}
                fill
                alt={item}
                className="object-contain" // Maintain aspect ratio
                sizes="(max-width: 768px) 100px, 150px"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default BrandLine;
