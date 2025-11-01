import Navigation from "../components/layouts/Navigation";
import HeroSection from "../components/sections/HeroSection";
import ProductsSection from "../components/sections/ProductsSection";
import ServicesSection from "../components/sections/ServicesSection";
import AboutSection from "../components/sections/AboutSection";
import ContactSection from "../components/sections/ContactSection";
import Footer from "../components/layouts/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    // 👇 Adds fade-in effect on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("animate-fade-in");
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // ✅ Scroll to contact section when URL hash is #contact
  useEffect(() => {
    if (location.hash === "#contact") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        setTimeout(() => {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }, 200); // small delay ensures DOM is ready
      }
    }
  }, [location]);

  return (
    <>
      <Navigation />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <ProductsSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
