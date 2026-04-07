import React from "react";
import Image1 from "../../public/9b8236a6f088ea415e279e14cea7256a7270219a.jpg";
import Image2 from "../../public/6135ef9b652b92ce609c3142fc8f62c71e6518e0.jpg";
import Image3 from "../../public/b62626fd64ade5a82a62afcfe80db5a26773fdfc.jpg";
import Image4 from "../../public/ae045db89861f1802ef16929d7aa96cd65eed09b.jpg";
import Image5 from "../../public/ffbc8d86de16a0a24a4e5b1f685bf873681890d7.jpg";
import Image6 from "../../public/1498ccab8c0ff33d6f3a9d062a4173c64dc6e51b.jpg";
import Image7 from "../../public/046618d9dc8dd56770d305a6239081ed291a47e5.jpg";
import Image from "next/image";

const PainPoint = () => {
  return (
    <section className="bg-black text-white py-20 px-6 pt-[208px]">
      <div className="max-w-6xl mx-auto text-center flex flex-col items-center">
        {/* Wrapper */}
        <div className="relative inline-flex mb-[32px]">
          {/* OUTER GLOW */}
          <div
            className="absolute -inset-[2px] rounded-[14px] blur-[8px] opacity-60
                  bg-[linear-gradient(120deg,#2466F2,rgba(255,255,255,0.2),#2466F2)]"
          />

          {/* GRADIENT BORDER */}
          <div
            className="relative rounded-[12px] p-[1px]
                  bg-[linear-gradient(120deg,#2466F2,rgba(255,255,255,0.15),#2466F2)]"
          >
            {/* INNER CONTENT */}
            <div className="flex items-center gap-2 h-[36px] px-4 py-2 rounded-[11px] bg-[#171B21]">
              {/* GRADIENT DOT */}
              <span
                className="w-[8px] h-[8px] rounded-full
                       bg-[radial-gradient(circle_at_30%_30%,#5A8CFF,#2466F2)]
                       shadow-[0_0_6px_rgba(36,102,242,0.9)]"
              />

              {/* TEXT */}
              <span className="text-[14px] leading-none text-white/80">
                Are Distractions Holding You Back?
              </span>
            </div>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-semibold leading-tight w-[928px]">
          If you struggle to focus, feel overwhelmed{" "}
          <span className="text-white/60">
            by endless tasks, or procrastinate instead of making progress,
          </span>{" "}
          you’re not alone.
        </h2>

        {/* Small avatars */}
        <div className="flex justify-center gap-3 mt-[32px]">
          <Image
            src={Image1}
            alt=""
            className="w-[118px] h-[120px] rounded-lg object-cover"
          />
          <Image
            src={Image2}
            alt=""
            className="w-[118px] h-[120px] rounded-lg object-cover"
          />
          <Image
            src={Image3}
            alt=""
            className="w-[118px] h-[120px] rounded-lg object-cover"
          />
        </div>
      </div>

      {/* Bottom section */}
      <div className="mx-auto mt-16 flex gap-8 items-center justify-center">
        {/* Left Image */}
        <div className=" w-[526px] h-[642px] rounded-2xl overflow-hidden">
          <Image src={Image4} alt="Working" className="object-cover" />
        </div>

        {/* Right Card */}
        <div className="bg-white/5 rounded-2xl p-8 w-[738px] h-[642px]">
          {/* Top badge */}
          <div className="flex items-center justify-between gap-2 mb-[9px]">
            {/* Gradient Design */}
            <div className="relative inline-flex">
              {/* OUTER GLOW */}
              <div
                className="absolute -inset-[2px] rounded-[14px] blur-[8px] opacity-60
                  bg-[linear-gradient(120deg,#2466F2,rgba(255,255,255,0.2),#2466F2)]"
              />

              {/* GRADIENT BORDER */}
              <div
                className="relative rounded-[12px] p-[1px]
                  bg-[linear-gradient(120deg,#2466F2,rgba(255,255,255,0.15),#2466F2)]"
              >
                {/* INNER CONTENT */}
                <div className="flex items-center gap-2 h-[36px] px-4 py-2 rounded-[11px] bg-[#171B21]">
                  {/* GRADIENT DOT */}
                  <span
                    className="w-[8px] h-[8px] rounded-full
                       bg-[radial-gradient(circle_at_30%_30%,#5A8CFF,#2466F2)]
                       shadow-[0_0_6px_rgba(36,102,242,0.9)]"
                  />

                  {/* TEXT */}
                  <span className="text-[14px] leading-none text-white/80">
                    No worries
                  </span>
                </div>
              </div>
            </div>
            <div className="flex -space-x-3">
              <Image
                alt="User 1"
                src={Image1}
                className="w-[40px] h-[40px] object-cover rounded-full border-2 border-white/5"
              />
              <Image
                alt="User 2"
                src={Image2}
                className="w-[40px] h-[40px] object-cover rounded-full border-2 border-white/5"
              />
              <Image
                alt="User 3"
                src={Image3}
                className="w-[40px] h-[40px] object-cover rounded-full border-2 border-white/5"
              />
            </div>
          </div>

          <div className="text-end text-[#D0D5D9] text-[15px]">
            Join with 5K other students
          </div>

          <div className="flex justify-between mt-[117px]">
            <div>
              <div className="text-[15px] text-[#AAAEB2] w-[200px] mt-[117px]">
                The ability to concentrate deeply is the ultimate productivity
                hack
              </div>
              <div className="text-[23px] text-[#AAAEB2] w-[240px] mt-[34px]">
                And fortunately it’s a skill you can train & develop.
              </div>
            </div>
            <div className="flex flex-col gap-[8px]">
              <Image
                src={Image5}
                alt=""
                className="w-[118px] h-[120px] rounded-lg object-cover"
              />
              <Image
                src={Image6}
                alt=""
                className="w-[118px] h-[120px] rounded-lg object-cover"
              />
              <Image
                src={Image7}
                alt=""
                className="w-[118px] h-[120px] rounded-lg object-cover "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoint;
