import React from "react";

function Benefits() {
  return (
    <section className="bg-[url('/backgrounds/benefits.png')] py-20 bg-brown-background bg-cover">
      {/* Content */}
      <div className="w-1/2 flex flex-col mx-[6.23%] px-4 space-y-5">
        {/* Heading */}
        <h2 className="text-white text-[3rem] font-bold leading-[1.2]">
          How <span className="text-accent-primary">Phoenix Ghostwriting</span>{" "}
          <br />
          Adds Value For Authors?
        </h2>
        {/* Description */}
        <p className="text-[1.1rem] font-poppins text-white font-normal">
          Operating in the literary industry for more than a decade, our team
          <br />
          identifies the gaps and delivers relevant solutions.
        </p>
        {/* Benefits Points */}
        <ul className="grid grid-cols-2 ml-[5%] ">
          {[
            "Qualified Writers Panel",
            "Timely Updates",
            "Top-quality Writing",
            "Affordability",
            "Zero Plagiarism",
            "Unlimited Revisions",
          ].map((benefit, index) => (
            <li
              key={index}
              className="list-image-[url('/finishes/list-icon.png')] text-white text-[1.2rem] font-poppins font-medium mb-[17px]"
            >
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Benefits;
