import React from "react";
import { Lightbulb, Brain, Target, Share2 } from "lucide-react";

const Benefits = () => {
  const items = [
    {
      icon: <Lightbulb size={20} />,
      text: "Develop laser-sharp focus & eliminate distractions.",
    },
    {
      icon: <Brain size={20} />,
      text: "Master deep work techniques for smarter productivity.",
    },
    {
      icon: <Target size={20} />,
      text: "Overcome procrastination & get more done.",
    },
    {
      icon: <Share2 size={20} />,
      text: "Build lasting habits for long-term success.",
    },
  ];

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
              Are Distractions Holding You Back?
            </span>
          </div>
        </div>
      </div>
      <div className="Benefits_text text-[#E0E3E5] text-4xl w-[600px] text-center mb-[160px] mt-[32px]">
        A self-paced, results-driven course designed to help you
      </div>
      <div>
        <div className="w-full flex justify-center py-20 font-sans">
          <div className="flex flex-col w-[380px]">
            {items.map((item, index) => (
              <div key={index} className="flex gap-8 relative">
                {/* The absolute vertical connector line */}
                {index !== items.length && (
                  <div className="absolute left-[7px] top-8 h-[100px] w-[2px] bg-gradient-to-b from-transparent via-blue-600 to-transparent z-0" />
                )}

                {/* The glowing dot */}
                <div className="relative z-10 w-[10px]">
                  <div className="w-[15px] h-[15px] rounded-full bg-[#2563eb] shadow-[0_0_12px_2px_rgba(37,99,235,0.7)]" />
                </div>

                {/* The content box */}
                <div className="flex flex-col gap-4 pt-5 pb-5">
                  <div className="w-[52px] h-[52px] rounded-full bg-[#111726] shadow-inner border border-blue-900/30 flex items-center justify-center text-zinc-100">
                    {item.icon}
                  </div>
                  <p className="text-[#ececed] text-[17px] font-normal leading-relaxed tracking-wide">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
