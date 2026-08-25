import { UserPlus, PlusCircle, LineChart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    step: "01",
    icon: UserPlus,
    title: "Create your free account",
    desc: "Takes under 30 seconds. No credit card or sensitive bank credentials needed.",
  },
  {
    step: "02",
    icon: PlusCircle,
    title: "Log transactions as you go",
    desc: "Record daily outgoings and monthly earnings in 3 seconds with smart category tags.",
  },
  {
    step: "03",
    icon: LineChart,
    title: "See trends & stay on budget",
    desc: "Review your category donut breakdown and keep spending within your monthly target.",
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 border-t border-slate-800/80 scroll-mt-14">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-2">
            Up and running in three simple steps
          </h2>
          <p className="mt-4 text-base text-slate-300">
            No steep learning curve. Start gaining financial clarity right away.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="rounded-2xl border border-slate-800 bg-[#0E1322] p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-sm font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                      STEP {item.step}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 border border-slate-700 text-slate-300">
                      <Icon size={18} />
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA trigger */}
        <div className="mt-14 text-center">
          <Link
            to="/register"
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors shadow-sm"
          >
            <span>Get Started Now</span>
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;
