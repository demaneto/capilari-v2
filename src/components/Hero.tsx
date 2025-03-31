
import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-top z-0"
        style={{
          backgroundImage: 
            "linear-gradient(rgba(65, 42, 91, 0.7), rgba(65, 42, 91, 0.6)), url('/lovable-uploads/51d7efc8-6b5d-4d2d-904d-95b2da565ad3.png')",
        }}
      ></div>
      
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

      <div className="absolute bottom-6 left-0 right-0 flex justify-center">
        <a href="#tecnologias" className="animate-bounce">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
