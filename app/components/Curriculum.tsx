"use client";

import React from "react";

import { useState } from "react";
import { Play, ChevronUp, ChevronDown, BadgeCheck } from "lucide-react";

const courseModules = [
  {
    id: 1,
    title: "Module 1: Foundations of Deep Work",
    duration: "1.7h of video",
    defaultExpanded: true,
    videos: [
      {
        title: "Understanding Focus & Distraction",
        time: "14:23",
        active: true,
        preview: true,
      },
      {
        title: "The Science Behind Deep Work",
        time: "22:51",
        active: false,
        preview: false,
      },
      {
        title: "Identifying Your Productivity Killers",
        time: "34:42",
        active: false,
        preview: false,
      },
      {
        title: "How to Strengthen Your Attention Span",
        time: "27:08",
        active: false,
        preview: false,
      },
    ],
  },
  {
    id: 2,
    title: "Module 2: Building Your Deep Work Routine",
    duration: "1.3h of video",
    defaultExpanded: false,
    videos: [],
  },
  {
    id: 3,
    title: "Module 3: Eliminating Procrastination",
    duration: "1.5h of video",
    defaultExpanded: false,
    videos: [],
  },
  {
    id: 4,
    title: "Module 4: Advanced Focus & Productivity Hacks",
    duration: "1.2h of video",
    defaultExpanded: false,
    videos: [],
  },
];

const Curriculum = () => {
  const [expandedModules, setExpandedModules] = useState<
    Record<number, boolean>
  >({
    1: true,
  });

  const toggleModule = (id: number) => {
    setExpandedModules((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

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
              Course Curriculum
            </span>
          </div>
        </div>
      </div>
      <div className="text-[#E0E3E5] text-4xl w-[600px] text-center mb-[160px] mt-[32px]">
        Mastering Deep Work: A Structured Path to Peak Productivity
      </div>
      <div>
        <section className="w-full bg-black py-24 px-4 flex justify-center">
          <div className="Curriculum_container w-[1280px] grid md:grid-cols-[1fr_minmax(400px,420px)] gap-[60px] items-start">
            {/* Left Side: Accordion */}
            <div className="Curriculum_left_side flex flex-col w-[560px] max-w-full">
              {courseModules.map((mod, index) => {
                const isExpanded = expandedModules[mod.id];
                return (
                  <div key={mod.id} className="flex flex-col">
                    {/* Module Header */}
                    <button
                      onClick={() => toggleModule(mod.id)}
                      className="flex items-center justify-between py-6 px-1 text-left group"
                    >
                      <div className="flex flex-col">
                        <span className="text-[#e2e4e9] text-[17px] font-medium tracking-wide">
                          {mod.title}
                        </span>
                        <span className="text-[#848a97] text-[13px] mt-1.5">
                          {mod.duration}
                        </span>
                      </div>
                      <div className="text-white ml-4">
                        {isExpanded ? (
                          <ChevronUp size={20} className="text-white" />
                        ) : (
                          <ChevronDown size={20} className="text-white" />
                        )}
                      </div>
                    </button>

                    {/* Sub-divider for expanded section */}
                    {isExpanded && mod.videos.length > 0 && (
                      <div className="w-[450px] h-[1px] bg-gradient-to-r from-transparent via-[#1a2b53] to-transparent" />
                    )}

                    {/* Videos List */}
                    {isExpanded && mod.videos.length > 0 && (
                      <div className="flex flex-col">
                        {mod.videos.map((video, vIndex) => (
                          <div key={vIndex} className="flex flex-col">
                            <div className="flex items-center justify-between py-5 px-1 group cursor-pointer hover:bg-white/[0.02] transition-colors">
                              <div className="flex items-center gap-4">
                                {/* Play Icon Circle */}
                                {video.active ? (
                                  <div className="w-[30px] h-[30px] rounded-full bg-white flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)] flex-shrink-0">
                                    <Play
                                      size={13}
                                      className="text-blue-600 ml-[2px]"
                                      fill="currentColor"
                                    />
                                  </div>
                                ) : (
                                  <div className="w-[30px] h-[30px] rounded-full bg-[#1b1e28] flex items-center justify-center flex-shrink-0 border border-zinc-800">
                                    <Play
                                      size={13}
                                      className="text-zinc-500 ml-[2px]"
                                      fill="currentColor"
                                    />
                                  </div>
                                )}

                                {/* Video Title */}
                                <span className="text-[#babdc4] text-[15px] font-normal tracking-wide">
                                  {video.title}
                                </span>
                              </div>

                              <div className="flex items-center gap-4 ml-4">
                                {video.preview && (
                                  <span className="bg-[#121c3a] text-blue-400 text-[11px] font-semibold px-3 py-1 rounded-full tracking-wide border border-blue-900/30">
                                    Preview
                                  </span>
                                )}
                                <span className="text-[#646a78] text-[14px] min-w-[42px] text-right font-medium">
                                  {video.time}
                                </span>
                              </div>
                            </div>

                            {/* Video Separator */}
                            {vIndex !== mod.videos.length - 1 && (
                              <div className="w-[450px] h-[1px] bg-gradient-to-r from-transparent via-[#1a2b53] to-transparent" />
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Module Separator */}
                    <div className="w-[450px] h-[1px] bg-gradient-to-r from-transparent via-[#1a2b53] to-transparent" />
                  </div>
                );
              })}
            </div>

            {/* Right Side: Card */}
            <div className="Curriculum_right_side bg-[#111214] border border-blue-900/20 rounded-3xl p-10 flex flex-col sticky top-10 w-[440px] h-[579px]">
              <h2 className="text-[#ececed] text-[24px] font-medium tracking-tight mb-8">
                Not only video lessons!
              </h2>

              <div className="flex flex-col gap-6 mb-auto">
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 w-[22px] h-[22px] rounded-full bg-[#1c2235] flex justify-center items-center flex-shrink-0">
                    <BadgeCheck size={14} className="text-white" />
                  </div>
                  <p className="text-zinc-400 text-[15px] leading-snug">
                    6h of videos - Step-by-step deep work strategies.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 w-[22px] h-[22px] rounded-full bg-[#1c2235] flex justify-center items-center flex-shrink-0">
                    <BadgeCheck size={14} className="text-white" />
                  </div>
                  <p className="text-zinc-400 text-[15px] leading-snug">
                    Templates & Trackers - Stay on track effortlessly.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 w-[22px] h-[22px] rounded-full bg-[#1c2235] flex justify-center items-center flex-shrink-0">
                    <BadgeCheck size={14} className="text-white" />
                  </div>
                  <p className="text-zinc-400 text-[15px] leading-snug">
                    Live Q&As - Expert guidance & accountability.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 w-[22px] h-[22px] rounded-full bg-[#1c2235] flex justify-center items-center flex-shrink-0">
                    <BadgeCheck size={14} className="text-white" />
                  </div>
                  <p className="text-zinc-400 text-[15px] leading-snug">
                    Exclusive Community - Connect with others.
                  </p>
                </div>
              </div>

              <button className="w-full bg-[#2a68eb] hover:bg-[#669EFF] transition-colors text-white font-medium py-3.5 rounded-xl text-[15px] shadow-[0_0_20px_rgba(42,104,235,0.2)]">
                Enroll now
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Curriculum;
