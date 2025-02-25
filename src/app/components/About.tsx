import {
  Award,
  Users,
  Sparkles,
  Palette,
  Briefcase,
  GraduationCap,
  MapPin,
  Calendar,
} from "lucide-react";

const achievements = [
  {
    icon: Award,
    title: "Certified Professional",
    description: "Internationally certified by Raphael Oliver and Selinamanir",
  },
  {
    icon: Users,
    title: "Growing Community",
    description: "4.4K+ friends and growing network of beauty enthusiasts",
  },
  {
    icon: Sparkles,
    title: "Expert Artistry",
    description: "Specialized in bridal, party, and fashion makeup",
  },
  {
    icon: Palette,
    title: "Creative Vision",
    description: "Unique approach to enhance natural beauty",
  },
];

const timeline = [
  {
    title: "Internationally Certified Makeup Artist",
    organization: "Raphael Oliver",
    period: "October 2023 - Present",
    type: "work",
  },
  {
    title: "Certified International Makeup Artist",
    organization: "Selina Manir",
    period: "December 2022 - Present",
    type: "work",
  },
  {
    title: "Software Professional",
    organization: "Softronixs System Ltd.",
    period: "December 2020 - Present",
    location: "Jessore, Khulna, Bangladesh",
    type: "work",
  },
  {
    title: "Owner",
    organization: "Ohi's makeover and fashion",
    period: "June 2020 - Present",
    type: "work",
  },
  {
    title: "B.Sc in Computer Science & Engineering (CSE)",
    type: "education",
  },
  {
    title: "High School",
    organization: "SOS Herman Gmeiner High School",
    location: "Khulna, Bangladesh",
    type: "education",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
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
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-neutral-400 leading-relaxed reveal">
            Dual professional with expertise in both makeup artistry and
            software engineering. Passionate about creating stunning
            transformations and delivering excellence in both fields.
          </p>
        </div>

        {/* Personal Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6 reveal">
            <h3 className="text-2xl font-bold text-gradient">
              Professional Overview
            </h3>
            <p className="text-neutral-400 leading-relaxed">
              An internationally certified makeup artist and software
              professional based in Bangladesh. Currently serving clients in
              both Dhaka and Khulna, while also working as a software
              professional at Softronixs System Ltd.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-neutral-400">
                <MapPin className="w-4 h-4 text-emerald-500" />
                <span>Based in Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-400">
                <Calendar className="w-4 h-4 text-emerald-500" />
                <span>Born August 30</span>
              </div>
            </div>
          </div>
          <div className="space-y-6 reveal" style={{ animationDelay: "200ms" }}>
            <h3 className="text-2xl font-bold text-gradient">Current Focus</h3>
            <p className="text-neutral-400 leading-relaxed">
              Balancing roles as a makeup artist and tech professional, bringing
              creativity and precision to both fields. Specialized in bridal,
              party, and fashion makeup while maintaining a successful career in
              software development.
            </p>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl border border-neutral-800 hover:border-emerald-500 transition-all duration-300 reveal"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

              {/* Icon */}
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <achievement.icon className="w-6 h-6 text-emerald-500" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-emerald-400 transition-colors duration-300">
                  {achievement.title}
                </h3>
                <p className="text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gradient mb-8 reveal">
            Experience & Education
          </h3>
          <div className="space-y-6">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="relative pl-8 border-l border-neutral-800 reveal"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute -left-3 top-0">
                  {item.type === "work" ? (
                    <Briefcase className="w-6 h-6 text-emerald-500" />
                  ) : (
                    <GraduationCap className="w-6 h-6 text-emerald-500" />
                  )}
                </div>
                <div className="group">
                  <h4 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                    {item.title}
                  </h4>
                  {item.organization && (
                    <p className="text-neutral-400">{item.organization}</p>
                  )}
                  {item.period && (
                    <p className="text-sm text-neutral-500">{item.period}</p>
                  )}
                  {item.location && (
                    <p className="text-sm text-neutral-500">{item.location}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 -left-20 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 -right-20 w-40 h-40 bg-teal-500/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "-2s" }}
        />
      </div>
    </section>
  );
}
