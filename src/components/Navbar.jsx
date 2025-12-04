"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ShadowButtons from "./ShadowButton";
import { Menu, X } from "lucide-react";

function Navbar() {
  const routes = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About Us",
      href: "/about-us",
    },
    {
      name: "Ghostwriting",
      href: "/ghostwriting",
    },
    {
      name: "Book Cover",
      href: "/book-cover",
    },
    {
      name: "Editing",
      href: "/editing",
    },
    {
      name: "Publishing",
      href: "/publishing",
    },
    {
      name: "Marketing",
      href: "/marketing",
    },
    {
      name: "Packages",
      href: "/packages",
    },
    {
      name: "Contact Us",
      href: "/contact-us",
    },
  ];
  const [mobile, setIsMobile] = useState(false);
  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden lg:flex justify-between py-[15px] px-[31.5px] items-center border-b border-[#a3a29f] bg-transparent">
        {/* Logo Left */}
        <Image src="/logo.png" alt="Logo" width={195} height={35} />
        {/* Link & Buttons*/}
        <div className="flex gap-x-4 items-center">
          {routes.map((route) => (
            <Link
              key={route.name}
              href={route.href}
              className="font-cabin text-[12.24px] font-medium text-black hover:text-accent-secondary"
            >
              {route.name}
            </Link>
          ))}
          <ShadowButtons
            shadowColor={"#000"}
            borderColor={"#050483 "}
            mainColor={"#212529"}
            hoverColor={"#050483"}
            paddingVertical={9}
            paddingHorizontal={15}
          >
            LET'S TALK
          </ShadowButtons>
        </div>
      </div>
      {/* Mobile Navbar */}
      <div className="lg:hidden flex justify-between p-3.5 border-b border-[#a3a29f] relative">
        <Image src="/logo.png" alt="Logo" width={195} height={35} />
        <button onClick={() => setIsMobile(!mobile)} className="relative z-20">
          {mobile ? <X color="white" size={35} /> : <Menu size={35} />}
        </button>
        {mobile && (
          <div className="absolute top-0 left-0 w-screen bg-linear-to-b from-accent-primary to-[#3d2218] z-10 h-screen">
            <ul className="flex flex-col mt-[20%]  gap-y-5 text-white ">
              {routes.map((route, index) => (
                <li
                  className={
                    " pt-2 px-5 text-base font-cabin" +
                    (index !== 0 ? " border-t border-white" : "")
                  }
                  key={index}
                >
                  <Link href={route.href} onClick={() => setIsMobile(false)}>
                    {route.name.toUpperCase()}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="float-end mt-5">
              <ShadowButtons
                shadowColor={"#000"}
                borderColor={"#050483 "}
                mainColor={"#212529"}
                hoverColor={"#050483"}
                paddingVertical={9}
                paddingHorizontal={15}
              >
                LET'S TALK
              </ShadowButtons>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
