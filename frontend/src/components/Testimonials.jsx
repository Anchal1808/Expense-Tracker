import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rohan Verma",
    role: "Software Developer",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=140&auto=format&fit=crop&q=80",
    quote:
      "SpendWise helped me realize I was spending over ₹15,000 every month on food deliveries and forgotten SaaS subscriptions. Having the clean monthly budget widget in front of me keeps me disciplined.",
  },
  {
    name: "Priya Nair",
    role: "UX Designer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=140&auto=format&fit=crop&q=80",
    quote:
      "I love how fast it is. Most expense apps are packed with useless ads and bank integrations that break every week. SpendWise gives me instant logging with zero lag.",
  },
  {
    name: "Amit Patel",
    role: "Small Business Owner",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=140&auto=format&fit=crop&q=80",
    quote:
      "The 6-month expense chart and category donut give me an exact birds-eye view of cash flow. It's clean, minimalist, and does exactly what it promises.",
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 border-t border-slate-800/80 scroll-mt-14">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
            User Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-2">
            Trusted by practical savers
          </h2>
          <p className="mt-4 text-base text-slate-300">
            Real feedback from professionals who track their money with SpendWise.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-slate-800 bg-[#0E1322] p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>

                <p className="text-sm leading-relaxed text-slate-300 mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-5 border-t border-slate-800">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-10 w-10 rounded-full object-cover border border-slate-700"
                />
                <div>
                  <h4 className="text-sm font-semibold text-white">{t.name}</h4>
                  <p className="text-xs text-slate-400">{t.role}</p>
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
