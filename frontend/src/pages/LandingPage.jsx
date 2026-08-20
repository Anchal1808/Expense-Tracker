import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import StatsBar from "../components/StatsBar";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import CTABanner from "../components/CTABanner";
import Footer from "../components/Footer";

function LandingPage() {
  return (
    <div className="relative min-h-screen bg-[#050711] text-slate-100 selection:bg-orange-500 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Background Ambient Grid & Radial Glow */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-grid-pattern opacity-40" />
      <div className="pointer-events-none fixed inset-0 z-0 bg-radial-glow opacity-80" />

      {/* Main Content Layers */}
      <div className="relative z-10">
        {/* Floating Glass Navigation Header */}
        <Navbar />

        {/* Hero Section */}
        <Hero />

        {/* Key Metrics & Trust Bar */}
        <StatsBar />

        {/* Features Bento Grid */}
        <Features />

        {/* 3-Step Roadmap */}
        <HowItWorks />

        {/* Executive Testimonials */}
        <Testimonials />

        {/* Interactive FAQ */}
        <FAQ />

        {/* High-Impact CTA Banner */}
        <CTABanner />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;