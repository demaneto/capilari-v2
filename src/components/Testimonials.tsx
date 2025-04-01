import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Victor C.",
    content:
      "A Dra Favia se demonstrou muito atenciosa e conhecedora do que estava fazendo, em todos os momentos de atendimento, o que proporcionou a confiança necessária para realização do procedimento. Estou satisfeito e agradecido!",
  },
  {
    name: "Eduardo D.",
    content:
      "Nota 10 para Dra. Flávia e equipe. São ótimas profissionais. Desde o primeiro contato, até a cirurgia só tive boas experiências. Recomendo.",
  },
  {
    name: "Fábio T.",
    content:
      "Estou extremamente grato Dra Flávia , são quase 2 anos pós transplante. Se soubesse o resultado certamente teria realizado o procedimento antes. Ficou absolutamente natural graças a sua técnica, dedicação e paciência pois estava bastante ansioso. Apesar da expectativa de um procedimento mais longo a sedação não permitiu perceber o tempo. Por gentileza estenda minha gratidão à toda equipe, sempre muito atenciosos e profissionais.",
  },
  {
    name: "Rafael E.",
    content:
      "Uma ótima estrutura, com uma equipe muito dedicada e prestativa. Recomendo!!!",
  },
  {
    name: "Fabricio F.",
    content:
      "Excelente atendimento, muito caprichosa e detalhista. Recomendo",
  },
  {
    name: "Danilo G.",
    content:
      "Excelente experiência desde a primeira consulta até a realização do procedimento. Agora é esperar o resultado. Obrigado!",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1
    );
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1
    );
  };

  return (
    <section id="depoimentos" className="section-padding bg-primary text-white">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-white">
          Depoimentos
        </h2>
        
        <div className="relative mt-12">
          <div className="hidden md:flex overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full md:w-1/3 px-4 flex-shrink-0">
                  <Card className="bg-white/10 backdrop-blur-sm border-0 h-full">
                    <CardContent className="p-8 h-full flex flex-col">
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                        ))}
                      </div>
                      <p className="text-white/90 italic mb-6 flex-grow">"{testimonial.content}"</p>
                      <p className="font-bold text-gold">{testimonial.name}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile testimonials - one at a time */}
          <div className="md:hidden">
            <div className="mb-6">
              <Card className="bg-white/10 backdrop-blur-sm border-0">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-white/90 italic mb-4">"{testimonials[currentIndex].content}"</p>
                  <p className="font-bold text-gold">{testimonials[currentIndex].name}</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-2 rounded-full shadow-lg transition-all"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-2 rounded-full shadow-lg transition-all"
              aria-label="Próximo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
