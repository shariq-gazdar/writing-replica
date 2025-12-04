import Navbar from "@/components/Navbar";
import HeroSectionWrapper from "@/components/HeroSectionWrapper";
import RoundedContainer from "@/components/RoundedContainer";
import Image from "next/image";
import BrandLine from "@/components/BrandLine";
import Cta from "@/components/Cta";
import React from "react";
import ShadowButton, { NonShadowButton } from "@/components/ShadowButton";
import Footer from "@/components/Footer";
import Testimonial from "@/components/Testimonials/Testimonial";
import Benefits from "@/components/Benefits";
import Process from "@/components/Process";

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
                  Who We Are
                </RoundedContainer>

                {/* Heading */}
                <h1 className="lg:text-[40.8px] text-text-black font-bold font-cabin line leading-[43px] text-[28px]">
                  {
                    "Communicate Your Values & Concepts With Our Ghostwriting Solutions"
                  }
                </h1>
              </>
            }
            right={
              <>
                {/* Right Side */}
                <Image
                  src={"/hero-section/hero-ghostwriting.png"}
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
      {/* BrandLine */}
      <BrandLine />
      {/* Market Offer -2 */}
      <section className="flex justify-center py-[80px] bg-brown-background px-[5%]  gap-x-5">
        {/* Left */}
        <div className="">
          <Image
            src={"/misc/market-offer-2.png"}
            width={450}
            height={481}
            alt="hero-banner"
            sizes="450px"
          />
        </div>
        {/* Right */}
        <div className=" w-[48.3%] flex flex-col gap-y-[5%]  justify-center">
          <h2 className="font-cabin font-bold text-[3rem] leading-[1.2] text-[#0B2240]">
            Fiction vs. Nonfiction! Discover What We Offer In the Subsequent
            Genres?
          </h2>
          <p className="text-[#010c2f] text-[1rem] font-normal font-poppins">
            With your fiction narrative, we develop the story of every character
            to create a coherent plot. From developing concepts and building
            plots to defining each character’s personality, we structure the
            outline of your narrative. Your fiction narrative is woven from our
            writers' imagination, while your non-fiction narrative is crafted
            through our team’s thorough research, incorporating real characters,
            events, or information. Whether you require a fiction or non-fiction
            narrative, our skilled writers and editors are prepared to meet your
            needs across any genre!
          </p>
          <NonShadowButton
            paddingVertical={12}
            paddingHorizontal={30}
            backgroundColor="#f5441b"
            mainColor="#fff"
            hoverColor="#173f73"
            borderColor="#142f53"
            shadowColor="#1a3b66"
            className={"text-[1rem]"}
          >
            Request a quote
          </NonShadowButton>
        </div>
      </section>
      {/* Ghost Cta */}
      <section className="relative mt-42">
        {/* Real Content */}
        <div className="bg-[url('/backgrounds/ghost-cta.png')] bg-cover text-white p-[150px] mx-[5%] relative z-2">
          <p className="text-[1.2rem] font-normal font-poppins leading-[30px]">
            Do you seek to inspire your readers with your ideas, knowledge and
            concepts?
          </p>
          <h2 className="text-[3rem] font-bold font-cabin">
            Phoenix Ghostwriting has a dedicated team <br /> striving to achieve
            customer satisfaction <br /> & meet your requirements.
          </h2>
          {/* Buttons */}
          <div className="flex gap-x-5 my-10">
            <NonShadowButton
              paddingVertical={12}
              paddingHorizontal={30}
              backgroundColor="#f5441b"
              mainColor="#fff"
              hoverColor="#173f73"
              borderColor="#fff"
              shadowColor="#1a3b66"
              className={"text-[1rem]"}
            >
              Request a quote
            </NonShadowButton>

            <NonShadowButton
              paddingVertical={12}
              paddingHorizontal={30}
              backgroundColor="#000"
              mainColor="#fff"
              hoverColor="#173f73"
              borderColor="#fff"
              shadowColor="#1a3b66"
              className={"text-[1rem]"}
            >
              Live Chat
            </NonShadowButton>
          </div>
        </div>
        {/* Gray Area */}
        <div className="w-screen bg-[#7c8ea9] h-[50%] absolute -bottom-10 - z-1"></div>
      </section>
      {/* Contedit */}
      <section className="our-contedit bg-white py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Left Column - Images - 5/12 on desktop */}
            <div className="lg:col-span-5">
              <div className="img-contedit1 mb-8">
                <img
                  src="https://www.phoenixghostwriting.com//assets/images/cont-edit1.png"
                  alt="Content editing 1"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="img-contedit2">
                <img
                  src="https://www.phoenixghostwriting.com//assets/images/cont-edit3.png"
                  alt="Content editing 3"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>

            {/* Right Column - Content - 7/12 on desktop */}
            <div className="lg:col-span-7">
              <div className="info-contedit">
                {/* Heading */}
                <div className="heading mb-8">
                  <h2 className="text-[3rem] leading-[1.2] font-bold text-[#0b2240] ">
                    Four Different Approaches <br />
                    to Writing Your Book
                  </h2>
                </div>

                {/* Description */}
                <p className="text-[1rem] font-normal text-[#50545a] mb-12 font-poppins">
                  Presenting your idea and concept in different ways is a
                  creative approach of our team of writers. Different audiences
                  grasp ideas in different ways - some prefer informative
                  research, others appreciate imagery, and some resonate with
                  poetic expression. Therefore, our team structures your concept
                  the way you prefer it.
                </p>

                {/* Boxes Grid - 2 columns on desktop */}
                <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
                  {[
                    {
                      title: "Technical\nWriting",
                      desc: "A form of narrative our writers structure, focusing on conveying information about specific topics and niches. Generally, it includes instructions or technical concepts such as regulations, computer applications or medical procedures.",
                    },
                    {
                      title: "Descriptive\nWriting",
                      desc: "As implied by the term 'descriptive', the primary purpose of descriptive writing is to describe your narrative in terms of a person, and location to paint a picture in your reader's mind.",
                    },
                    {
                      title: "Narrative\nWriting",
                      desc: "Way of communicating your story, outlining actual events stated in chronological order to sustain your reader's attention. Your readers deserve to visualize a realistic experience from our written words!",
                    },
                    {
                      title: "Poetic\nWriting",
                      desc: "Express your art, experience, thoughts, feelings in a creative yet meaningful way through poems. Our team of writers use a language of poem that appeals to your target audience.",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="pl-8 md:pl-10 border-l-2 border-[#b5b5b6] relative pb-10 mb-8 lg:mb-10"
                    >
                      {/* Bottom border for first 3 items */}
                      {index < 3 && (
                        <div className="absolute bottom-0 left-0 w-full h-px bg-[#b5b5b6]" />
                      )}
                      <h4 className="text-3xl md:text-4xl text-accent-primary font-medium mb-4 leading-tight whitespace-pre-line">
                        {item.title}
                      </h4>
                      <p className="text-lg text-[#50545a]">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Top Level */}
      <section className="relative bg-brown-background py-[80px] px-[5%] ">
        {/* Heading  */}
        <div className="flex flex-col items-center justify-center text-center ">
          <h2 className="text-[3rem] font-bold font-cabin text-text-black mb-[30px]">
            Why Should You Opt For <br /> Phoenix Ghostwriting Process?
          </h2>
          <p className="mb-[70px] w-[80%] font-poppins text-[18px] text-[#010c2f]">
            At Phoenix Ghostwriting, we build your author journey, creating the
            most unique plots that leave your readers amused. Our team of
            writers, editors, illustrators, and publishers work diligently to
            meet the expectations of our valued clients.
          </p>
          {/* Cards */}
          <ul className="self-start grid grid-cols-2 w-[66%] gap-5">
            {[
              "Rigorous proofreading to review  all \n minor and major errors",
              "Reviewing your manuscript according \n to standard guidelines",
              "Planning the outline for your manuscript",
              "Zero plagiarism in your manuscript",
              "Research and analysis of your concept",
              "Designing an appealing book cover",
              "Get unlimited revisions",
              "Providing consultancy for the type of narrative",
              "High-quality assurance",
              "Offering more than ten genres",
            ].map((item, index) => (
              <li
                className="flex items-center border border-[#cccccc] bg-white text-start whitespace-break-spaces py-[5px] px-[20px] font-poppins text-[1.2rem] text-text-black"
                key={index}
              >
                <Image
                  src="/finishes/list-icon.png"
                  width={35}
                  height={35}
                  alt="list-icon"
                  className="mx-5"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute bottom-0 right-0 h-[65%] w-[70%]">
          <Image
            src={"/backgrounds/top-level.png"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </section>
      {/* Call to Action  */}
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
