import { Link } from "react-router-dom";
import {
  ArrowRight,
  TrendingUp,
  Wallet,
  ArrowDownRight,
  ShieldCheck,
  CheckCircle2,
  PieChart,
} from "lucide-react";

function Hero() {
  const chartData = [
    { month: "Jan", amount: 28400, height: 60 },
    { month: "Feb", amount: 34200, height: 75 },
    { month: "Mar", amount: 29800, height: 65 },
    { month: "Apr", amount: 41500, height: 90 },
    { month: "May", amount: 31200, height: 68 },
    { month: "Jun", amount: 26800, height: 58 },
  ];

  const recentItems = [
    { title: "Grocery & Mart", cat: "Food", amount: "₹2,450", date: "Today" },
    { title: "Internet & Utilities", cat: "Bills", amount: "₹1,899", date: "Yesterday" },
    { title: "Fuel Station", cat: "Travel", amount: "₹1,200", date: "24 Aug" },
  ];

  return (
    <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        
        {/* Top Header & Copy */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          {/* <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/60 px-3.5 py-1 text-xs font-medium text-slate-300 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Simple, honest personal finance
          </div> */}

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
            Track every daily expenses. <br />
            <span className="text-emerald-400">Budget with clarity.</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            A fast, distraction-free expense tracker built for individuals who want complete control over their money. No ads, no complex setup, just clean numbers.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <Link
              to="/register"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-150 shadow-sm"
            >
              <span>Start Tracking Free</span>
              <ArrowRight size={16} />
            </Link>

            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/40 hover:bg-slate-800 hover:border-slate-600 px-6 py-3.5 text-sm font-medium text-slate-200 transition-colors"
            >
              <span>Explore Live Dashboard</span>
            </Link>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-emerald-400" /> No credit card required
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-emerald-400" /> Encrypted database
            </span>
          </div>
        </div>

        {/* Real Product UI Mockup (Authentic Fintech Dashboard Layout) */}
        <div className="relative mx-auto max-w-5xl rounded-2xl border border-slate-800 bg-[#0D111D] p-5 sm:p-7 shadow-2xl shadow-black/80">
          
          {/* Top Window Bar */}
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800/80">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-slate-700" />
              <div className="h-3 w-3 rounded-full bg-slate-700" />
              <div className="h-3 w-3 rounded-full bg-slate-700" />
              <span className="ml-2 text-xs font-mono text-slate-400">app.spendwise.in/dashboard</span>
            </div>
            <span className="text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
              Live Sync Active
            </span>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span>Total Balance</span>
                <Wallet size={16} className="text-emerald-400" />
              </div>
              <p className="text-2xl font-bold text-white tracking-tight">₹48,520</p>
              <p className="text-[11px] text-emerald-400 mt-1">+₹14,200 this month</p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span>August Expenses</span>
                <ArrowDownRight size={16} className="text-rose-400" />
              </div>
              <p className="text-2xl font-bold text-white tracking-tight">₹26,800</p>
              <p className="text-[11px] text-slate-400 mt-1">₹13,200 remaining in budget</p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span>Savings Rate</span>
                <TrendingUp size={16} className="text-emerald-400" />
              </div>
              <p className="text-2xl font-bold text-white tracking-tight">38.4%</p>
              <p className="text-[11px] text-slate-400 mt-1">Target: 35.0%</p>
            </div>
          </div>

          {/* Chart + Recent Expenses Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            
            {/* 6-Month Expense Velocity Bar Chart */}
            <div className="lg:col-span-7 rounded-xl border border-slate-800 bg-slate-900/40 p-5 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
                    Monthly Expense Velocity
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">Last 6 Months</p>
                </div>
                <span className="text-xs font-medium text-slate-300">Avg: ₹32,000/mo</span>
              </div>

              <div className="flex items-end justify-between gap-3 h-36 pt-4 border-b border-slate-800 pb-2">
                {chartData.map((d, i) => (
                  <div key={d.month} className="flex flex-1 flex-col items-center gap-2 h-full justify-end">
                    <div
                      className={`w-full max-w-[28px] rounded-t-md transition-all ${
                        i === chartData.length - 1
                          ? "bg-emerald-500 shadow-sm"
                          : "bg-slate-700/60 hover:bg-slate-700"
                      }`}
                      style={{ height: `${d.height}%` }}
                    />
                    <span className={`text-[10px] ${i === chartData.length - 1 ? "text-emerald-400 font-semibold" : "text-slate-400"}`}>
                      {d.month}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-3">
                <span>Lowest: ₹26.8k (Jun)</span>
                <span>Peak: ₹41.5k (Apr)</span>
              </div>
            </div>

            {/* Recent Expenses List */}
            <div className="lg:col-span-5 rounded-xl border border-slate-800 bg-slate-900/40 p-5 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
                  Recent Outgoings
                </h4>
                <span className="text-[11px] text-slate-400">August</span>
              </div>

              <div className="flex flex-col divide-y divide-slate-800/80">
                {recentItems.map((item) => (
                  <div key={item.title} className="py-2.5 flex items-center justify-between first:pt-0 last:pb-0">
                    <div>
                      <p className="text-xs font-medium text-slate-200">{item.title}</p>
                      <span className="text-[10px] text-slate-400">{item.cat} · {item.date}</span>
                    </div>
                    <span className="text-xs font-semibold text-slate-200">{item.amount}</span>
                  </div>
                ))}
              </div>

              {/* Mini Budget Pill */}
              <div className="mt-4 pt-3 border-t border-slate-800">
                <div className="flex items-center justify-between text-[11px] mb-1.5">
                  <span className="text-slate-400">Monthly Budget (₹40,000)</span>
                  <span className="font-semibold text-emerald-400">67% used</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: "67%" }} />
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;