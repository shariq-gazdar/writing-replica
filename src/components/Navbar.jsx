import Image from "next/image";
import Link from "next/link";
import React from "react";
import ShadowButtons from "./ShadowButton";

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
  return (
    <>
      {/* Desktop Navbar */}
      <div className="flex justify-between py-[15px] px-[31.5px] items-center border-b border-[#a3a29f] bg-transparent">
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
      <div className="lg:hidden flex"></div>
    </>
  );
}

export default Navbar;
