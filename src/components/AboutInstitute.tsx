import React from "react";

const AboutInstitute = () => {
  return (
    <section className="section-padding bg-primary text-white">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-white">
          Instituto Capilari
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative aspect-video overflow-hidden rounded-lg shadow-xl">
              <picture>
                <source
                  media="(min-width: 1024px)"
                  srcSet="/images/institute/institute-desktop.webp"
                  type="image/webp"
                />
                <source
                  media="(min-width: 768px)"
                  srcSet="/images/institute/institute-tablet.webp"
                  type="image/webp"
                />
                <source
                  srcSet="/images/institute/institute-mobile.webp"
                  type="image/webp"
                />
                <source
                  media="(min-width: 1024px)"
                  srcSet="/images/institute/institute-desktop.jpg"
                  type="image/jpeg"
                />
                <source
                  media="(min-width: 768px)"
                  srcSet="/images/institute/institute-tablet.jpg"
                  type="image/jpeg"
                />
                <img
                  src="/images/institute/institute-mobile.jpg"
                  alt="Instituto Capilari"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
              
              <div className="absolute bottom-0 w-full p-6">
                <div className="flex items-center text-white">
                  <div className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-5 h-5 text-gold"
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
                  <span className="text-sm">Curitiba - PR</span>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <p className="text-white/90 mb-6 leading-relaxed">
              O Instituto Capilari surgiu com o intuito de oferecer os tratamentos médicos, clínicos e cirúrgicos disponíveis para o tratamento da calvície e saúde capilar.
            </p>
            <p className="text-white/90 mb-6 leading-relaxed">
              Com equipe experiente e atendimento focado no tratamento e cirurgia capilar (transplante capilar), dispomos de tecnologias de diagnóstico e terapias para o combate da calvície e recuperação dos fios.
            </p>
            <p className="text-white/90 mb-6 leading-relaxed">
              A restauração capilar agrega procedimentos clínicos e cirúrgicos com objetivo de tratar a calvície e outras formas de alopecia, de forma efetiva. O transplante capilar é um procedimento cirúrgico gratificante. Além da transformação física significativa, é notável a melhora da autoestima.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-5 h-5 text-gold"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-white/70">Atendimento</p>
                  <p className="font-semibold">Personalizado</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-5 h-5 text-gold"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-white/70">Tecnologia</p>
                  <p className="font-semibold">De ponta</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-5 h-5 text-gold"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-white/70">Equipe</p>
                  <p className="font-semibold">Especializada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutInstitute;
