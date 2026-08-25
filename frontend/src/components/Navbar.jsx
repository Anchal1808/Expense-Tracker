import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import BrandLogo from "./BrandLogo";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-50 transition-all duration-200 py-3.5 px-4 sm:px-8 lg:px-16">
      <div
        className={`mx-auto max-w-7xl transition-all duration-200 rounded-2xl px-5 sm:px-7 py-3 flex items-center justify-between border ${
          scrolled
            ? "border-white/[0.09] bg-[#0C101C]/90 backdrop-blur-xl shadow-xl shadow-black/40"
            : "border-white/[0.06] bg-[#0C101C]/60 backdrop-blur-md"
        }`}
      >
        {/* Brand Logo */}
        <Link to="/">
          <BrandLogo size="md" />
        </Link>

        {/* Center Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 sm:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 text-xs lg:text-sm font-medium text-slate-300 transition-colors rounded-lg hover:text-white hover:bg-white/[0.05]"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Desktop Auth Actions */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <Link
            to="/login"
            className="text-xs lg:text-sm font-medium text-slate-300 transition hover:text-white px-3 py-2 rounded-lg hover:bg-white/[0.04]"
          >
            Sign In
          </Link>
          <Link
            to="/register"
            className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 px-4 py-2 text-xs lg:text-sm font-semibold text-slate-950 transition-all duration-150 shadow-sm"
          >
            <span>Get Started</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-300 transition hover:text-white"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mx-auto max-w-7xl mt-2 rounded-2xl border border-white/10 bg-[#0E1322] p-5 backdrop-blur-2xl shadow-2xl md:hidden">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-300 transition hover:bg-white/[0.05] hover:text-white"
              >
                {link.name}
              </a>
            ))}
            <div className="mt-2 pt-3 border-t border-white/10 flex flex-col gap-2.5">
              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="flex h-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-sm font-medium text-white transition hover:bg-white/[0.08]"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                onClick={() => setMobileMenuOpen(false)}
                className="flex h-10 items-center justify-center gap-1.5 rounded-xl bg-emerald-500 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
              >
                Get Started Free
                <ArrowRight size={15} />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;