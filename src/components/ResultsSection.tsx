
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const cases = [
  {
    id: 1,
    title: "Caso 1",
    description: "Transplante com 3000 folículos",
    image: "/images/resultado-1.jpg", // Substitua pelo caminho real da imagem
  },
  {
    id: 2,
    title: "Caso 2",
    description: "Tratamento de calvície avançada",
    image: "/images/resultado-2.jpg", // Substitua pelo caminho real da imagem
  },
  {
    id: 3,
    title: "Caso 3",
    description: "Restauração de linha frontal",
    image: "/images/resultado-3.jpg", // Substitua pelo caminho real da imagem
  },
  {
    id: 4,
    title: "Caso 4",
    description: "Tratamento para densidade capilar",
    image: "/images/resultado-4.jpg", // Substitua pelo caminho real da imagem
  },
  {
    id: 5,
    title: "Caso 5",
    description: "Técnica FUE avançada",
    image: "/images/resultado-5.jpg", // Substitua pelo caminho real da imagem
  },
];

const ResultsSection = () => {
  return (
    <section id="resultados" className="section-padding bg-primary/5">
      <div className="container mx-auto px-6">
        <h2 className="section-title">
          Resultados
        </h2>
        <p className="text-center mb-12 max-w-2xl mx-auto text-gray-700">
          Conheça os resultados dos nossos procedimentos e veja a transformação dos nossos pacientes
        </p>

        {/* Desktop Carousel */}
        <div className="hidden md:block">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {cases.map((item) => (
                <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="border-0 overflow-hidden shadow-md">
                      <CardContent className="p-0">
                        <div className="relative">
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full aspect-[4/3] object-cover" 
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                            <h3 className="font-bold text-lg">{item.title}</h3>
                            <p className="text-white/90 text-sm">{item.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:flex mt-8 justify-center gap-4">
              <CarouselPrevious className="relative inset-auto left-0 translate-y-0" />
              <CarouselNext className="relative inset-auto right-0 translate-y-0" />
            </div>
          </Carousel>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
          >
            <CarouselContent>
              {cases.map((item) => (
                <CarouselItem key={item.id} className="basis-full">
                  <div className="p-1">
                    <Card className="border-0 overflow-hidden shadow-md">
                      <CardContent className="p-0">
                        <div className="relative">
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full aspect-[4/3] object-cover" 
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                            <h3 className="font-bold text-lg">{item.title}</h3>
                            <p className="text-white/90 text-sm">{item.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4 gap-4">
              <CarouselPrevious className="relative inset-auto left-0 translate-y-0" />
              <CarouselNext className="relative inset-auto right-0 translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
