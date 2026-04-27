import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Units } from "../components/Units";
import { About } from "../components/About";
import { Features } from "../components/Features";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";

export function Landing() {
  return (
    <div
      className="min-h-screen w-full overflow-x-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <Navbar />
      <main>
        <Hero />
        <Units />
        <About />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
