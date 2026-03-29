import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import MenuSection from "@/src/components/MenuSection";
import AboutSection from "@/src/components/AboutSection";
import ContactSection from "@/src/components/ContactSection";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <MenuSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  );
}
