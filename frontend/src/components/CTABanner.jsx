import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Sparkles, Shield, Zap } from "lucide-react";

function CTABanner() {
  const perks = [
    "No credit card required",
    "Instant 30-second setup",
    "Encrypted cloud backup",
    "Free forever tier",
  ];

  return (
    <section className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 xl:px-20">
        
        {/* Main Glowing Container */}
        <div className="relative overflow-hidden rounded-[36px] border border-white/15 bg-gradient-to-br from-orange-600/25 via-[#0D122D] to-purple-900/30 p-10 sm:p-14 lg:p-20 backdrop-blur-2xl shadow-[0_35px_100px_rgba(0,0,0,0.7)] text-center">
          
          {/* Ambient Lighting Orbs */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-orange-500/25 blur-[120px]" />
          <div className="pointer-events-none absolute -left-24 -bottom-24 h-96 w-96 rounded-full bg-purple-600/25 blur-[120px]" />

          <div className="relative z-10 max-w-3xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-orange-300 mb-6 shadow-inner">
              <Sparkles size={13} />
              Unlock Your Financial Freedom
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Ready to Take Absolute Control of Your Money?
            </h2>

            {/* Subtitle */}
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-gray-200">
              Join over 25,000+ smart budgeters who use SpendWise every day to eliminate financial stress and grow their wealth.
            </p>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/register"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-orange-500 via-orange-500 to-amber-500 px-9 py-4 text-base font-bold text-white shadow-[0_0_35px_rgba(249,115,22,0.45)] transition-all duration-300 hover:shadow-[0_0_55px_rgba(249,115,22,0.65)] hover:scale-[1.03]"
              >
                <span>Create Free Account</span>
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/login"
                className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/[0.06] px-8 py-4 text-base font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/10 hover:border-white/30"
              >
                Sign In to Account
              </Link>
            </div>

            {/* Checkmark Perks */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs sm:text-sm text-gray-300 pt-8 border-t border-white/10">
              {perks.map((perk) => (
                <div key={perk} className="flex items-center gap-2 font-medium">
                  <CheckCircle2 size={16} className="text-orange-400 shrink-0" />
                  <span>{perk}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default CTABanner;
