import { Link } from "react-router-dom";
import {
  ArrowRight,
  Play,
  DollarSign,
  Wallet,
  CreditCard,
  ArrowDownLeft,
  ShoppingCart,
  TrendingUp,
  Sparkles,
  ShieldCheck,
  Zap,
} from "lucide-react";

function Hero() {
  const chartData = [
    { month: "Jan", income: 55, expense: 78 },
    { month: "Feb", income: 68, expense: 92 },
    { month: "Mar", income: 62, expense: 70 },
    { month: "Apr", income: 74, expense: 88 },
    { month: "May", income: 60, expense: 82 },
    { month: "Jun", income: 70, expense: 65 },
  ];

  return (
    <section className="relative overflow-hidden pt-8 pb-20 lg:pt-14 lg:pb-32">
      {/* Multi-layered Ambient Spotlights */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-gradient-to-b from-orange-500/15 via-purple-600/10 to-transparent blur-[160px]" />
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-purple-700/15 blur-[170px]" />
      <div className="pointer-events-none absolute -right-40 top-1/4 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[170px]" />

      {/* Main Container with generous side margins */}
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          
          {/* ================= LEFT COLUMN: COPY & CONVERSION ================= */}
          <div className="relative z-10 lg:col-span-6 xl:col-span-6 text-center lg:text-left">
            {/* Announcement Badge */}
            {/* <div className="inline-flex items-center gap-2.5 rounded-full border border-orange-500/25 bg-gradient-to-r from-orange-500/10 via-amber-500/5 to-transparent px-4 py-1.5 backdrop-blur-xl shadow-[0_0_20px_rgba(249,115,22,0.15)] mb-6">
              <Sparkles size={14} className="text-orange-400 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-orange-300">
                SpendWise 2.0 • Intelligent Cash Flow
              </span>
            </div> */}

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
              Track Your Expenses with{" "}
              <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">
                SpendWise
              </span>{" "}
              {/* Precision. */}
            </h1>

            {/* Value Proposition Subtitle */}
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-gray-300 max-w-xl mx-auto lg:mx-0">
             Stay in control of your spending, make smarter financial choices, and turn everyday expenses into better savings.
            </p>

            {/* Action CTAs */}
            <div className="mt-9 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Link
                to="/register"
                className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-orange-500 via-orange-500 to-amber-500 px-8 py-4 text-sm sm:text-base font-bold text-white shadow-[0_0_35px_rgba(249,115,22,0.4)] transition-all duration-300 hover:shadow-[0_0_50px_rgba(249,115,22,0.6)] hover:scale-[1.03]"
              >
                <span>Start Free Today</span>
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/dashboard"
                className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 text-sm sm:text-base font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/10 hover:border-white/25 hover:shadow-lg hover:shadow-black/30"
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500/20 text-orange-400">
                  <Play size={11} fill="currentColor" />
                </div>
                <span>Live Dashboard Demo</span>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-6 border-t border-white/10 pt-7 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-emerald-400" />
                <span>256-Bit SSL Encrypted</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap size={16} className="text-orange-400" />
                <span>Instant Setup (No Card Required)</span>
              </div>
              <div className="flex items-center gap-1.5 text-amber-400 font-bold">
                <span>★★★★★</span>
                <span className="text-white ml-1">4.9/5 Rating</span>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: LUXURY 3D DASHBOARD PREVIEW ================= */}
          <div className="relative z-10 lg:col-span-6 xl:col-span-6">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Decorative Background Glow for Card Deck */}
              <div className="absolute -inset-1 rounded-[36px] bg-gradient-to-r from-orange-500/20 via-purple-500/20 to-blue-500/20 opacity-70 blur-2xl" />

              {/* Main Bento Container */}
              <div className="relative rounded-[32px] border border-white/15 bg-[#0A0E24]/85 p-6 sm:p-7 backdrop-blur-2xl shadow-[0_30px_100px_rgba(0,0,0,0.8)]">
                
                {/* Header of Preview Box */}
                <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-3 w-3 rounded-full bg-red-500/80" />
                    <div className="flex h-3 w-3 rounded-full bg-yellow-500/80" />
                    <div className="flex h-3 w-3 rounded-full bg-green-500/80" />
                    <span className="ml-2 text-xs font-mono text-gray-400">spendwise.app/dashboard</span>
                  </div>
                  <span className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                    Live Syncing
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Total Income Card */}
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-5 backdrop-blur-md transition-all hover:border-emerald-500/30 hover:bg-white/[0.05]">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400">
                        <Wallet size={18} />
                      </div>
                      <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                        +28.4%
                      </span>
                    </div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                      Total Income
                    </p>
                    <h3 className="mt-1 text-2xl font-black text-white tracking-tight">
                      ₹62,000
                    </h3>
                  </div>

                  {/* Total Expense Card */}
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-5 backdrop-blur-md transition-all hover:border-orange-500/30 hover:bg-white/[0.05]">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-500/15 text-orange-400">
                        <DollarSign size={18} />
                      </div>
                      <span className="text-[11px] font-bold text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded-full">
                        -12.8%
                      </span>
                    </div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                      Total Expenses
                    </p>
                    <h3 className="mt-1 text-2xl font-black text-white tracking-tight">
                      ₹31,480
                    </h3>
                  </div>

                  {/* Holographic Obsidian SpendWise Black Card */}
                  <div className="sm:col-span-2 relative overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-tr from-[#12152b] via-[#1b2144] to-[#111738] p-5 shadow-2xl">
                    <div className="pointer-events-none absolute -right-10 -bottom-10 h-36 w-36 rounded-full bg-orange-500/20 blur-3xl" />
                    <div className="pointer-events-none absolute -left-10 -top-10 h-36 w-36 rounded-full bg-purple-500/20 blur-3xl" />

                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <div className="flex items-center gap-2">
                        <div className="h-6 w-8 rounded-md bg-gradient-to-br from-amber-300 via-amber-400 to-amber-600 shadow-inner flex items-center justify-center">
                          <div className="h-3 w-5 border border-amber-900/40 rounded-sm" />
                        </div>
                        <span className="font-bold tracking-widest text-white text-xs">SPENDWISE BLACK</span>
                      </div>
                      <CreditCard size={18} className="text-orange-400" />
                    </div>

                    <p className="mt-5 font-mono text-base tracking-[4px] text-gray-200 font-semibold">
                      •••• •••• •••• 9104
                    </p>

                    <div className="mt-4 flex items-center justify-between text-[11px] text-gray-400 pt-3 border-t border-white/10">
                      <div>
                        <span className="text-[9px] block uppercase text-gray-500 font-bold">Cardholder</span>
                        <span className="font-semibold text-white tracking-wide">Anchal Sharma</span>
                      </div>
                      <div className="text-right">
                        <span className="text-[9px] block uppercase text-gray-500 font-bold">Valid Thru</span>
                        <span className="font-semibold text-white tracking-wide">08/30</span>
                      </div>
                    </div>
                  </div>

                  {/* Cash Flow Mini Chart */}
                  <div className="sm:col-span-2 rounded-2xl border border-white/10 bg-white/[0.02] p-4 backdrop-blur-md">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <TrendingUp size={15} className="text-orange-400" />
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                          Monthly Cash Flow Trend
                        </h4>
                      </div>
                      <span className="text-[10px] text-gray-400">Last 6 Months</span>
                    </div>

                    <div className="flex items-end justify-between gap-3 h-24 pt-2 border-b border-white/10 pb-2">
                      {chartData.map((item) => (
                        <div key={item.month} className="flex flex-1 flex-col items-center gap-1.5 h-full justify-end">
                          <div className="flex items-end gap-1.5 w-full justify-center">
                            <div
                              className="w-2.5 rounded-t-sm bg-gradient-to-t from-emerald-500 to-teal-300 shadow-[0_0_10px_rgba(16,185,129,0.3)]"
                              style={{ height: `${item.income}%` }}
                            />
                            <div
                              className="w-2.5 rounded-t-sm bg-gradient-to-t from-orange-500 to-amber-400 shadow-[0_0_10px_rgba(249,115,22,0.3)]"
                              style={{ height: `${item.expense}%` }}
                            />
                          </div>
                          <span className="text-[10px] font-medium text-gray-400">{item.month}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-2.5 flex items-center justify-center gap-5 text-[10px] font-medium text-gray-400">
                      <span className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-emerald-400" /> Income
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-orange-500" /> Expenses
                      </span>
                    </div>
                  </div>

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