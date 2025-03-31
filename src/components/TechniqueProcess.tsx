
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    title: "Marcação",
    description: "Aqui ficará definido o desenho da HAIR LINE, dos locais onde serão implantados os folículos e também os locais de extração.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Sedação e Anestesia local",
    description: "É iniciada a sedação pelo médico anestesiologista e realizada a anestesia local pela Dra Flávia Basilio.",
    image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b993c?q=80&w=1936&auto=format&fit=crop"
  },
  {
    title: "Microincisões com lâmina de safira",
    description: "Todas as incisões onde serão implantados as unidades foliculares são realizadas. Aqui fica definida a densidade a angulação de crescimento e a distribuição dos fios. E também sabemos quantas unidades foliculares precisam ser extraídas.",
    image: "https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?q=80&w=1974&auto=format&fit=crop"
  },
  {
    title: "Extração das unidades foliculares",
    description: "Com micro punchs cilíndricos em alta rotação, as unidades foliculares são extraídas uma a uma. Essas unidades vão para inspeção e categorização em microscópio.",
    image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Implantação unidades foliculares",
    description: "Com uso de implanters, as unidades foliculares são inseridas nos locais das incisões.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop"
  },
];

const TechniqueProcess = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="section-title">
          <span className="heading-accent">A Técnica FUE</span>
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          O procedimento é minimamente invasivo e realizado com alta precisão por nossa equipe especializada.
        </p>
        
        <div className="relative">
          {/* Timeline connector */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-primary/20 transform -translate-x-1/2"></div>
          
          {/* Steps */}
          {steps.map((step, index) => (
            <div key={index} className="mb-12 relative">
              <div className={`md:flex items-center ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                {/* Bullet point */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary z-10"></div>
                
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <Card className="border-0 shadow-md overflow-hidden">
                    <div className="h-52 overflow-hidden">
                      <img 
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Empty space for layout */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <a
            href="#contato"
            className="inline-block bg-primary hover:bg-primary-light text-white font-medium py-3 px-8 rounded-md transition-colors"
          >
            Entrar em contato
          </a>
        </div>
      </div>
    </section>
  );
};

export default TechniqueProcess;
