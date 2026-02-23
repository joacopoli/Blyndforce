import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';

interface InvestorsPageProps {
  onBack: () => void;
}

export const InvestorsPage: React.FC<InvestorsPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20 animate-fade-in-up selection:bg-black selection:text-white">
      
      <section className="max-w-7xl mx-auto px-6 mb-24 md:mb-32 pt-10 md:pt-20">
        <ScrollReveal>
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-apple-gray mb-6 block">
            Investor Relations
          </span>
          <h1 className="text-5xl md:text-8xl font-semibold tracking-tighter mb-8 text-apple-black">
            Crecimiento <br/>
            <span className="text-[#86868b]">Exponencial.</span>
          </h1>
        </ScrollReveal>
      </section>

      <section className="max-w-7xl mx-auto px-6 mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-gray-100 pt-12">
              <div className="col-span-1">
                  <h3 className="text-2xl font-bold mb-4">Nuestra Tesis</h3>
                  <p className="text-apple-gray leading-relaxed">
                      El mercado de RPA (Robotic Process Automation) está roto. Es demasiado caro y complejo. Blyndforce democratiza la fuerza laboral digital usando LLMs y Visión Computacional, creando un mercado direccionable de trillones de dólares: el salario administrativo global.
                  </p>
              </div>
              <div className="col-span-1">
                   <h3 className="text-2xl font-bold mb-4">Métricas Clave</h3>
                   <ul className="space-y-4">
                       <li className="flex justify-between border-b border-gray-100 pb-2">
                           <span className="text-gray-500">Retention Rate</span>
                           <span className="font-mono font-bold">98.5%</span>
                       </li>
                       <li className="flex justify-between border-b border-gray-100 pb-2">
                           <span className="text-gray-500">Gross Margin</span>
                           <span className="font-mono font-bold">72%</span>
                       </li>
                       <li className="flex justify-between border-b border-gray-100 pb-2">
                           <span className="text-gray-500">LTV / CAC</span>
                           <span className="font-mono font-bold">5.4x</span>
                       </li>
                   </ul>
              </div>
              <div className="col-span-1">
                  <h3 className="text-2xl font-bold mb-4">Contacto</h3>
                  <p className="text-apple-gray leading-relaxed mb-6">
                      Para consultas sobre rondas de inversión abiertas y acceso al Data Room.
                  </p>
                  <a href="mailto:investors@blyndforce.com" className="text-blue-600 font-bold hover:underline">
                      investors@blyndforce.com
                  </a>
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