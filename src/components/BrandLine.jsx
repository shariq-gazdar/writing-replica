"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Image from "next/image";

function BrandLine() {
  return (
    <div className="mx-2 md:mx-[62px] my-8 md:my-[30px] bg-white">
      <Swiper
        slidesPerView={3} // Default for mobile
        spaceBetween={1} // Small gap for mobile
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
        breakpoints={{
          // Mobile (default): 2 slides, 15px gap

          // Small tablets
          480: {
            slidesPerView: 3,
            spaceBetween: 20,
          },

          // Tablets
          640: {
            slidesPerView: 4,
            spaceBetween: 25,
          },

          // Medium screens
          768: {
            slidesPerView: 5,
            spaceBetween: 30,
          },

          // Large screens
          1024: {
            slidesPerView: 6,
            spaceBetween: 40,
          },

          // Extra large screens
          1280: {
            slidesPerView: 7,
            spaceBetween: 50,
          },
        }}
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
            <div className="relative h-12 w-24 sm:h-14 sm:w-28 md:h-16 md:w-32 lg:h-18 lg:w-36">
              <Image
                src={`/brands/${item}.png`}
                fill
                alt={`${item} brand logo`}
                className="object-contain p-1" // Added padding for better spacing
                sizes="(max-width: 480px) 96px, (max-width: 640px) 112px, (max-width: 768px) 128px, (max-width: 1024px) 144px, 150px"
                priority={index < 4} // Lazy load after first few images
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default BrandLine;
