import { Star, Quote, CheckCircle2 } from "lucide-react";

const testimonials = [
  {
    name: "Rohan Verma",
    role: "Senior Software Engineer",
    company: "Tech Lead @ Stripe Ecosystem",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=140&auto=format&fit=crop&q=80",
    rating: 5,
    quote:
      "SpendWise completely transformed how I track my monthly salary. The visual charts and instant category breakdown helped me eliminate ₹18,000 in redundant monthly subscriptions in just two billing cycles.",
  },
  {
    name: "Priya Nair",
    role: "Independent Design Consultant",
    company: "Freelance Creative Director",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=140&auto=format&fit=crop&q=80",
    rating: 5,
    quote:
      "As a consultant with irregular client payouts, tracking cash flow used to be painful. SpendWise gives me absolute clarity on my net balance and runway. It’s easily the highest ROI tool in my stack.",
  },
  {
    name: "Amit Patel",
    role: "Founder & E-Commerce Director",
    company: "Founder @ NexaGoods",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=140&auto=format&fit=crop&q=80",
    rating: 5,
    quote:
      "The UI is unbelievably fast, sleek, and intuitive. Logging daily expenses takes 3 seconds, and the monthly budget caps keep me honest. Highly recommended to anyone serious about growing their net worth.",
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 scroll-mt-20">
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute left-10 bottom-10 h-[500px] w-[500px] rounded-full bg-purple-600/15 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 xl:px-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/25 bg-purple-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-purple-300 mb-4">
            <Star size={13} className="text-amber-400 fill-amber-400" />
            Loved By High Performers
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Trusted by Builders &{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              Smart Savers
            </span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-gray-300 leading-relaxed">
            Join thousands of professionals and creators taking total ownership of their personal financial trajectory.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-8 sm:p-10 backdrop-blur-2xl transition-all duration-300 hover:border-white/25 hover:bg-white/[0.06] hover:shadow-[0_25px_60px_rgba(0,0,0,0.6)] hover:-translate-y-1"
            >
              <div>
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1.5 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <Quote size={24} className="text-white/15" />
                </div>

                {/* Quote Text */}
                <p className="text-sm sm:text-base leading-relaxed text-gray-200 italic mb-8">
                  "{t.quote}"
                </p>
              </div>

              {/* User Bio */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-13 w-13 rounded-full object-cover ring-2 ring-orange-500/40 shadow-md"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-base font-bold text-white">{t.name}</h4>
                    <CheckCircle2 size={15} className="text-emerald-400" />
                  </div>
                  <p className="text-xs font-medium text-gray-400">{t.role}</p>
                  <p className="text-[11px] text-gray-500">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;
