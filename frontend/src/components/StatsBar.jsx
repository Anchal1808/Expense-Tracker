import { ShieldCheck, Users, TrendingUp, Zap, Sparkles } from "lucide-react";

function StatsBar() {
  const stats = [
    {
      icon: TrendingUp,
      value: "₹50Cr+",
      label: "Total Volume Tracked",
      sub: "Across all currencies",
      tint: "text-emerald-400",
      bg: "bg-emerald-500/10 border-emerald-500/20",
    },
    {
      icon: Users,
      value: "25,000+",
      label: "Active Budgeters",
      sub: "Growing daily",
      tint: "text-orange-400",
      bg: "bg-orange-500/10 border-orange-500/20",
    },
    {
      icon: Zap,
      value: "99.99%",
      label: "Cloud Sync Uptime",
      sub: "Real-time accuracy",
      tint: "text-purple-400",
      bg: "bg-purple-500/10 border-purple-500/20",
    },
    {
      icon: ShieldCheck,
      value: "256-Bit",
      label: "Bank-Grade Encryption",
      sub: "Zero knowledge privacy",
      tint: "text-blue-400",
      bg: "bg-blue-500/10 border-blue-500/20",
    },
  ];

  return (
    <section className="relative z-20 py-10">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-8 sm:p-10 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
          
          {/* Subtle Glow Lines */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-40 w-40 rounded-full bg-orange-500/15 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 -bottom-20 h-40 w-40 rounded-full bg-purple-500/15 blur-3xl" />

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-white/10">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className={`flex items-start gap-4 ${
                    idx > 0 ? "pt-6 sm:pt-0 lg:pl-8" : ""
                  }`}
                >
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border ${stat.bg} ${stat.tint} shadow-lg`}>
                    <Icon size={22} />
                  </div>
                  <div>
                    <h4 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                      {stat.value}
                    </h4>
                    <p className="text-sm font-semibold text-gray-200 mt-1">
                      {stat.label}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      {stat.sub}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsBar;
