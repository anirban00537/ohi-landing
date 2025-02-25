import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Tasnim Rahman",
    location: "Dhaka",
    rating: 5,
    image: "/reviews/review-1.jpg",
    review:
      "Ohi apu is incredibly talented! She did my bridal makeup and I couldn&apos;t have been happier. Her attention to detail and understanding of what suits different face types is remarkable.",
    service: "Bridal Makeup",
  },
  {
    name: "Fariha Akter",
    location: "Khulna",
    rating: 5,
    image: "/reviews/review-2.jpg",
    review:
      "I&apos;ve been to many makeup artists, but Ohi&apos;s work stands out. She knows exactly how to enhance your natural beauty while keeping the look elegant and fresh.",
    service: "Party Makeup",
  },
  {
    name: "Nusrat Jahan",
    location: "Dhaka",
    rating: 5,
    image: "/reviews/review-3.jpg",
    review:
      "Amazing experience! Ohi apu has magic in her hands. She transformed my look for my sister&apos;s wedding and everyone was asking about my makeup artist.",
    service: "Party Makeup",
  },
  {
    name: "Sabrina Islam",
    location: "Jessore",
    rating: 5,
    image: "/reviews/review-4.jpg",
    review:
      "Professional, punctual, and perfect results! I love how she takes time to understand what you want and delivers even better than expected.",
    service: "Fashion Makeup",
  },
  {
    name: "Raisa Khan",
    location: "Dhaka",
    rating: 5,
    image: "/reviews/review-5.jpg",
    review:
      "The best makeup artist in Bangladesh! Her work is flawless and long-lasting. I especially love how she does eye makeup - absolutely stunning!",
    service: "Bridal Makeup",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="relative py-32 overflow-hidden">
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
            Client <span className="text-gradient">Reviews</span>
          </h2>
          <p className="text-xl text-neutral-400 leading-relaxed reveal">
            Don&apos;t just take our word for it. Here&apos;s what our beautiful
            clients have to say about their experience.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl border border-neutral-800 hover:border-emerald-500 transition-all duration-300 reveal"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

              {/* Content */}
              <div className="relative space-y-6">
                {/* Quote Icon */}
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Quote className="w-6 h-6 text-emerald-500" />
                </div>

                {/* Review Text */}
                <p className="text-neutral-300 leading-relaxed">
                  {review.review}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-emerald-500 text-emerald-500"
                    />
                  ))}
                </div>

                {/* Client Info */}
                <div className="flex items-center justify-between pt-4 border-t border-neutral-800">
                  <div>
                    <h4 className="font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                      {review.name}
                    </h4>
                    <p className="text-sm text-neutral-400">
                      {review.location}
                    </p>
                  </div>
                  <span className="text-sm text-emerald-500">
                    {review.service}
                  </span>
                </div>
              </div>

              {/* Decorative Corner */}
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
