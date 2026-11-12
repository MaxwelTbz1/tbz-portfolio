import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Experience from "@/components/sections/Experience";

import Hero from "@/components/sections/Hero";
import SelectedWork from "@/components/sections/SelectedWork";
import AboutPreview from "@/components/sections/AboutPreview";
import Expertise from "@/components/sections/Expertise";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <AboutPreview />
        <Experience />
        <SelectedWork />
        <Expertise />
      </main>

      <Footer />
    </>
  );
}
