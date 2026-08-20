import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";

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
    <header className="sticky top-0 z-50 transition-all duration-300 py-4 px-4 sm:px-8 lg:px-16">
      <div
        className={`mx-auto max-w-7xl transition-all duration-300 rounded-2xl sm:rounded-full px-5 sm:px-8 py-3.5 flex items-center justify-between border ${
          scrolled
            ? "border-white/15 bg-[#070A18]/85 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.7)]"
            : "border-white/10 bg-[#070A18]/60 backdrop-blur-xl shadow-lg"
        }`}
      >
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0 group">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-orange-600 via-orange-500 to-amber-400 p-[1px] shadow-lg shadow-orange-500/25 transition-transform group-hover:scale-105">
            <div className="flex h-full w-full items-center justify-center rounded-xl bg-[#090D22]">
              <span className="text-xl font-black bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
                $
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-black tracking-tight text-white leading-tight">
              Spend<span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Wise</span>
            </span>
          </div>
        </Link>

        {/* Center Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 sm:gap-2 lg:gap-3 rounded-full border border-white/5 bg-white/[0.03] px-4 py-1.5 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-1.5 text-xs lg:text-sm font-medium text-gray-300 transition-all rounded-full hover:text-white hover:bg-white/[0.08]"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Desktop Auth Actions */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <Link
            to="/login"
            className="text-xs lg:text-sm font-semibold text-gray-300 transition hover:text-white px-3 py-2 rounded-lg hover:bg-white/[0.04]"
          >
            Sign In
          </Link>
          <Link
            to="/register"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-orange-500 via-orange-500 to-amber-500 px-5 py-2.5 text-xs lg:text-sm font-semibold text-white shadow-[0_0_25px_rgba(249,115,22,0.35)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(249,115,22,0.55)] hover:scale-[1.03]"
          >
            <span>Get Started</span>
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-gray-300 transition hover:text-white hover:bg-white/10"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mx-auto max-w-7xl mt-3 rounded-2xl border border-white/15 bg-[#090D24]/95 p-6 backdrop-blur-2xl shadow-2xl md:hidden animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-gray-300 transition hover:bg-white/[0.06] hover:text-white"
              >
                {link.name}
              </a>
            ))}
            <div className="mt-3 pt-4 border-t border-white/10 flex flex-col gap-3">
              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="flex h-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-sm font-semibold text-white transition hover:bg-white/[0.08]"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                onClick={() => setMobileMenuOpen(false)}
                className="flex h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition hover:brightness-110"
              >
                Get Started Free
                <ArrowRight size={16} />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;