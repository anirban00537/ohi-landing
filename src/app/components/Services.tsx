import { Sparkles, Crown, Camera, Star, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Crown,
    title: "BRIDAL",
    description:
      "Complete bridal makeup services with international techniques",
    features: [
      "Pre-bridal consultation",
      "Premium products",
      "Long-lasting finish",
      "Photo-ready looks",
    ],
  },
  {
    icon: Sparkles,
    title: "PARTY",
    description: "Glamorous looks for special occasions and events",
    features: [
      "Trendy styles",
      "Event-appropriate",
      "Lasting coverage",
      "Custom looks",
    ],
  },
  {
    icon: Camera,
    title: "FASHION",
    description: "Professional makeup for photoshoots and fashion shows",
    features: [
      "Editorial looks",
      "Camera-ready",
      "Creative designs",
      "Professional finish",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-32 overflow-hidden">
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
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-neutral-400 leading-relaxed reveal">
            Professional makeup services tailored to your needs, ensuring you
            look and feel your absolute best for any occasion.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative reveal"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Card */}
              <div className="relative p-8 rounded-2xl border border-neutral-800 hover:border-emerald-500 transition-all duration-500 h-full">
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                {/* Content */}
                <div className="relative space-y-6">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <service.icon className="w-8 h-8 text-emerald-500" />
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300"
                      >
                        <Star className="w-4 h-4 text-emerald-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action Button */}
                  <button className="flex items-center gap-2 text-emerald-500 hover:text-emerald-400 transition-colors duration-300">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/3 -left-20 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute top-2/3 -right-20 w-40 h-40 bg-teal-500/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "-3s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/2 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "-5s" }}
        />
      </div>
    </section>
  );
}
