import React from "react";
import { Star, BadgeCheck } from "lucide-react";

const CTA = () => {
  return (
    <section className="w-full py-24 px-4 flex justify-center items-center">
      <div className="grid md:grid-cols-[1fr_minmax(400px,450px)] gap-[16px] items-stretch">
        {/* Left Card */}
        <div className="bg-[#111111] rounded-3xl p-10 flex flex-col justify-center w-[784px]">
          <div>
            <div className="relative inline-flex mb-[20px]">
              {/* OUTER GLOW */}
              <div
                className="absolute -inset-[2px] rounded-[14px] blur-[8px] opacity-60
                  bg-[linear-gradient(120deg,#2466F2,rgba(255,255,255,0.2),#2466F2)]"
              />

              {/* GRADIENT BORDER */}
              <div className="relative rounded-[12px] p-[1px] bg-[linear-gradient(120deg,#2466F2,rgba(255,255,255,0.15),#2466F2)]">
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
                    Introducing
                  </span>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-white text-[32px] md:text-[40px] font-semibold leading-tight tracking-tight mb-4">
            The Deep Work Blueprint
          </h2>

          <p className="text-zinc-400 text-[15px] mb-[60px]">
            What extra you will get if you enroll now
          </p>

          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#1c1f2e] border border-blue-900/30 text-white">
                <Star size={14} className="opacity-90" />
              </div>
              <p className="text-zinc-400 text-[15px]">
                Bonus: 1:1 coaching session to boost focus.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#1c1f2e] border border-blue-900/30 text-white">
                <Star size={14} className="opacity-90" />
              </div>
              <p className="text-zinc-400 text-[15px]">
                Discount: Save 30% when you enroll now!
              </p>
            </div>
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-[#111111] border border-blue-900/30 rounded-3xl p-10 flex flex-col flex-1 w-[480px]">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-baseline gap-3">
              <span className="text-white text-[42px] font-semibold tracking-tight">
                $349
              </span>
              <span className="text-zinc-500 text-xl font-medium line-through decoration-red-500 decoration-2">
                $500
              </span>
            </div>
            <div className="bg-blue-600 hover:bg-blue-500 transition-colors px-3 py-1.5 rounded-lg">
              <span className="text-white text-xs font-semibold">30% off</span>
            </div>
          </div>

          <p className="text-zinc-400 text-sm mb-10 font-medium">
            30% off until 4d : 2h : 41m : 17s
          </p>

          <div className="flex flex-col gap-6 mb-12">
            <div className="flex items-start gap-4">
              <BadgeCheck
                size={20}
                className="text-white flex-shrink-0 mt-0.5"
              />
              <p className="text-zinc-400 text-[15px] leading-snug">
                6h of videos - Step-by-step deep work strategies.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <BadgeCheck
                size={20}
                className="text-white flex-shrink-0 mt-0.5"
              />
              <p className="text-zinc-400 text-[15px] leading-snug">
                Templates & Trackers - Stay on track effortlessly.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <BadgeCheck
                size={20}
                className="text-white flex-shrink-0 mt-0.5"
              />
              <p className="text-zinc-400 text-[15px] leading-snug">
                Live Q&As - Expert guidance & accountability.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <BadgeCheck
                size={20}
                className="text-white flex-shrink-0 mt-0.5"
              />
              <p className="text-zinc-400 text-[15px] leading-snug">
                Exclusive Community - Connect with others.
              </p>
            </div>
          </div>

          <button className="w-full h-[47px] bg-[#2563eb] hover:bg-[#669EFF] transition-colors text-white font-medium py-3.5 rounded-xl text-[15px] mt-auto shadow-[0_0_15px_rgba(37,99,235,0.4)]">
            Enroll now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
