import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Is SpendWise free to use?",
    a: "Yes. SpendWise is completely free. You can track unlimited expenses, view historical 6-month charts, categorize spending, and configure your monthly budget with zero cost.",
  },
  {
    q: "How is my personal financial data protected?",
    a: "We use 10-round bcrypt password hashing and signed JSON Web Tokens (JWT) for secure authentication. Every request is verified, and your database records are strictly isolated to your account.",
  },
  {
    q: "Can I log both income and daily expenses?",
    a: "Yes. You can add both inflows (salary, freelancing, investments) and outgoings (food, bills, transport, etc.). SpendWise automatically calculates your net balance and savings rate.",
  },
  {
    q: "How does the monthly budget limit work?",
    a: "You set a monthly target in rupees. The dashboard automatically compares your current month's expenses against this limit, showing your progress bar and alerting you if you go over budget.",
  },
  {
    q: "Does SpendWise require linking my bank account?",
    a: "No. You never need to link your bank account or share sensitive netbanking credentials. You have total privacy and manual control over your logged records.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="relative py-24 border-t border-slate-800/80 scroll-mt-14">
      <div className="relative mx-auto max-w-4xl px-6 sm:px-10 lg:px-16">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-2">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-base text-slate-300">
            Clear answers to common questions about SpendWise.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                className="rounded-xl border border-slate-800 bg-[#0E1322] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between p-5 text-left transition"
                >
                  <span className="text-sm sm:text-base font-semibold text-white pr-4">
                    {faq.q}
                  </span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-slate-400 transition-transform ${
                      isOpen ? "rotate-180 text-emerald-400" : ""
                    }`}
                  >
                    <ChevronDown size={16} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-sm leading-relaxed text-slate-400 border-t border-slate-800/60 pt-4">
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
