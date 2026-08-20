import {
  PieChart,
  TrendingUp,
  ShieldCheck,
  Smartphone,
  BellRing,
  Zap,
  Layers,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    icon: PieChart,
    iconColor: "text-orange-400",
    iconBg: "bg-orange-500/15 border-orange-500/30",
    tag: "Visual Analytics",
    title: "Granular Expense Categorization",
    desc: "Automatically categorize spending across Food, Bills, Shopping, Travel, and Health with real-time visual donut breakdowns.",
    colSpan: "lg:col-span-4",
  },
  {
    icon: TrendingUp,
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/15 border-emerald-500/30",
    tag: "Predictive Insights",
    title: "Intelligent Cash Flow Trends",
    desc: "Compare monthly income against outflows with dynamic multi-axis bar charts to spot hidden leaks and accelerate savings.",
    colSpan: "lg:col-span-8",
  },
  {
    icon: BellRing,
    iconColor: "text-purple-400",
    iconBg: "bg-purple-500/15 border-purple-500/30",
    tag: "Budget Guard",
    title: "Proactive Overspend Warnings",
    desc: "Define strict monthly caps for any category. Get visual progress gauges that alert you before you break your budget.",
    colSpan: "lg:col-span-7",
  },
  {
    icon: ShieldCheck,
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/15 border-blue-500/30",
    tag: "Security First",
    title: "Bank-Grade Encryption",
    desc: "Your data is protected with salted bcrypt password hashing, encrypted JWT tokens, and strict zero-knowledge protocols.",
    colSpan: "lg:col-span-5",
  },
  {
    icon: Zap,
    iconColor: "text-amber-400",
    iconBg: "bg-amber-500/15 border-amber-500/30",
    tag: "Speed Optimized",
    title: "3-Second Fast Logger",
    desc: "Record transactions in seconds with smart auto-complete, keyboard shortcuts, and instant category assignment.",
    colSpan: "lg:col-span-6",
  },
  {
    icon: Smartphone,
    iconColor: "text-pink-400",
    iconBg: "bg-pink-500/15 border-pink-500/30",
    tag: "Universal Sync",
    title: "Seamless Multi-Device Cloud",
    desc: "Enjoy a fluid experience whether on mobile, tablet, or 4K desktop monitor. Your data syncs instantly everywhere.",
    colSpan: "lg:col-span-6",
  },
];

function Features() {
  return (
    <section id="features" className="relative py-28 scroll-mt-20">
      {/* Ambient Spotlight */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[900px] rounded-full bg-purple-600/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 xl:px-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/25 bg-orange-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-orange-400 mb-4">
            <Sparkles size={13} />
            Engineered For Excellence
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
              Dominate Your Finances
            </span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-gray-300 leading-relaxed">
            Thoughtfully crafted features designed to give you clarity, confidence, and total control over your financial destiny.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`${item.colSpan} group relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-8 sm:p-10 backdrop-blur-2xl transition-all duration-300 hover:border-white/25 hover:bg-white/[0.06] hover:shadow-[0_25px_60px_rgba(0,0,0,0.6)] hover:-translate-y-1`}
              >
                {/* Header Icon + Tag */}
                <div className="flex items-center justify-between mb-8">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl border ${item.iconBg} ${item.iconColor} shadow-lg transition-transform group-hover:scale-110`}
                  >
                    <Icon size={26} />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 bg-white/[0.05] border border-white/10 px-3 py-1 rounded-full">
                    {item.tag}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-orange-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-gray-300">
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