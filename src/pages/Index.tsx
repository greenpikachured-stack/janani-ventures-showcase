import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProjectDetailsSection from "@/components/ProjectDetailsSection";
import AboutSection from "@/components/AboutSection";
import PropertySection from "@/components/PropertySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProjectDetailsSection />
        <AboutSection />
        <PropertySection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
