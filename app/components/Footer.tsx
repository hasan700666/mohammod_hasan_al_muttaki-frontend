import React from "react";
import { GoArrowRight } from "react-icons/go";
import Image1 from "../../public/07ad6fdea53ce248c6e025dfe88dd2aed6fdbe6a.jpg";
import Image2 from "../../public/9b7ee514373a384c2eb0f993e5649c6dfa50adfc.jpg";
import Image3 from "../../public/9bfdf9ad94e48c7f7127d34155cd0b1c0e922657.jpg";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="lg:px-20 lg:py-16 px-10 py-12 bg-[#0B0F17] text-white">
      {/* Top Section */}
      <div className="footerSection flex justify-between items-center">
        {/* Left Text */}
        <div>
          <h1 className="text-4xl font-semibold leading-tight footer_1_text">
            The Deep <br /> Work Blueprint
          </h1>
          <p className="text-gray-400 mt-4 text-sm footer_2_text">
            Master Focus & Get More Done in Less Time
          </p>
        </div>

        <div className="bg-[#2F6FED] rounded-2xl px-6 py-5 w-[320px] h-[180px] flex flex-col justify-between shadow-lg">
          {/* Top row */}
          <div className="flex items-start justify-between">
            <div className="flex -space-x-3">
              <Image
                alt="User 1"
                src={Image1}
                className="w-[40px] h-[40px] object-cover rounded-full border-2 border-[#2F6FED]"
              />
              <Image
                alt="User 2"
                src={Image2}
                className="w-[40px] h-[40px] object-cover rounded-full border-2 border-[#2F6FED]"
              />
              <Image
                alt="User 3"
                src={Image3}
                className="w-[40px] h-[40px] object-cover rounded-full border-2 border-[#2F6FED]"
              />
            </div>

            <div className="w-[40px] h-[40px] flex items-center justify-center bg-white rounded-full text-black">
              <GoArrowRight className="w-[24px] h-[24px]" />
            </div>
          </div>

          {/* Bottom text */}
          <p className="text-white">
            Join with 5K+ other students
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-16 h-[1px] w-full bg-gradient-to-r from-transparent via-[#2466F2] to-transparent"></div>

      {/* Bottom Section */}
      <div className="footerCpyAndLinks flex justify-between items-center mt-6 text-sm text-gray-400">
        <p>© Copyright 2024, All Rights Reserved</p>

        <div className="flex gap-6 footer_links">
          <a href="#" className="hover:text-white">
            Terms & conditions
          </a>
          <a href="#" className="hover:text-white">
            Refund policy
          </a>
          <a href="#" className="hover:text-white">
            Pricing
          </a>
          <a href="#" className="hover:text-white">
            Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
