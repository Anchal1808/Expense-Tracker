import { Link } from "react-router-dom";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { Heart, ArrowUp } from "lucide-react";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#04060E] text-gray-400">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 xl:px-20 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-orange-600 via-orange-500 to-amber-400 p-[1px] shadow-lg shadow-orange-500/25">
                <div className="flex h-full w-full items-center justify-center rounded-xl bg-[#090D22]">
                  <span className="text-xl font-black bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
                    $
                  </span>
                </div>
              </div>
              <span className="text-2xl font-black tracking-tight text-white">
                Spend<span className="text-orange-500">Wise</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400 max-w-sm">
              The intelligent personal finance platform for ambitious individuals. Track cash flow, master category budgets, and build long-term wealth with peace of mind.
            </p>

            {/* Social Icons */}
            <div className="mt-7 flex items-center gap-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 transition-all hover:border-orange-500/50 hover:bg-orange-500/15 hover:text-orange-400"
                aria-label="Twitter"
              >
                <FaTwitter size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 transition-all hover:border-orange-500/50 hover:bg-orange-500/15 hover:text-orange-400"
                aria-label="Instagram"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 transition-all hover:border-orange-500/50 hover:bg-orange-500/15 hover:text-orange-400"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={16} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 transition-all hover:border-orange-500/50 hover:bg-orange-500/15 hover:text-orange-400"
                aria-label="GitHub"
              >
                <FaGithub size={16} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-2 md:col-start-7">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-5">
              Product
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <a href="#features" className="transition hover:text-orange-400">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="transition hover:text-orange-400">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#testimonials" className="transition hover:text-orange-400">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#faq" className="transition hover:text-orange-400">
                  FAQ
                </a>
              </li>
              <li>
                <Link to="/dashboard" className="transition hover:text-orange-400">
                  Live Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Account Links */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-5">
              Account
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <Link to="/login" className="transition hover:text-orange-400">
                  Sign In
                </Link>
              </li>
              <li>
                <Link to="/register" className="transition hover:text-orange-400">
                  Create Account
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="transition hover:text-orange-400">
                  My Expenses
                </Link>
              </li>
            </ul>
          </div>

          {/* Company / Legal */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-5">
              Legal & Trust
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <a href="#" className="transition hover:text-orange-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-orange-400">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-orange-400">
                  Security Architecture
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-orange-400">
                  Support Center
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} SpendWise Technologies Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <p className="flex items-center gap-1.5">
              Crafted with <Heart size={12} className="text-orange-500 fill-orange-500 inline" /> for smart budgeters worldwide
            </p>
            <button
              onClick={scrollToTop}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-gray-400 transition hover:text-white hover:border-white/20"
              aria-label="Scroll to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;