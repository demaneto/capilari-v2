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
    image: "/images/results/result-1-desktop.webp",
  },
  {
    id: 7,
    image: "/images/results/result-7-desktop.webp",
  },
  {
    id: 6,
    image: "/images/results/result-6-desktop.webp",
  },
  {
    id: 5,
    image: "/images/results/result-5-desktop.webp",
  },
  {
    id: 4,
    image: "/images/results/result-4-desktop.webp",
  },
  {
    id: 3,
    image: "/images/results/result-3-desktop.webp",
  },
  {
    id: 2,
    image: "/images/results/result-2-desktop.webp",
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
                          <picture>
                            <source
                              media="(min-width: 1024px)"
                              srcSet={item.image.replace('desktop', 'desktop')}
                              type="image/webp"
                            />
                            <source
                              media="(min-width: 768px)"
                              srcSet={item.image.replace('desktop', 'tablet')}
                              type="image/webp"
                            />
                            <source
                              srcSet={item.image.replace('desktop', 'mobile')}
                              type="image/webp"
                            />
                            <source
                              media="(min-width: 1024px)"
                              srcSet={item.image.replace('desktop', 'desktop').replace('.webp', '.jpg')}
                              type="image/jpeg"
                            />
                            <source
                              media="(min-width: 768px)"
                              srcSet={item.image.replace('desktop', 'tablet').replace('.webp', '.jpg')}
                              type="image/jpeg"
                            />
                            <img
                              src={item.image.replace('desktop', 'mobile').replace('.webp', '.jpg')}
                              alt="Resultado do procedimento"
                              className="w-full aspect-[4/3] object-cover"
                              loading="lazy"
                              decoding="async"
                            />
                          </picture>
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
                          <picture>
                            <source
                              media="(min-width: 1024px)"
                              srcSet={item.image.replace('desktop', 'desktop')}
                              type="image/webp"
                            />
                            <source
                              media="(min-width: 768px)"
                              srcSet={item.image.replace('desktop', 'tablet')}
                              type="image/webp"
                            />
                            <source
                              srcSet={item.image.replace('desktop', 'mobile')}
                              type="image/webp"
                            />
                            <source
                              media="(min-width: 1024px)"
                              srcSet={item.image.replace('desktop', 'desktop').replace('.webp', '.jpg')}
                              type="image/jpeg"
                            />
                            <source
                              media="(min-width: 768px)"
                              srcSet={item.image.replace('desktop', 'tablet').replace('.webp', '.jpg')}
                              type="image/jpeg"
                            />
                            <img
                              src={item.image.replace('desktop', 'mobile').replace('.webp', '.jpg')}
                              alt="Resultado do procedimento"
                              className="w-full aspect-[4/3] object-cover"
                              loading="lazy"
                              decoding="async"
                            />
                          </picture>
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
