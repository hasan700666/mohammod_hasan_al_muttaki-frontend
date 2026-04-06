import React from "react";
import Logo from "../../public/Logo.png";
import DarkToLightIMG from "../../public/Mode=Dark.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="px-20 py-6 flex justify-center flex-col items-center">
      <div className=" flex justify-between items-center w-[1280px] h-[47px]">
        <div>
          <Image src={Logo} alt="Logo" height="31" width="84" />
        </div>
        <div className="flex gap-[32px] text-[#D0D5D9]">
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
        <div className="flex">
          <div>
            <Image
              src={DarkToLightIMG}
              alt="Dark/Light Mode"
              height="44"
              width="80"
            />
          </div>
          <div>
            <div>
              <button className="w-[116px] h-[47px] bg-[#2466F2] rounded-[10px] shadow-md translate-x-8 hover:bg-[#669EFF] font-semibold">
                Enroll now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[1px] w-[1280px] bg-gradient-to-r from-transparent via-[#2466F2] to-transparent mt-6"></div>
    </div>
  );
};

export default Navbar;
