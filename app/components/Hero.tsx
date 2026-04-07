import React from "react";
import { Play } from "lucide-react";
import IMG from "../../public/1b1535b9d450dff81de3445a46d9e5bb3fa0af1f (1).png";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-full bg-[#050914] overflow-hidden flex flex-col items-center pt-24 pb-16">
      {/* Background gradients and scanlines */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-center">
        {/* Radial glow */}
        <div className="absolute top-[20%] w-[1000px] h-[500px] bg-[#1e3a8a]/40 blur-[120px] rounded-full"></div>

        {/* Scanlines using repeating-linear-gradient */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `repeating-linear-gradient(to up, #3b82f6 0px, #3b82f6 1px, transparent 1px, transparent 6px)`,
          }}
        ></div>

        {/* Fade out edges */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050914] via-transparent to-[#050914]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#050914] via-transparent to-[#050914] opacity-80"></div>
      </div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 flex flex-col items-center text-center">
        {/* Badge */}
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
                30% off until 4d : 2h : 41m : 17s
              </span>
            </div>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-[56px] font-medium text-white tracking-tight leading-[1.15] mb-6">
          Master Focus & Get <br className="hidden md:block" />
          More Done in Less Time
        </h1>

        {/* Subheading */}
        <p className="text-base md:text-[17px] text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-10 font-light">
          A step-by-step system to eliminate procrastination, train your{" "}
          <br className="hidden md:block" />
          brain for deep work, and boost productivity effortlessly.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-20">
          <button className="px-8 py-3 rounded-lg bg-[#2563eb] hover:bg-[#669EFF] text-white text-[15px] font-medium transition-colors shadow-[0_0_20px_rgba(37,99,235,0.3)]">
            Enroll now
          </button>
          <button className="px-8 py-3 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-white text-[15px] font-medium border border-white/[0.08] transition-colors">
            Curriculum
          </button>
        </div>

        {/* Video Thumbnail */}
        <div className="relative w-full max-w-[900px] rounded-2xl md:rounded-[2rem] overflow-hidden border border-white/[0.08] bg-zinc-900 aspect-video shadow-2xl">
          <Image
            src={IMG}
            alt="Course preview"
            className="w-full h-full object-cover opacity-80"
          />

          {/* Play button */}
          <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:scale-105 transition-transform duration-300 group">
            <Play
              className="w-8 h-8 text-blue-600 translate-x-1"
              fill="currentColor"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
