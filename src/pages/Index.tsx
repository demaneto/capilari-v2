import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import ResultsSection from "@/components/ResultsSection";
import Testimonials from "@/components/Testimonials";
import Technologies from "@/components/Technologies";
import Differentials from "@/components/Differentials";
import AboutDoctor from "@/components/AboutDoctor";
import TechniqueProcess from "@/components/TechniqueProcess";
import AboutInstitute from "@/components/AboutInstitute";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <VideoSection />
      <ResultsSection />
      <Testimonials />
      <Technologies />
      <Differentials />
      <AboutDoctor />
      <TechniqueProcess />
      <AboutInstitute />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
