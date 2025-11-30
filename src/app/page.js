"use client";
import BrandLine from "@/components/BrandLine";
import Navbar from "@/components/Navbar";
import RoundedContainer from "@/components/RoundedContainer";
import ShadowButton, { NonShadowButton } from "@/components/ShadowButton";
import { capitalizeAll } from "@/lib/helpers";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    console.log(capitalizeAll("Shariq Gazdar"));
  });
  return (
    <div className="max-w-screen overflow-x-hidden">
      {/* Hero Section & background */}
      <div className="bg-[url('/backgrounds/hero-section.png')] bg-cover">
        {/* Navbar */}
        <Navbar />
        {/* Hero Section */}
        <section className="flex items-start justify-between px-[62.33px] py-12 w-screen flex-col lg:flex-row">
          {/* Left Side */}
          <div className="w-full lg:w-1/2 flex flex-col gap-y-5 px-[15px]">
            <RoundedContainer
              className="font-cabin hidden lg:flex"
              fontSize={13.6}
            >
              Leading Book Writing Agency
            </RoundedContainer>
            {/* Heading */}
            <h1 className="lg:text-[40.8px] text-[#0B2240] font-bold font-cabin line leading-[43px] text-[28px]">
              {
                "Professional Ghostwriting \n Solutions Focused on Building \n Author Reputation"
              }
            </h1>
            {/* Description */}
            <p className="lg:text-[13.6px] font-poppins text-[#010C2F] text-[1.2rem] font-normal">
              {
                "   Phoenix Ghostwriting has a dedicated team committed to debunking the myth that writing a book alone generates sales. Instead, we focus on creating value through a comprehensive process that includes writing, editing, proofreading, publishing, and marketing to ensure the highest level of customer satisfaction."
              }
            </p>
            {/* Shadow button */}
            <NonShadowButton
              paddingVertical={12}
              paddingHorizontal={30}
              backgroundColor="#f5441b"
              mainColor="#fff"
              hoverColor="#173f73"
              borderColor="#fff"
            >
              request a quote
            </NonShadowButton>
            {/* Rating & peoples */}
            <div className="flex items-center w-fit justify-start gap-4 mt-[20px]">
              {/* Rating */}
              <h5 className="text-[3rem]">
                4.8
                <sub className="relative -bottom-px left-px text-[1.5rem]">
                  out of 5
                </sub>
              </h5>
              {/* Peoples */}
              <div className="flex-shrink-0">
                <Image
                  src={"/hero-section/hero-peoples.png"}
                  width={220}
                  height={50}
                  className="object-cover"
                  alt="review-people"
                  sizes="220px"
                />
              </div>
            </div>
          </div>
          {/* Right Side */}
          <div className="w-full lg:w-1/2 flex justify-end px-[15px] mt-[5px]">
            <Image
              src={"/hero-section/hero-image.png"}
              width={380}
              height={415}
              alt="hero-banner"
              sizes="380px"
            />
          </div>
        </section>
      </div>
      {/* Brand Line */}
      <BrandLine />

      {/*  Initiate Section */}
      <section className="bg-[#f7f5f0] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[url('/backgrounds/masterpiece.png')] bg-cover bg-center rounded-2xl p-8  md:p-36">
            <div className="max-w-2xl ml-[40%]">
              {/* Heading */}
              <h2 className="text-3xl md:text-4xl font-cabin font-bold text-[#0B2240] mb-6 leading-tight">
                Start Your Book Journey With Us - Any Genre Welcome!
              </h2>

              {/* Content */}
              <div className="space-y-4">
                <p className="text-[15px] font-poppins text-[#50545A] leading-relaxed">
                  Fiction, historical, sci-fi, non-fiction - no matter your
                  genre, we bring your concept to life with a unique manuscript.
                  We skip the clichés and focus on creating captivating plots
                  that stand out.
                </p>

                <p className="text-[15px] font-poppins text-[#50545A] leading-relaxed">
                  Our process starts with deep research and careful outlining to
                  understand your genre inside out. We craft stories that not
                  only engage readers but create the buzz needed to grow your
                  audience and boost book sales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <div className="bg-[url('/backgrounds/service.png')]">
        {/* Container */}
        <div className="flex flex-col items-center text-center py-[170px]">
          {/* Rounded Container */}
          <RoundedContainer borderColor="red" textColor="white">
            What Phoenix Offers
          </RoundedContainer>
          {/* Heading */}
          <h2 className="text-[3rem] font-bold text-white font-cabin w-[90%]">
            Lead The Literary Industry With the Right Strategy and Solutions
          </h2>
          {/* Cards */}
          <div className="flex flex-wrap items-center justify-center">
            {[
              {
                heading: "Book Publishing",
                description:
                  "With Phoenix, increase the credibility and access to the audience with publishing your book on the right platform. Get your work recognized!",
              },
              {
                heading: "Book Marketing",
                description:
                  "Your author identity serves as your brand while your book is your product. With the right marketing strategy, win the targeted sales.",
              },
              {
                heading: "Author Website",
                description:
                  "Reflecting your values and concepts through your book is not sufficient. You need to showcase the following with an online presence.",
              },
              {
                heading: "Book Review & Consultation",
                description:
                  "Talented team at Phoenix reviews your manuscript and evaluates based on multiple factors to meet the industry standards.",
              },
              {
                heading: "Book Cover Design",
                description:
                  "Your book cover design is one of the factors that lets you achieve the best-selling status on publishing platforms. Let's design it and hit the best-selling list.",
              },
              {
                heading: "Book Proofreading",
                description:
                  "There's a thin line between editing and proofreading! It doesn't mean you can skip the proofreading stage, as this is the final stage before publishing your book.",
              },
            ].map((service, index) => (
              <div
                key={service.heading}
                className="bg-white w-[29%] p-[30px] m-5 rounded-2xl"
              >
                {/* Image and text */}
                <div className="flex items-end w-[60%] text-start space-x-2 mb-[5%]">
                  <div className="flex-shrink-0">
                    <Image
                      src={`/services/${index + 1}.png`}
                      width={50}
                      height={50}
                      alt={service.heading}
                      className="object-contain"
                    />
                  </div>
                  <h4 className="text-[#0B2240] text-[1.5rem] lg:text-[20px] leading-tight">
                    {service.heading}
                  </h4>
                </div>
                {/* description */}
                <p className="text-[14px] font-poppins  text-[#777777] text-start">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          {/* Quote Button */}
          <div className="my-[6%]">
            <NonShadowButton
              paddingVertical={12}
              paddingHorizontal={30}
              backgroundColor="#f5441b"
              mainColor="#fff"
              hoverColor="#173f73"
              borderColor="#fff"
            >
              Request a quote
            </NonShadowButton>
          </div>
        </div>
      </div>
    </div>
  );
}
