import React from "react";
import { Button } from "@/components/ui/button";
import OptimizedImage from "./OptimizedImage";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet="/images/hero/hero-desktop.webp"
            type="image/webp"
          />
          <source
            media="(min-width: 768px)"
            srcSet="/images/hero/hero-tablet.webp"
            type="image/webp"
          />
          <source
            srcSet="/images/hero/hero-mobile.webp"
            type="image/webp"
          />
          <source
            media="(min-width: 1024px)"
            srcSet="/images/hero/hero-desktop.jpg"
            type="image/jpeg"
          />
          <source
            media="(min-width: 768px)"
            srcSet="/images/hero/hero-tablet.jpg"
            type="image/jpeg"
          />
          <img
            src="/images/hero/hero-mobile.jpg"
            alt="Hero background"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
            loading="eager"
            decoding="sync"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
        <div className="max-w-3xl mx-auto md:mx-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-playfair">
            Dra. Flávia Basilio
          </h1>
          <h2 className="text-xl md:text-2xl text-white mb-6">
            Dermatologista dedicada ao Transplante Capilar em Curitiba
          </h2>
          <p className="text-white text-lg md:text-xl mb-8 max-w-2xl">
            Técnicas avançadas para resultados naturais e densidade capilar
            restaurada com segurança e eficácia.
          </p>
          <Button
            className="bg-gold hover:bg-gold-light text-primary rounded-md px-8 py-6 text-lg transition-all transform hover:scale-105"
            onClick={() => window.location.href = "#contato"}
          >
            Agende sua Consulta
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
