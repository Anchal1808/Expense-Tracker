import { ShieldCheck, Users, TrendingUp, Zap } from "lucide-react";

function StatsBar() {
  const stats = [
    {
      icon: TrendingUp,
      value: "₹50Cr+",
      label: "Volume Logged",
      desc: "Across active user accounts",
    },
    {
      icon: Users,
      value: "25,000+",
      label: "Active Budgeters",
      desc: "Tracking expenses daily",
    },
    {
      icon: Zap,
      value: "< 3s",
      label: "Logging Speed",
      desc: "Fast transaction creation",
    },
    {
      icon: ShieldCheck,
      value: "256-Bit",
      label: "Data Encryption",
      desc: "Protected user records",
    },
  ];

  return (
    <section className="relative py-8 border-y border-slate-800/80 bg-[#0B0F19]">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="flex flex-col">
                <div className="flex items-center gap-2 text-slate-400 mb-1">
                  <Icon size={16} className="text-emerald-400" />
                  <span className="text-xs font-medium uppercase tracking-wider">{stat.label}</span>
                </div>
                <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {stat.value}
                </p>
                <p className="text-xs text-slate-400 mt-0.5">
                  {stat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default StatsBar;
