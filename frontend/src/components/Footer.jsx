import { Link } from "react-router-dom";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { ArrowUp } from "lucide-react";
import BrandLogo from "./BrandLogo";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-slate-800 bg-[#070A12] text-slate-400">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-14">
          
          {/* Brand Column */}
          <div className="md:col-span-5">
            <Link to="/" className="inline-block mb-4">
              <BrandLogo size="lg" />
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              A minimalist, distraction-free expense tracker. Built for individuals who want complete clarity over their financial habits.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-2.5">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-400 transition hover:text-white hover:border-slate-700"
                aria-label="Twitter"
              >
                <FaTwitter size={14} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-400 transition hover:text-white hover:border-slate-700"
                aria-label="Instagram"
              >
                <FaInstagram size={14} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-400 transition hover:text-white hover:border-slate-700"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={14} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-400 transition hover:text-white hover:border-slate-700"
                aria-label="GitHub"
              >
                <FaGithub size={14} />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="md:col-span-2 md:col-start-7">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Product
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Account Links */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Account
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/login" className="hover:text-white transition-colors">
                  Sign In
                </Link>
              </li>
              <li>
                <Link to="/register" className="hover:text-white transition-colors">
                  Create Account
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="hover:text-white transition-colors">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Privacy
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Security
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800 pt-8 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} SpendWise. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Built with care for mindful budgeters</span>
            <button
              onClick={scrollToTop}
              className="flex h-7 w-7 items-center justify-center rounded-md border border-slate-800 bg-slate-900 text-slate-400 transition hover:text-white"
              aria-label="Scroll to top"
            >
              <ArrowUp size={13} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;