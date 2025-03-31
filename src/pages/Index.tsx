
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import Technologies from "@/components/Technologies";
import Differentials from "@/components/Differentials";
import Testimonials from "@/components/Testimonials";
import ResultsSection from "@/components/ResultsSection";
import AboutDoctor from "@/components/AboutDoctor";
import TechniqueProcess from "@/components/TechniqueProcess";
import AboutInstitute from "@/components/AboutInstitute";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <VideoSection />
      <Technologies />
      <Differentials />
      <ResultsSection />
      <Testimonials />
      <AboutDoctor />
      <TechniqueProcess />
      <AboutInstitute />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
