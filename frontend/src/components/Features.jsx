import {
  PieChart,
  TrendingUp,
  ShieldCheck,
  Smartphone,
  BellRing,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: PieChart,
    title: "Granular Category Breakdown",
    desc: "Categorize spending into Food, Travel, Bills, Shopping, and Health. See your exact monthly distribution in seconds.",
  },
  {
    icon: TrendingUp,
    title: "6-Month Cashflow History",
    desc: "Compare income against monthly expenses to spot trends, maintain positive net savings, and build long-term runway.",
  },
  {
    icon: BellRing,
    title: "Monthly Budget Guard",
    desc: "Set a hard monthly spending limit. Get visual progress gauges that clearly show when you are approaching your cap.",
  },
  {
    icon: ShieldCheck,
    title: "Zero-Knowledge Data Privacy",
    desc: "Protected by salted bcrypt password hashing and signed JWT authorization. Your financial data stays strictly yours.",
  },
  {
    icon: Zap,
    title: "Instant 3-Second Logger",
    desc: "Clean, keyboard-friendly transaction modal. Log expenses immediately without cumbersome steps or slow loading.",
  },
  {
    icon: Smartphone,
    title: "Responsive Everywhere",
    desc: "Optimized for quick logging on your smartphone and in-depth financial analysis on 4K desktop screens.",
  },
];

function Features() {
  return (
    <section id="features" className="relative py-24 scroll-mt-14">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
            Core Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-2">
            Everything you need. Nothing you don't.
          </h2>
          <p className="mt-4 text-base text-slate-300">
            Built strictly for utility. No confusing cryptocurrency widgets or sponsored credit card offers.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-[#0E1322] p-7 transition-colors hover:border-slate-700 hover:bg-[#111728]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800 border border-slate-700 text-emerald-400 mb-5">
                  <Icon size={20} />
                </div>

                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Features;