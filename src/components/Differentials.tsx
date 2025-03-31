
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Star, Award, Heart, UserCheck } from "lucide-react";

const differentials = [
  {
    title: "Atendimento de excelência",
    description: "Avaliado com 5 estrelas no Google por dezenas de pacientes satisfeitos.",
    icon: <Star className="h-8 w-8 text-gold" />,
  },
  {
    title: "Formação Especializada",
    description: "Mestrado e Doutorado pela UFPR, com sólida base científica e técnica. Membro: ABCRC e ISHRS",
    icon: <Award className="h-8 w-8 text-gold" />,
  },
  {
    title: "Tecnologia de ponta",
    description: "Utilizamos materiais e equipamentos de altíssima qualidade para sua segurança e conforto.",
    icon: <Check className="h-8 w-8 text-gold" />,
  },
  {
    title: "Resultados naturais",
    description: "Intervenções sutis, com aparência natural e muitas vezes imperceptível.",
    icon: <Heart className="h-8 w-8 text-gold" />,
  },
  {
    title: "Médico Anestesiologista",
    description: "Um médico anestesiologista presente durante todo o seu procedimento garantindo uma experiência agradável e segura.",
    icon: <UserCheck className="h-8 w-8 text-gold" />,
  },
];

const Differentials = () => {
  return (
    <section id="diferenciais" className="section-padding bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="section-title">
          <span className="heading-accent">Nossos Diferenciais</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {differentials.map((item, index) => (
            <Card 
              key={index}
              className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 bg-white"
            >
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 rounded-full bg-primary/5">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-14">
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

export default Differentials;
