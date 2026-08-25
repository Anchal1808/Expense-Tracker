import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

function CTABanner() {
  const perks = [
    "100% Free forever",
    "No credit card required",
    "Setup in 30 seconds",
    "Encrypted data storage",
  ];

  return (
    <section className="relative py-20 border-t border-slate-800/80">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        
        <div className="relative rounded-2xl border border-slate-800 bg-[#0E1322] p-10 sm:p-14 text-center">
          <div className="max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Get Started Today
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-2">
              Ready to take control of your spending?
            </h2>

            <p className="mt-4 text-base text-slate-300">
              Join thousands of smart budgeters using SpendWise to build better financial habits.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
              <Link
                to="/register"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition-colors shadow-sm"
              >
                <span>Create Free Account</span>
                <ArrowRight size={16} />
              </Link>

              <Link
                to="/login"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/40 hover:bg-slate-800 hover:border-slate-600 px-6 py-3.5 text-sm font-medium text-slate-200 transition-colors"
              >
                Sign In
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400 pt-6 border-t border-slate-800">
              {perks.map((perk) => (
                <div key={perk} className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 size={14} className="text-emerald-400" />
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
