"use client";
import {
  Sparkles,
  Star,
  Palette,
  Heart,
  Brush,
  Camera,
  Wand2,
  Gem,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const skills = [
  {
    name: "Bridal Makeup",
    percentage: 98,
    icon: Sparkles,
    color: "emerald",
    description: "Expert in traditional and modern bridal looks",
  },
  {
    name: "Party Makeup",
    percentage: 95,
    icon: Star,
    color: "teal",
    description: "Specializing in glamorous and elegant styles",
  },
  {
    name: "Fashion Makeup",
    percentage: 92,
    icon: Palette,
    color: "emerald",
    description: "Creative and trendsetting looks",
  },
  {
    name: "Eye Makeup",
    percentage: 96,
    icon: Heart,
    color: "teal",
    description: "Detailed and precise eye enhancement",
  },
  {
    name: "Base Makeup",
    percentage: 97,
    icon: Brush,
    color: "emerald",
    description: "Flawless and long-lasting foundation",
  },
  {
    name: "Photography Makeup",
    percentage: 94,
    icon: Camera,
    color: "teal",
    description: "Camera-ready and photogenic looks",
  },
  {
    name: "Special Effects",
    percentage: 90,
    icon: Wand2,
    color: "emerald",
    description: "Creative and artistic transformations",
  },
  {
    name: "Skin Care",
    percentage: 93,
    icon: Gem,
    color: "teal",
    description: "Expert skincare knowledge and application",
  },
];

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="skills"
      className="relative py-32 overflow-hidden"
      ref={sectionRef}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 animated-gradient" />
        <div className="absolute inset-0 space-dots opacity-20" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 reveal shine">
            Professional <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-neutral-400 leading-relaxed reveal">
            Years of experience and continuous learning have helped me master
            these skills to provide the best service to my clients.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl border border-neutral-800 hover:border-emerald-500 transition-all duration-500 reveal"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

              {/* Content */}
              <div className="relative space-y-4">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-12 h-12 rounded-xl bg-${skill.color}-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}
                  >
                    <skill.icon className={`w-6 h-6 text-${skill.color}-500`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-neutral-400">
                      {skill.description}
                    </p>
                  </div>
                </div>

                {/* Progress Bar Container */}
                <div className="relative h-3 bg-neutral-800 rounded-full overflow-hidden">
                  {/* Progress Bar */}
                  <div
                    className={`absolute h-full bg-gradient-to-r from-${skill.color}-500 to-${skill.color}-400 rounded-full transition-all duration-1000 ease-out`}
                    style={{
                      width: isVisible ? `${skill.percentage}%` : "0%",
                    }}
                  />
                </div>

                {/* Percentage */}
                <div className="flex justify-end">
                  <span className={`text-${skill.color}-500 font-bold`}>
                    {isVisible ? `${skill.percentage}%` : "0%"}
                  </span>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-emerald-500/20 opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl animate-float opacity-30" />
      <div
        className="absolute bottom-1/4 -right-20 w-40 h-40 bg-teal-500/20 rounded-full blur-3xl animate-float opacity-30"
        style={{ animationDelay: "-2s" }}
      />
    </section>
  );
}
