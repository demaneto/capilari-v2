import React from "react";
import { Button } from "@/components/ui/button";

const AboutDoctor = () => {
  return (
    <section id="sobre" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <h2 className="section-title">
          <span className="heading-accent">Sobre</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-3xl font-bold text-primary mb-6 font-playfair">Dra. Flávia Basílio</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Médica dermatologista com especialização em alopecias e transplante capilar. Com residência, mestrado e doutorado pela UFPR, atuou como professora de dermatologia na instituição.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Possui formação internacional em cirurgia capilar pela Sociedade Italiana de Tricologia, além de especializações complementares pela Universidade de Miami e participação ativa em sociedades científicas nacionais e internacionais.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Cofundadora e atualmente Diretora Técnica do Instituto Capilari, dedicando-se ao tratamento e à restauração capilar com técnicas modernas e resultados naturais.
            </p>
            
            <div className="flex space-x-4">
              <Button
                className="bg-primary hover:bg-primary-light text-white"
                onClick={() => window.location.href = "#contato"}
              >
                Agende sua consulta conosco
              </Button>
              
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
                onClick={() => window.location.href = "#contato"}
              >
                Ver horários disponíveis
              </Button>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -top-5 -left-5 w-32 h-32 bg-gold-light rounded-full opacity-50"></div>
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <picture>
                  <source
                    media="(min-width: 1024px)"
                    srcSet="/images/doctor/doctor-desktop.webp"
                    type="image/webp"
                  />
                  <source
                    media="(min-width: 768px)"
                    srcSet="/images/doctor/doctor-tablet.webp"
                    type="image/webp"
                  />
                  <source
                    srcSet="/images/doctor/doctor-mobile.webp"
                    type="image/webp"
                  />
                  <source
                    media="(min-width: 1024px)"
                    srcSet="/images/doctor/doctor-desktop.jpg"
                    type="image/jpeg"
                  />
                  <source
                    media="(min-width: 768px)"
                    srcSet="/images/doctor/doctor-tablet.jpg"
                    type="image/jpeg"
                  />
                  <img
                    src="/images/doctor/doctor-mobile.jpg"
                    alt="Dra. Flávia Basílio"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>
              <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-primary/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDoctor;
