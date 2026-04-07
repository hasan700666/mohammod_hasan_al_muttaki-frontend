import React from "react";

const Curriculum2 = () => {
  return (
    <div className="flex flex-col items-center mt-[240px]">
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
              Testimonials
            </span>
          </div>
        </div>
      </div>
      <div className="text-[#E0E3E5] text-5xl w-[600px] text-center mb-[160px] mt-[32px]">
        Real Results from Real People
      </div>
      <div></div>
    </div>
  );
};

export default Curriculum2;
