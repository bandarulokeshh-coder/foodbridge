import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import Calculator from "@/components/Calculator";
import Features from "@/components/Features";
import Impact from "@/components/Impact";
import Stories from "@/components/Stories";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-50 bg-ink px-4 py-3 font-display font-bold text-paper focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:outline-3 focus:outline-offset-2 focus:outline-marigold"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Calculator />
        <Features />
        <Impact />
        <Stories />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
