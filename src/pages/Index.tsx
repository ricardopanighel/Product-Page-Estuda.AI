import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Demo from "@/components/Demo";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Benefits />
      <Demo />
      <Testimonials />
      <CTA />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Index;
