import { Hero } from "@/components/sections/Hero";
import { Navbar } from "@/components/sections/Navbar";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Footer, CallToAction } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between overflow-x-hidden selection:bg-dsp-primary">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <CallToAction />
      <Footer />
    </main>
  );
}
