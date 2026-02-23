import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export const Manifesto: React.FC = () => {
  return (
    <section className="py-24 md:py-40 px-6 md:px-12 bg-[#F5F5F7]">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-6 block">
            El Concepto
          </span>
          <h2 className="text-3xl md:text-6xl font-semibold leading-tight text-apple-black mb-10 md:mb-12 tracking-tight">
            No es otro software.<br />
            Es mano de obra digital.
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={150}>
          <div className="space-y-6 md:space-y-8">
            <p className="text-lg md:text-2xl text-apple-gray leading-relaxed font-normal max-w-3xl mx-auto">
              Imagine a alguien sentado frente a una computadora. Entra a su banco, descarga facturas, redacta correos y carga datos en su sistema.
            </p>
            <p className="text-lg md:text-2xl text-apple-gray leading-relaxed font-normal max-w-3xl mx-auto">
              Blyndforce hace exactamente eso, pero a velocidad luz y sin intervención humana.
            </p>
            <div className="pt-8">
                <p className="text-xl md:text-3xl text-apple-black leading-relaxed font-medium max-w-3xl mx-auto">
                Usted da la orden por WhatsApp.<br/>Su agente hace el clic en el mundo real.
                </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};