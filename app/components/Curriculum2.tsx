"use client";

import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { div } from "framer-motion/client";

const testimonials = [
  {
    type: "video",
    name: "Sarah Jenkins",
    role: "UX Researcher",
    thumbnail:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600&h=800",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    type: "text",
    name: "Leo Zhang",
    role: "Data Analyst",
    quote:
      "The ability to stay in 'the zone' for hours is a superpower. This course taught me exactly how to trigger that state consistently.",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    type: "text",
    name: "Elena Rodriguez",
    role: "Project Manager",
    quote:
      "My team noticed the difference in my output within a week. I'm more organized and significantly less stressed.",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    type: "video",
    name: "Marcus Thorne",
    role: "Growth Hacker",
    thumbnail:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600&h=800",
    avatar: "https://i.pravatar.cc/150?img=4",
  },
  {
    type: "text",
    name: "Chloe Sims",
    role: "Student",
    quote:
      "Studying for finals used to be a nightmare of distractions. Now, I have a system that actually works for my brain.",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    type: "video",
    name: "Kevin Park",
    role: "UI Engineer",
    thumbnail:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600&h=800",
    avatar: "https://i.pravatar.cc/150?img=6",
  },
  {
    type: "text",
    name: "Rachel Green",
    role: "Copywriter",
    quote:
      "Writer's block is gone. By managing my energy instead of just my time, the creative flow comes much easier now.",
    avatar: "https://i.pravatar.cc/150?img=7",
  },
  {
    type: "text",
    name: "David Miller",
    role: "Consultant",
    quote:
      "A game-changer for anyone working remotely. I’ve regained 2 hours of my day back just by following the focus protocols.",
    avatar: "https://i.pravatar.cc/150?img=8",
  },
  {
    type: "video",
    name: "Sophia Chen",
    role: "Digital Nomad",
    thumbnail:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600&h=800",
    avatar: "https://i.pravatar.cc/150?img=9",
  },
  {
    type: "text",
    name: "Arjun Mehta",
    role: "App Developer",
    quote:
      "Implementing the deep work sessions helped me ship my latest project two weeks ahead of schedule. Incredible results.",
    avatar: "https://i.pravatar.cc/150?img=10",
  },
];

const Curriculum2 = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right"): void => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
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
              Testimonials
            </span>
          </div>
        </div>
      </div>
      <div className="text-[#E0E3E5] text-5xl w-[400px] text-center mb-[160px] mt-[32px]">
        Real Results from Real People
      </div>
      <div>
        <section className="Curriculum2_Slider w-[1280px] bg-black py-20 overflow-hidden">
          {/* Header */}
          <div className="flex justify-between items-center max-w-[1000px] mx-auto px-10 mb-10">
            <h2 className="text-white text-2xl font-medium">
              Join with 5K other students
            </h2>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => scroll("left")}
                className="w-10 h-10 rounded-full bg-[#161a27] text-white flex items-center justify-center hover:bg-[#1f2436]"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={() => scroll("right")}
                className="w-10 h-10 rounded-full bg-[#161a27] text-white flex items-center justify-center hover:bg-[#1f2436]"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Slider */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto px-4 scrollbar-hide scroll-smooth"
          >
            {testimonials.map((item, index) => {
              if (item.type === "text") {
                return (
                  <div
                    key={index}
                    className="min-w-[300px] h-[380px] bg-[#0c0e14] border border-blue-900/30 rounded-2xl p-6 flex flex-col"
                  >
                    <img src={item.avatar} className="w-10 h-10 rounded-full" />

                    <p className="text-gray-400 mt-6 flex-1">{item.quote}</p>

                    <div>
                      <h4 className="text-white">{item.name}</h4>
                      <p className="text-sm text-gray-500">{item.role}</p>
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={index}
                  className="min-w-[300px] h-[380px] rounded-2xl overflow-hidden relative"
                >
                  <img
                    src={item.thumbnail}
                    className="absolute w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-black/50" />

                  <div className="absolute inset-0 flex flex-col p-6">
                    <img src={item.avatar} className="w-10 h-10 rounded-full" />

                    <div className="flex-1 flex items-center justify-center">
                      <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                        <Play size={20} className="text-blue-600" />
                      </div>
                    </div>

                    <div className="text-white">
                      <h4>{item.name}</h4>
                      <p className="text-sm">{item.role}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 🔥 Hide Scrollbar */}
          <style jsx>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
            .scrollbar-hide {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}</style>
        </section>
      </div>
    </div>
  );
};

export default Curriculum2;
