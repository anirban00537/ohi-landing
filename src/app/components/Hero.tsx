import Image from "next/image";
import { ChevronDown, Sparkles, Star } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 animated-gradient opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-900/40 via-transparent to-transparent opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-50" />
        <div className="absolute inset-0 space-dots opacity-10" />
      </div>

      {/* Premium corner decorations */}
      <div className="absolute top-0 left-0 w-64 h-64">
        <div className="absolute top-0 left-0 w-full h-full border-l-2 border-t-2 border-emerald-500/20 rounded-tl-3xl" />
        <div className="absolute top-4 left-4 w-2 h-2 bg-emerald-500/40 rounded-full" />
        <div className="absolute top-4 left-8 w-2 h-2 bg-emerald-500/20 rounded-full" />
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64">
        <div className="absolute bottom-0 right-0 w-full h-full border-r-2 border-b-2 border-emerald-500/20 rounded-br-3xl" />
        <div className="absolute bottom-4 right-4 w-2 h-2 bg-emerald-500/40 rounded-full" />
        <div className="absolute bottom-4 right-8 w-2 h-2 bg-emerald-500/20 rounded-full" />
      </div>

      <div className="container mx-auto px-6 pt-32 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="relative">
            {/* Premium badge */}
            <div className="absolute -top-12 left-0 flex items-center gap-2 reveal">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-emerald-500 fill-emerald-500" />
                <Star className="w-4 h-4 text-emerald-500 fill-emerald-500" />
                <Star className="w-4 h-4 text-emerald-500 fill-emerald-500" />
              </div>
              <span className="text-sm text-neutral-400 tracking-wider">
                PREMIUM ARTISTRY
              </span>
            </div>

            <div className="space-y-4 mb-8">
              <div className="overflow-hidden">
                <h1 className="text-6xl md:text-8xl font-bold leading-tight reveal shine">
                  HI THERE
                </h1>
              </div>
              <div className="overflow-hidden delay-200">
                <h2 className="text-6xl md:text-8xl font-bold leading-tight reveal text-stroke">
                  I'M OHI
                </h2>
              </div>
              <div className="overflow-hidden delay-300">
                <div className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-500 bg-clip-text text-transparent text-6xl md:text-8xl font-bold reveal shine">
                  MAKEUP
                </div>
              </div>
              <div className="overflow-hidden delay-400">
                <h2 className="text-6xl md:text-8xl font-bold leading-tight reveal text-stroke">
                  ARTIST
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-6 text-neutral-400 reveal delay-500">
              <div className="flex items-center gap-4">
                <Sparkles className="w-5 h-5 text-emerald-500" />
                <span className="text-sm tracking-wider">DISCOVER THE</span>
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-emerald-500/50 to-transparent"></div>
              <span className="text-sm tracking-wider">PROFESSIONAL</span>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 mt-12 reveal delay-700">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-lg blur" />
                <div className="relative bg-black/50 backdrop-blur-sm border border-emerald-500/10 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-gradient mb-1">
                    4.4K+
                  </div>
                  <div className="text-sm text-neutral-400">Happy Clients</div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-lg blur" />
                <div className="relative bg-black/50 backdrop-blur-sm border border-emerald-500/10 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-gradient mb-1">
                    5★
                  </div>
                  <div className="text-sm text-neutral-400">Rating</div>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative aspect-[3/4] w-full max-w-lg mx-auto">
            {/* Multiple layered glows for depth */}
            <div className="absolute -z-10 inset-0 blur-3xl opacity-20 animate-float">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500 to-transparent rounded-full transform rotate-12"></div>
            </div>
            <div
              className="absolute -z-10 inset-0 blur-2xl opacity-25 animate-float"
              style={{ animationDelay: "-2s" }}
            >
              <div className="absolute inset-0 bg-gradient-to-bl from-teal-500 to-transparent rounded-full transform -rotate-12"></div>
            </div>
            <div
              className="absolute -z-10 inset-0 blur-xl opacity-30 animate-float"
              style={{ animationDelay: "-4s" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
            </div>

            {/* Image frame */}
            <div
              className="absolute inset-0 border-2 border-emerald-500/10 rounded-3xl transform rotate-6 animate-float"
              style={{ animationDelay: "-3s" }}
            />
            <div
              className="absolute inset-0 border-2 border-emerald-500/10 rounded-3xl transform -rotate-6 animate-float"
              style={{ animationDelay: "-5s" }}
            />

            {/* Main image with glow effect */}
            <div
              className="relative w-full h-full glow animate-float rounded-2xl overflow-hidden backdrop-blur-sm"
              style={{ animationDelay: "-1s" }}
            >
              <Image
                src="/img-1.png"
                alt="Ohi - Professional Makeup Artist"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Decorative elements */}
            <div
              className="absolute top-0 left-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-xl animate-float"
              style={{ animationDelay: "-3s" }}
            ></div>
            <div
              className="absolute bottom-0 right-0 w-40 h-40 bg-teal-500/10 rounded-full blur-xl animate-float"
              style={{ animationDelay: "-5s" }}
            ></div>

            {/* Premium accents */}
            <div className="absolute -right-4 top-1/4 w-8 h-8">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full blur-lg opacity-60 animate-pulse"></div>
              <div className="relative w-full h-full flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 reveal delay-1000">
          <span className="text-sm text-neutral-400 tracking-wider">
            SCROLL
          </span>
          <ChevronDown className="w-5 h-5 text-emerald-500 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
