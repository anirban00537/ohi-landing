"use client";
import Link from "next/link";
import { Star, Menu, X } from "lucide-react";
import { useState } from "react";

const menuItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 backdrop-blur-sm">
      <div className="absolute inset-0 bg-black/40" />

      {/* Premium top border */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

      <div className="container mx-auto px-6 py-4 relative">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="relative group">
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg blur opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-black px-2 py-1 rounded-lg border border-emerald-500/20">
                  <Star className="w-4 h-4 text-emerald-500" />
                </div>
              </div>
              <div>
                <span className="text-xl font-bold">
                  Ohi's <span className="text-gradient">Makeover</span>
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="relative px-4 py-2 text-sm text-neutral-400 hover:text-white transition-colors duration-300 group"
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-emerald-500/50 to-teal-500/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Link>
            ))}
          </div>

          {/* Contact Button */}
          <a
            href="mailto:afohi97@gmail.com"
            className="hidden md:flex items-center gap-2 px-4 py-2 text-sm relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 blur" />
            <div className="absolute inset-0 bg-black/50 rounded-lg border border-emerald-500/20 opacity-0 group-hover:opacity-100 transition-all duration-300" />
            <span className="relative text-neutral-400 group-hover:text-emerald-500 transition-colors duration-300">
              Say hi - afohi97@gmail.com →
            </span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {isMenuOpen ? (
              <X className="w-5 h-5 text-neutral-400" />
            ) : (
              <Menu className="w-5 h-5 text-neutral-400" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg border-t border-emerald-500/10 transition-all duration-300 ${
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-col space-y-2">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-2 text-neutral-400 hover:text-white transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="mailto:afohi97@gmail.com"
                className="px-4 py-2 text-neutral-400 hover:text-emerald-500 transition-colors duration-300"
              >
                Contact →
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
