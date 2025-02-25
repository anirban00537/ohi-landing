import { Instagram, Facebook, Heart, Users, Star } from "lucide-react";

const socialLinks = [
  {
    icon: Instagram,
    label: "Follow on Instagram",
    href: "#",
  },
  {
    icon: Facebook,
    label: "Connect on Facebook",
    href: "#",
  },
];

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative py-20 overflow-hidden border-t border-neutral-800">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 animated-gradient" />
        <div className="absolute inset-0 space-dots opacity-20" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              Ohi's <span className="text-gradient">Makeover</span>
            </h3>
            <p className="text-neutral-400 leading-relaxed">
              Transforming beauty through professional artistry and creative
              vision.
            </p>
            <div className="flex items-center gap-2 text-neutral-400">
              <Users className="w-4 h-4 text-emerald-500" />
              <span className="text-emerald-500 font-bold">4.4K+</span>
              <span>Friends</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-gradient">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-neutral-400 hover:text-emerald-500 transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-gradient">Services</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-neutral-400">
                <Star className="w-4 h-4 text-emerald-500" />
                <span>Bridal Makeup</span>
              </li>
              <li className="flex items-center gap-2 text-neutral-400">
                <Star className="w-4 h-4 text-emerald-500" />
                <span>Party Makeup</span>
              </li>
              <li className="flex items-center gap-2 text-neutral-400">
                <Star className="w-4 h-4 text-emerald-500" />
                <span>Fashion Makeup</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-gradient">Connect</h4>
            <div className="flex flex-col space-y-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="group flex items-center gap-3 text-neutral-400 hover:text-emerald-500 transition-colors duration-300"
                >
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <social.icon className="w-4 h-4" />
                  </div>
                  <span>{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-400 text-sm text-center md:text-left">
              © 2024 Ohi's Makeover. All rights reserved.
            </p>
            <p className="flex items-center gap-2 text-sm text-neutral-400">
              Made with <Heart className="w-4 h-4 text-emerald-500" /> in
              Bangladesh
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 -left-20 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl animate-float opacity-30" />
        <div
          className="absolute bottom-1/4 -right-20 w-40 h-40 bg-teal-500/20 rounded-full blur-3xl animate-float opacity-30"
          style={{ animationDelay: "-2s" }}
        />
      </div>
    </footer>
  );
}
