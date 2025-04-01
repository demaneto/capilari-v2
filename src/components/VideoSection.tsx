import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "Vdc2VBD7jp4";

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  return (
    <section id="video" className="relative bg-primary/5 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title">O Procedimento</h2>
        <p className="text-center mb-8 max-w-2xl mx-auto text-gray-700">
          Acompanhe as etapas do transplante capilar até o resultado final
        </p>
        <div className="relative max-w-[360px] mx-auto rounded-lg overflow-hidden shadow-xl">
          {isPlaying ? (
            <div className="relative w-full aspect-[9/16]">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                title="Vídeo do procedimento"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="relative">
              <div className="w-full aspect-[9/16] bg-primary/20 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    onClick={handlePlayVideo}
                    className="bg-white/80 hover:bg-white text-primary rounded-full w-16 h-16 flex items-center justify-center group transition-all"
                  >
                    <Play
                      size={30}
                      className="ml-1 group-hover:scale-110 transition-transform"
                    />
                  </Button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/70 to-transparent p-4 text-white">
                  <p className="font-medium">
                    Transplante Capilar: Do Procedimento ao Resultado
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            * Clique para reproduzir o vídeo e acompanhar a transformação
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
