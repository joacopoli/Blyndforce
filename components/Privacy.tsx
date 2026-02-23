import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export const Privacy: React.FC = () => {
  return (
    <section className="py-24 md:py-40 px-6 md:px-12 bg-apple-bg-gray mt-12 md:mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-12 md:gap-20">
          
          {/* Image Column - Order 2 on mobile (bottom), Order 1 on desktop (left) */}
          <div className="w-full md:w-1/2 order-2 md:order-1 relative flex justify-center md:justify-end md:mt-16">
             <ScrollReveal>
                <div className="relative max-w-[85%] md:max-w-full mx-auto">
                  {/* Image with CSS Mask for true transparency fade */}
                  <img 
                    src="https://i.ibb.co/Z6qqW08x/fcyguhij.png" 
                    alt="Mano sosteniendo Mac Mini dedicada" 
                    className="w-full h-auto object-contain relative z-10 md:scale-110 origin-center"
                    style={{
                      maskImage: 'linear-gradient(to bottom, black 40%, transparent 95%)',
                      WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 95%)'
                    }}
                  />
                  
                  {/* Heavy Mist/Fog Overlay - Shifted left and widened as requested */}
                  <div className="absolute -bottom-4 -left-16 w-[130%] h-3/5 bg-gradient-to-t from-[#F9FAFB] via-[#F9FAFB]/95 to-transparent z-20 pointer-events-none"></div>
                  
                  {/* Subtle radial glow behind the Mac Mini to emphasize it */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gray-200/50 blur-[80px] rounded-full -z-10"></div>
                </div>
             </ScrollReveal>
          </div>

          {/* Text Column - Order 1 on mobile (top), Order 2 on desktop (right) */}
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <ScrollReveal>
              <span className="text-sm font-semibold tracking-widest uppercase text-apple-gray mb-6 block">
                Privacidad Innegociable
              </span>
              <h3 className="text-4xl md:text-7xl font-semibold tracking-tight text-apple-black mb-8 md:mb-12 leading-tight">
                Tu información es tuya.<br />
                <span className="text-gray-400">Físicamente.</span>
              </h3>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="prose prose-xl prose-gray max-w-none">
                <p className="text-lg md:text-2xl leading-relaxed text-apple-black font-light">
                  A diferencia de la inteligencia en la nube, tu asistente vive en una <strong className="font-semibold text-black">Mac Mini dedicada</strong>. Un procesador solo para vos. Un entorno aislado donde tus claves y datos nunca se mezclan. Soberanía total. Seguridad por hardware.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};