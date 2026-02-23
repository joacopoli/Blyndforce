import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';

interface SupportPageProps {
  onBack: () => void;
}

export const SupportPage: React.FC<SupportPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20 animate-fade-in-up selection:bg-black selection:text-white">
      
      <section className="max-w-7xl mx-auto px-6 mb-24 md:mb-32 pt-10 md:pt-20 text-center">
        <ScrollReveal>
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-apple-gray mb-6 block">
            Concierge Service
          </span>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-8 text-apple-black">
            Soporte <br/>
            <span className="text-[#86868b]">Human-in-the-Loop.</span>
          </h1>
          <p className="text-xl md:text-2xl font-light text-apple-black max-w-3xl mx-auto leading-relaxed">
            Aunque nuestros agentes son digitales, nuestro soporte es radicalmente humano. Ingenieros senior disponibles 24/7 para resolver anomalías críticas.
          </p>
        </ScrollReveal>
      </section>

      <section className="max-w-5xl mx-auto px-6 mb-32">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             <div className="bg-[#F5F5F7] p-10 rounded-3xl">
                 <h3 className="text-2xl font-bold text-apple-black mb-4">Soporte Crítico (L1)</h3>
                 <p className="text-apple-gray mb-8">Para interrupciones de servicio o bloqueos de seguridad.</p>
                 <a href="mailto:priority@blyndforce.com" className="bg-black text-white px-6 py-3 rounded-full font-medium inline-block">
                     priority@blyndforce.com
                 </a>
                 <p className="mt-4 text-xs text-gray-500">Tiempo de respuesta: &lt; 15 min.</p>
             </div>
             <div className="bg-white border border-gray-200 p-10 rounded-3xl">
                 <h3 className="text-2xl font-bold text-apple-black mb-4">Consultas Generales</h3>
                 <p className="text-apple-gray mb-8">Para ajustes de configuración, nuevas integraciones o facturación.</p>
                 <a href="mailto:concierge@blyndforce.com" className="text-blue-600 font-bold hover:underline inline-block text-lg">
                     concierge@blyndforce.com
                 </a>
                 <p className="mt-4 text-xs text-gray-500">Tiempo de respuesta: &lt; 4 horas.</p>
             </div>
         </div>
      </section>

      <div className="text-center pb-20">
        <button onClick={onBack} className="text-apple-black font-medium hover:underline underline-offset-4">
            Volver al inicio
        </button>
      </div>
    </div>
  );
};