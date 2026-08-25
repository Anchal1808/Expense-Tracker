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
    <div className="min-h-screen bg-[#090C15] text-slate-100 selection:bg-emerald-500 selection:text-slate-950 font-sans antialiased overflow-x-hidden">
      <Navbar />
      <Hero />
      <StatsBar />
      <Features />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CTABanner />
      <Footer />
    </div>
  );
}

export default LandingPage;