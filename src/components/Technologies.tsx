
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const technologies = [
  {
    title: "Lâminas de Safira",
    description:
      "Lâminas de safira são mais delicadas que as de aço e possibilitam um ajuste preciso das unidades foliculares na área receptora.",
    image: "https://images.unsplash.com/photo-1564937440969-a61f99bf37c0?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Implanters",
    description:
      "Implanters que preservam o bulbo e aumentam a taxa de pega dos enxertos e a qualidade dos fios.",
    image: "https://images.unsplash.com/photo-1568011735655-e9141a1e25f3?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Técnica FUE",
    description:
      "Unidades foliculares extraídas uma a uma com micropunch cilíndrico.",
    image: "https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Microscópios",
    description:
      "As unidades foliculares são inspecionadas e categorizadas no microscópio antes de seguirem para a implantação.",
    image: "https://images.unsplash.com/photo-1516193635984-6ffb85ea42df?q=80&w=1000&auto=format&fit=crop"
  },
];

const Technologies = () => {
  return (
    <section id="tecnologias" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <h2 className="section-title">
          <span className="heading-accent">Tecnologias</span>
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Combinamos as mais avançadas tecnologias para assegurar resultados excepcionais em cada procedimento.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img
                  src={tech.image}
                  alt={tech.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">{tech.title}</h3>
                <p className="text-gray-600">{tech.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
