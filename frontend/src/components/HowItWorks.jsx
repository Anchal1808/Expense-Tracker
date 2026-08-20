import { UserPlus, PlusCircle, LineChart, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    step: "01",
    icon: UserPlus,
    title: "Create Account in 30s",
    desc: "Start with zero friction. Create your secure SpendWise account, set your primary currency, and customize your financial goals.",
    badge: "Fast Onboarding",
    accent: "from-orange-500 to-amber-500",
  },
  {
    step: "02",
    icon: PlusCircle,
    title: "Log Cash Inflows & Outflows",
    desc: "Record expenses and income streams with one click. Categorize expenditures into Food, Travel, Bills, Shopping, or custom tags.",
    badge: "Smart Logging",
    accent: "from-emerald-500 to-teal-400",
  },
  {
    step: "03",
    icon: LineChart,
    title: "Unlock Growth Insights",
    desc: "Visualize your net savings rate, monitor dynamic category budgets, and optimize your monthly cash flow with automated reports.",
    badge: "Wealth Growth",
    accent: "from-purple-500 to-indigo-400",
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-28 scroll-mt-20">
      {/* Background glow */}
      <div className="pointer-events-none absolute right-10 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 xl:px-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-4">
            <CheckCircle size={13} />
            Frictionless Roadmap
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            How SpendWise{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Transforms Your Habits
            </span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-gray-300 leading-relaxed">
            From setup to automated intelligence, experience how simple true financial mastery can be.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="group relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-8 sm:p-10 backdrop-blur-2xl transition-all duration-300 hover:border-white/25 hover:bg-white/[0.06] hover:shadow-[0_25px_60px_rgba(0,0,0,0.6)] hover:-translate-y-1"
              >
                {/* Step Pill */}
                <div className="flex items-center justify-between mb-8">
                  <span className={`text-4xl font-black bg-gradient-to-r ${item.accent} bg-clip-text text-transparent`}>
                    {item.step}
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white shadow-lg group-hover:scale-110 transition-transform">
                    <Icon size={22} className="text-orange-400" />
                  </div>
                </div>

                <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 bg-white/[0.05] border border-white/10 px-3 py-1 rounded-full mb-4 inline-block">
                  {item.badge}
                </span>

                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base leading-relaxed text-gray-300">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA trigger */}
        <div className="mt-16 text-center">
          <Link
            to="/register"
            className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-orange-500 via-orange-500 to-amber-500 px-8 py-4 text-base font-bold text-white shadow-[0_0_30px_rgba(249,115,22,0.35)] transition-all duration-300 hover:shadow-[0_0_45px_rgba(249,115,22,0.55)] hover:scale-[1.03]"
          >
            <span>Start Your 30-Second Setup</span>
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;
