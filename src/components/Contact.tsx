import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { getWhatsAppUrl } from "@/utils/whatsapp";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
  };

  return (
    <section id="contato" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <h2 className="section-title">
          <span className="heading-accent">Entre em Contato</span>
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
          Estamos à disposição para esclarecer suas dúvidas e agendar sua consulta de avaliação.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-md overflow-hidden">
              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.8838089960815!2d-49.2970809!3d-25.435583900000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce3fed61c0fe1%3A0x1e66624bb7f5ce0e!2sR.%20Frederico%20Cantarelli%2C%20484%20-%20Bigorrilho%2C%20Curitiba%20-%20PR%2C%2080710-240!5e0!3m2!1spt-BR!2sbr!4v1713380759189!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </CardContent>
            </Card>

            <div className="mt-8 space-y-6">
              <div className="flex items-start">
                <div className="bg-primary/5 p-3 rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6 text-primary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-primary text-lg mb-1">Endereço</h3>
                  <p className="text-gray-600 text-lg">
                    Rua Frederico Cantarelli, 484<br />
                    Bigorrilho, Curitiba - PR, 80710-240
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/5 p-3 rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6 text-primary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-primary text-lg mb-1">WhatsApp</h3>
                  <p className="text-gray-600 text-lg">
                    <a href={getWhatsAppUrl()} className="hover:text-primary">
                      Fale Conosco no WhatsApp
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/5 p-3 rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6 text-primary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-primary text-lg mb-1">Redes Sociais</h3>
                  <p className="text-gray-600 text-lg">
                    <a 
                      href="https://www.instagram.com/draflaviabasilio/" 
                      className="hover:text-primary"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Instagram @draflaviabasilio
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
