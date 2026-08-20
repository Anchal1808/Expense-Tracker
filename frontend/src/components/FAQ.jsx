import { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";

const faqs = [
  {
    q: "Is SpendWise completely free to use?",
    a: "Yes! SpendWise offers a generous free tier. You can log unlimited transactions, track multiple spending categories, configure budgets, and view analytics without any hidden charges.",
  },
  {
    q: "How secure is my personal financial data?",
    a: "We implement defense-in-depth security. Your password is encrypted with 10-round bcrypt hashing, sessions are secured with signed JWT tokens, and all network traffic is protected with 256-bit SSL encryption.",
  },
  {
    q: "Can I use SpendWise across mobile and desktop?",
    a: "Yes. SpendWise is responsive by design. Whether you are adding a quick expense from your iPhone on the go or analyzing monthly trends from your 4K desktop monitor, your data is always in sync.",
  },
  {
    q: "How do category-wise budgets work?",
    a: "You can set tailored monthly limits for categories like Food, Travel, Shopping, Bills, etc. As you log expenses, SpendWise visually charts your progress and gives early warnings before you overspend.",
  },
  {
    q: "Can I log both Income and Expenses?",
    a: "Absolutely. SpendWise supports both inflows (salaries, freelancing, investments) and outflows, giving you a crystal-clear breakdown of your net cash flow and monthly savings rate.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="relative py-28 scroll-mt-20">
      <div className="relative mx-auto max-w-5xl px-6 sm:px-10 lg:px-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/25 bg-blue-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-400 mb-4">
            <HelpCircle size={13} />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Got Questions?{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-400 bg-clip-text text-transparent">
              We've Got Answers
            </span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-gray-300 leading-relaxed">
            Everything you need to know about SpendWise, privacy, and account setup.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                className={`overflow-hidden rounded-3xl border transition-all duration-300 backdrop-blur-2xl ${
                  isOpen
                    ? "border-orange-500/40 bg-gradient-to-b from-white/[0.06] to-white/[0.02] shadow-[0_15px_40px_rgba(249,115,22,0.1)]"
                    : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between p-6 sm:p-7 text-left transition"
                >
                  <span className="text-base sm:text-lg font-bold text-white pr-4 leading-snug">
                    {faq.q}
                  </span>
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-gray-400 transition-all duration-300 ${
                      isOpen ? "rotate-180 text-orange-400 border-orange-500/40 bg-orange-500/15" : ""
                    }`}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-7 text-sm sm:text-base leading-relaxed text-gray-300 border-t border-white/5 pt-5 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default FAQ;
