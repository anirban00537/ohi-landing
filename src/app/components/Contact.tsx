import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

const locations = [
  {
    title: "Khulna Studio",
    address: "Shonadanga grameen abashik, Khulna",
    type: "main",
  },
  {
    title: "Dhaka Studio",
    address: "Merul badda, DIT project, road number 5",
    subAddress: "Dhaka, Bangladesh, 9001",
    type: "branch",
  },
];

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+880 1857-711456",
    link: "tel:01857711456",
  },
  {
    icon: Mail,
    title: "Email",
    value: "afohi97@gmail.com",
    link: "mailto:afohi97@gmail.com",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
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
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-neutral-400 leading-relaxed reveal">
            Ready to transform your look? Reach out to book an appointment or
            learn more about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Locations */}
          <div className="space-y-8 reveal">
            <h3 className="text-2xl font-bold text-gradient mb-8">
              Studio Locations
            </h3>
            <div className="grid gap-8">
              {locations.map((location, index) => (
                <div
                  key={index}
                  className="group relative p-6 rounded-2xl border border-neutral-800 hover:border-emerald-500 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                  <div className="relative space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="w-5 h-5 text-emerald-500" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                          {location.title}
                        </h4>
                        <p className="text-neutral-400 mt-2">
                          {location.address}
                        </p>
                        {location.subAddress && (
                          <p className="text-neutral-400">
                            {location.subAddress}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 reveal" style={{ animationDelay: "200ms" }}>
            <h3 className="text-2xl font-bold text-gradient mb-8">
              Contact Details
            </h3>

            {/* Contact Cards */}
            <div className="grid gap-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="group relative p-6 rounded-2xl border border-neutral-800 hover:border-emerald-500 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                  <div className="relative flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-5 h-5 text-emerald-500" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                        {info.title}
                      </h4>
                      <p className="text-neutral-400 mt-2">{info.value}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Business Hours */}
            <div className="relative p-6 rounded-2xl border border-neutral-800 group hover:border-emerald-500 transition-all duration-300">
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

              <div className="relative flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-5 h-5 text-emerald-500" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                    Business Hours
                  </h4>
                  <p className="text-neutral-400 mt-2">
                    Available for appointments
                  </p>
                  <p className="text-neutral-400">
                    Contact us to schedule your session
                  </p>
                </div>
              </div>
            </div>
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
