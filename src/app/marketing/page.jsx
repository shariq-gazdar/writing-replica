import React from "react";
import Cta from "@/components/Cta";
import Process from "@/components/Process";
import Benefits from "@/components/Benefits";
import Testimonial from "@/components/Testimonials/Testimonial";
import Footer from "@/components/Footer";
import BrandLine from "@/components/BrandLine";
import HeroSectionWrapper from "@/components/HeroSectionWrapper";
import Navbar from "@/components/Navbar";
import RoundedContainer from "@/components/RoundedContainer";
import Image from "next/image";
function page() {
  return (
    <div className="overflow-x-hidden">
      <div className="bg-[url('/backgrounds/hero-section.png')] bg-cover">
        {/* Navbar */}
        <Navbar />
        {/* Hero Section */}
        <section className="flex items-start justify-between px-[62.33px] py-12 w-screen flex-col lg:flex-row">
          <HeroSectionWrapper
            leftClassName="gap-y-5"
            rightClassName="justify-end"
            left={
              <>
                {/* Left Side */}
                <RoundedContainer
                  className="font-cabin hidden lg:flex font-medium uppercase leading-[1.2] py-[10px] px-[25px]"
                  fontSize={"1rem"}
                >
                  Next Step To Author Success
                </RoundedContainer>

                {/* Heading */}
                <h1 className="lg:text-[40.8px] text-text-black font-bold font-cabin line leading-[43px] text-[28px]">
                  {"Book Marketing - The Next Step To Literary Success"}
                </h1>
              </>
            }
            right={
              <>
                {/* Right Side */}
                <Image
                  src={"/hero-section/marketing.png"}
                  width={380}
                  height={415}
                  alt="hero-banner"
                  sizes="380px"
                />
              </>
            }
          />
        </section>
      </div>
      {/* Brand Line */}
      <BrandLine /> {/* Cta */}
      <Cta />
      {/* Process */}
      <Process />
      {/* Benefits */}
      <Benefits />
      {/* Testimonials */}
      <Testimonial />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default page;
