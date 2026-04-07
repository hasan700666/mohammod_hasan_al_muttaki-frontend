import React from "react";
import Logo from "../../public/Logo.png";
import DarkToLightIMG from "../../public/Mode=Dark.png";
import Image from "next/image";
import { IoIosArrowDropdown } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="py-6 flex justify-center flex-col items-center">
      <div className="px-[28px] navbar_2_div flex justify-between items-center w-[1280px] h-[47px]">
        <div>
          <Image
            src={Logo}
            alt="Logo"
            height="31"
            width="84"
            className="logo"
          />
        </div>
        <div className="2xl:flex 2xl:gap-8 xl:flex xl:gap-8 lg:flex lg:gap-8 text-[#D0D5D9] md:flex md:gap-8 hidden">
          <a href="#" className="hover:text-white">
            Overview
          </a>
          <a href="#" className="hover:text-white">
            Curriculum
          </a>
          <a href="#" className="hover:text-white">
            Testimonials
          </a>
          <a href="#" className="hover:text-white">
            Pricing
          </a>
        </div>
        <div className="flex gap-[32px]">
          <div>
            <Image
              src={DarkToLightIMG}
              alt="Dark/Light Mode"
              height="44"
              width="80"
            />
          </div>
          <div>
            <button className="w-[116px] h-[47px] bg-[#2466F2] rounded-[10px] shadow-md hover:bg-[#669EFF] font-semibold md:block hidden">
              Enroll now
            </button>
            <button className="bg-[#2466F2] rounded-full translate-x-8 hover:bg-[#669EFF] md:hidden flex items-center gap-1 px-2 py-2">
              <IoIosArrowDropdown className="text-[26px]" />
            </button>
          </div>
        </div>
      </div>
      <div className="navbar_divider_line h-[1px] w-[1280px] bg-gradient-to-r from-transparent via-[#2466F2] to-transparent mt-6"></div>
    </div>
  );
};

export default Navbar;
